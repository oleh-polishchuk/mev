package com.mev.mevapi.model;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class Query {

    @JsonView(Views.Query.class)
    @NotNull
    private String sql;

    public Query() {}

    public Query(String sql) {
        this.sql = sql;
    }
}
