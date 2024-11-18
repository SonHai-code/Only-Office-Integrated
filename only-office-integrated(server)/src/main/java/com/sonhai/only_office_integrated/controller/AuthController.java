package com.sonhai.only_office_integrated.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.sonhai.only_office_integrated.payload.request.LoginRequest;
import com.sonhai.only_office_integrated.service.AuthService;
import reactor.core.publisher.Mono;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthService authService;

    @PostMapping("/login")
    Mono<Object> login(@RequestBody LoginRequest loginRequest) {
        Mono<Object> res = authService.getLoginResponse(loginRequest);
      return authService.getLoginResponse(loginRequest);
    }

}
