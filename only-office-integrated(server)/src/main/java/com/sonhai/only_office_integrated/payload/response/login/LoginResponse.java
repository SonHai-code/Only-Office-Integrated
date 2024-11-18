package com.sonhai.only_office_integrated.payload.response.login;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponse {
    private Response response;
//    private Integer count;
//    private Link[] links;
//    private Integer status;
    private Integer statusCode;
}
