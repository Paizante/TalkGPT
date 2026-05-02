package br.com.publicacoeschecker

import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope

class PublicacaoRepository(private val api: PublicacaoApi) {
    suspend fun buscarEmTodasAsFontes(tipo: TipoBusca, termo: String): BuscaConsolidada = coroutineScope {
        val chamadas = FonteDisponivel.entries.map { fonte ->
            async {
                fonte to runCatching {
                    api.buscarPublicacoes(tipo.name.lowercase(), termo, fonte.path)
                        .map { pub -> pub.copy(fonte = fonte.rotulo) }
                }
            }
        }

        val resultados = chamadas.awaitAll()
        val publicacoes = mutableListOf<Publicacao>()
        val fontesComErro = mutableListOf<String>()

        resultados.forEach { (fonte, resultado) ->
            resultado
                .onSuccess { publicacoes += it }
                .onFailure { fontesComErro += fonte.rotulo }
        }

        BuscaConsolidada(
            publicacoes = publicacoes.sortedByDescending { it.data },
            fontesComErro = fontesComErro
        )
    }
}

data class BuscaConsolidada(
    val publicacoes: List<Publicacao>,
    val fontesComErro: List<String>
)
