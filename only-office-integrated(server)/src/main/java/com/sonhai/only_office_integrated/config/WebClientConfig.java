package com.sonhai.only_office_integrated.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClient.Builder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.Collections;

@Configuration
public class WebClientConfig {
    // Initialize the instance of WebClient class, and put out.
    @Bean
    public WebClient client(){

        Builder builder = WebClient.builder()
                .baseUrl("https://sonhai.onlyoffice.com")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultUriVariables(Collections.singletonMap("url", "https://sonhai.onlyoffice.com"));

//        builder.filter((request, next) -> {
//            final Mono<ClientResponse> response = next.exchange(request);
//            return response.filter(clientResponse -> clientResponse.statusCode() != HttpStatus.UNAUTHORIZED)
//                    // handle 401 Unauthorized (token expired)
//                    .switchIfEmpty(next.exchange(ClientRequest.from(request)
//                            .headers(httpHeaders -> httpHeaders.setBearerAuth(getNewToken()))
//                            .build()));
//        })
        return builder.build();
    }

}
