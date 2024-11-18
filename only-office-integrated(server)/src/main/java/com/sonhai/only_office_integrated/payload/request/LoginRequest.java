package com.sonhai.only_office_integrated.payload.request;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginRequest {
   private String username;
   private String password;
}
