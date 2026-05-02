package br.com.publicacoeschecker

import retrofit2.Retrofit
import retrofit2.converter.moshi.MoshiConverterFactory

object PublicacaoServiceFactory {
    private const val BASE_URL = "https://sua-api-aqui.com/"

    fun create(): PublicacaoApi {
        return Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(MoshiConverterFactory.create())
            .build()
            .create(PublicacaoApi::class.java)
    }
}
