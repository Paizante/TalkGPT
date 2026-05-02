package br.com.publicacoeschecker

import retrofit2.http.GET
import retrofit2.http.Query

data class Publicacao(
    val titulo: String,
    val data: String,
    val resumo: String,
    val fonte: String? = null
)

enum class FonteDisponivel(val path: String, val rotulo: String) {
    DIARIO_OFICIAL_UNIAO("dou", "Diário Oficial da União"),
    DIARIO_ESTADUAL("doe", "Diário Oficial Estadual"),
    DIARIO_MUNICIPAL("dom", "Diário Oficial Municipal"),
    JORNAL_TRIBUNAL("tribunais", "Tribunais")
}

interface PublicacaoApi {
    @GET("publicacoes")
    suspend fun buscarPublicacoes(
        @Query("tipo") tipo: String,
        @Query("termo") termo: String,
        @Query("fonte") fonte: String
    ): List<Publicacao>
}
