package com.sonhai.only_office_integrated.service;

import com.sonhai.only_office_integrated.payload.response.login.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;
import java.time.ZonedDateTime;

@Service
public class FileService {

    private WebClient client;

    @Autowired
    public FileService(WebClient client) {
        this.client = client;
    }

    public Mono<String> getFileById(String fileId, String token) {
        // 1. Define the method for the request - POST
        WebClient.UriSpec<WebClient.RequestBodySpec> uriSpec = client.method(HttpMethod.GET);

        // 2. Define the URL for the request
        WebClient.RequestBodySpec bodySpec = uriSpec.uri("/api/2.0/files/file/" + fileId + "/openedit");

        // Define the headers for request.
        WebClient.ResponseSpec responseSpec = bodySpec
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .headers(h -> h.setBearerAuth(token))
                .accept(MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML)
                .acceptCharset(StandardCharsets.UTF_8)
                .ifNoneMatch("*")
                .ifModifiedSince(ZonedDateTime.now())
                .retrieve();

        // Getting the response.
        Mono<String> res = bodySpec.exchangeToMono(response -> {
            if (response.statusCode().equals(HttpStatus.OK)) {
                return response.bodyToMono(String.class);
            } else if (response.statusCode().is4xxClientError()) {
                return Mono.just("Error Response");
            } else {
                return response.createException().flatMap(Mono::error);
            }});
        return res;
    }








}
