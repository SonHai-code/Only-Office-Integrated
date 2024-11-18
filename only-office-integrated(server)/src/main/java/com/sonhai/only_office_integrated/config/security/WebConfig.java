package com.sonhai.only_office_integrated.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration

public class WebConfig {

//    @Autowired
//    private AuthEntryPoint unauthorizedHandler;

    @Bean
    public CustomCorsFilter customCorsFilter(){return new CustomCorsFilter();}

    @Bean
    public WebMvcConfigurer webMvcConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:5173")
                        .allowedHeaders("Authorization", "Content-Type", "X-Requested-With", "Accept", "Access-Control-Allow-Headers", "Access-Control-Allow-Origin");
                
            }
        };
    }


}
