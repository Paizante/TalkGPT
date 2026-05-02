package br.com.publicacoeschecker

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.RadioButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {

    private val repository = PublicacaoRepository(PublicacaoServiceFactory.create())

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                TelaBusca(
                    onBuscar = { tipoBusca, termo, onResultado ->
                        lifecycleScope.launch {
                            val resultado = runCatching {
                                repository.buscarEmTodasAsFontes(tipoBusca, termo)
                            }.fold(
                                onSuccess = { consolidado ->
                                    montarMensagemResultado(consolidado)
                                },
                                onFailure = {
                                    "Erro geral ao consultar as fontes. Verifique endpoint e autenticação."
                                }
                            )
                            onResultado(resultado)
                        }
                    }
                )
            }
        }
    }

    private fun montarMensagemResultado(consolidado: BuscaConsolidada): String {
        val cabecalho = "Fontes consultadas: ${FonteDisponivel.entries.size}\n"
        val erros = if (consolidado.fontesComErro.isEmpty()) {
            "Sem falhas de fonte.\n"
        } else {
            "Falhas em: ${consolidado.fontesComErro.joinToString()}.\n"
        }

        if (consolidado.publicacoes.isEmpty()) {
            return "$cabecalho$erros\nNenhuma publicação encontrada."
        }

        val itens = consolidado.publicacoes.joinToString("\n\n") {
            "• [${it.fonte ?: "Fonte não informada"}] ${it.titulo}\n${it.data}\n${it.resumo}"
        }
        return "$cabecalho$erros\n$itens"
    }
}

enum class TipoBusca { NOME, CPF }

@Composable
fun TelaBusca(onBuscar: (TipoBusca, String, (String) -> Unit) -> Unit) {
    var termo by remember { mutableStateOf("") }
    var tipo by remember { mutableStateOf(TipoBusca.NOME) }
    var resultado by remember { mutableStateOf("Informe o nome completo ou CPF para pesquisar em todas as fontes.") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        Text("Busca de Publicações", style = MaterialTheme.typography.headlineSmall)
        Text("Consulta consolidada em todas as fontes cadastradas.")

        Row(verticalAlignment = Alignment.CenterVertically) {
            RadioButton(selected = tipo == TipoBusca.NOME, onClick = { tipo = TipoBusca.NOME })
            Text("Nome", modifier = Modifier.padding(end = 8.dp))
            RadioButton(selected = tipo == TipoBusca.CPF, onClick = { tipo = TipoBusca.CPF })
            Text("CPF")
        }

        OutlinedTextField(
            value = termo,
            onValueChange = { termo = it },
            modifier = Modifier.fillMaxWidth(),
            label = {
                Text(if (tipo == TipoBusca.NOME) "Nome completo" else "CPF (somente números)")
            }
        )

        Button(
            onClick = {
                if (termo.isBlank()) {
                    resultado = "Preencha um termo válido."
                } else {
                    onBuscar(tipo, termo) { resultado = it }
                }
            }
        ) {
            Text("Buscar em todas as fontes")
        }

        Text("Resultado:")
        Text(resultado)

        Text(
            text = "Aviso LGPD: só use dados pessoais com base legal e autorização adequada.",
            style = MaterialTheme.typography.bodySmall
        )
    }
}
