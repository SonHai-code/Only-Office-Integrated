package com.sonhai.only_office_integrated.service;

import com.sonhai.only_office_integrated.payload.response.login.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClient.RequestBodySpec;
import org.springframework.web.reactive.function.client.WebClient.ResponseSpec;
import org.springframework.web.reactive.function.client.WebClient.UriSpec;
import org.springframework.web.reactive.function.client.WebClient.RequestHeadersSpec;
import com.sonhai.only_office_integrated.payload.request.LoginRequest;
import reactor.core.publisher.Mono;
import java.nio.charset.StandardCharsets;
import java.time.ZonedDateTime;

@Service
public class AuthService {
    private final WebClient client;

    @Autowired
    public AuthService( WebClient client) {
        this.client = client;
    };

    // Get the response.
    public Mono<Object> getLoginResponse(LoginRequest loginRequest) {
        // 1. Define the method for the request - POST
        UriSpec<RequestBodySpec> uriSpec = client.method(HttpMethod.POST);

        // 2. Define the URL for the request
        RequestBodySpec bodySpec = uriSpec.uri("/api/2.0/authentication");

        // Define the body for request.
        RequestHeadersSpec<?> headersSpec =
                bodySpec.body(Mono.just(loginRequest), LoginRequest.class);

        // Define the headers for request.
        ResponseSpec responseSpec = headersSpec
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .accept(MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML)
                .acceptCharset(StandardCharsets.UTF_8)
                .ifNoneMatch("*")
                .ifModifiedSince(ZonedDateTime.now())
                .retrieve();

        // Getting the response.
        Mono<Object> res = headersSpec.exchangeToMono(response -> {
            if (response.statusCode().equals(HttpStatus.OK)) {
                return response.bodyToMono(LoginResponse.class);
            } else if (response.statusCode().is4xxClientError()) {
                return Mono.just("Error Response");
            } else {
                return response.createException().flatMap(Mono::error);
            }});
        return res;
    }

}
