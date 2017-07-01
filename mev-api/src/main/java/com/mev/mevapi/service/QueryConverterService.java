package com.mev.mevapi.service;

import com.github.vincentrussell.query.mongodb.sql.converter.MongoDBQueryHolder;
import com.github.vincentrussell.query.mongodb.sql.converter.QueryConverter;
import lombok.extern.slf4j.Slf4j;
import org.bson.Document;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class QueryConverterService {

    public Map<String, Object> getMongoQuery(String sql) throws Exception {
        QueryConverter queryConverter = new QueryConverter(sql);
        MongoDBQueryHolder mongoDBQueryHolder = queryConverter.getMongoQuery();
        String collection = mongoDBQueryHolder.getCollection();
        Document query = mongoDBQueryHolder.getQuery();
        Document projection = mongoDBQueryHolder.getProjection();
        Document sort = mongoDBQueryHolder.getSort();
        Long limit = mongoDBQueryHolder.getLimit();
        List<String> groupBys = mongoDBQueryHolder.getGroupBys();

        log.info("Query " + sql + " is successfully converted.");
        return createMongoQueryResponse(collection, query, projection, sort, limit, groupBys);
    }

    public Map<String, Object> createMongoQueryResponse(String collection, Document query, Document projection, Document sort, Long limit, List<String> groupBys) {
        Map<String, Object> map = new HashMap<>();
        map.put("collection", collection);
        map.put("query", query);
        map.put("projection", projection);
        map.put("sort", sort);
        map.put("limit", limit);
        map.put("groupBys", groupBys);

        return map;
    }
}
