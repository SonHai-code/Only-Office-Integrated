package com.sonhai.only_office_integrated.payload.response.login;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Response {
    private String token;
    private String expires;
    private Boolean sms;
    private Boolean tfa;
}


