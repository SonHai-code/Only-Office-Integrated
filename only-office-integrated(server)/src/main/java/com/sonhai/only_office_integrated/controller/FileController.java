package com.sonhai.only_office_integrated.controller;

import com.sonhai.only_office_integrated.service.FileService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RestController
@RequestMapping("/api/file")
public class FileController {
    @Autowired
    FileService fileService;

    @GetMapping("/{fileId}")
    Mono<String> getFileById(@PathVariable("fileId") String fileId,
                             @RequestParam("token") String token,
                             HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Credentials","true");
        response.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
        response.setHeader("Access-Control-Allow-Headers", "*");
        return fileService.getFileById(fileId, token);

    }
}


