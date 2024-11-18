package com.sonhai.only_office_integrated.payload.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Link {
    private String href;
    private String action;
}
