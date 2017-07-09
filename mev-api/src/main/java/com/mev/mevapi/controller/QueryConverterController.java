package com.mev.mevapi.controller;

import com.mev.mevapi.dto.ResponseResult;
import com.mev.mevapi.model.Query;
import com.mev.mevapi.service.QueryConverterService;
import com.mev.mevapi.utils.ResponseBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class QueryConverterController {

    @Autowired
    QueryConverterService queryConverterService;

    @PostMapping("/getMongoQuery")
    public ResponseResult getMongoQuery(@RequestBody Query query) {
        try {
            return ResponseBuilder.success(queryConverterService.getMongoQuery(query.getSql()));
        } catch (Exception e) {
            return ResponseBuilder.fail(e.getMessage());
        }
    }
}
