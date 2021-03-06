package com.mev.mevapi;

import com.github.vincentrussell.query.mongodb.sql.converter.MongoDBQueryHolder;
import com.github.vincentrussell.query.mongodb.sql.converter.ParseException;
import com.github.vincentrussell.query.mongodb.sql.converter.QueryConverter;
import com.mev.mevapi.model.Query;
import com.mev.mevapi.service.QueryConverterService;
import org.bson.Document;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {
        QueryConverterService.class
})
public class MevApiApplicationTests {

    private QueryConverterService queryConverterService = new QueryConverterService();

    Query query;

    @Before
    public void before() {
        query = new Query("select * from users");
    }

    @Test
    public void createMongoQueryResponse() throws ParseException {
        // Given
        QueryConverter queryConverter = new QueryConverter("select name from users where name like 'john'");
        MongoDBQueryHolder mongoDBQueryHolder = queryConverter.getMongoQuery();
        String collection = mongoDBQueryHolder.getCollection();
        Document query = mongoDBQueryHolder.getQuery();
        Document projection = mongoDBQueryHolder.getProjection();
        Document sort = mongoDBQueryHolder.getSort();
        Long limit = mongoDBQueryHolder.getLimit();
        List<String> groupBys = mongoDBQueryHolder.getGroupBys();

        // When
        Map<String, Object> map = queryConverterService.createMongoQueryResponse(collection, query, projection, sort, limit, groupBys);

        // Then
        assertEquals("{groupBys=[], " +
                "query=Document{{name=Document{{$regex=^john$}}}}, " +
                "limit=-1, " +
                "collection=users, " +
                "projection=Document{{_id=0, name=1}}, " +
                "sort=Document{{}}}", map.toString());
    }

    @Test
    public void createMongoQueryResponseWithEmptyParams() throws ParseException {
        // Given
        String collection = "";
        Document query = new Document();
        Document projection = new Document();
        Document sort = new Document();
        Long limit = (long) 0;
        List<String> groupBys = new ArrayList<>();

        // When
        Map<String, Object> map = queryConverterService.createMongoQueryResponse(collection, query, projection, sort, limit, groupBys);

        // Then
        assertEquals("{groupBys=[], " +
                "query=Document{{}}, " +
                "limit=0, " +
                "collection=, " +
                "projection=Document{{}}, " +
                "sort=Document{{}}}", map.toString());
    }

    @Test
    public void getMongoQuery() throws Exception {
        // When
        Map<String, Object> map = queryConverterService.getMongoQuery(query.getSql());

        // Then
        assertEquals("{groupBys=[], " +
                "query=Document{{}}, " +
                "limit=-1, " +
                "collection=users, " +
                "projection=Document{{}}, " +
                "sort=Document{{}}}", map.toString());
    }

    @Test(expected = ParseException.class)
    public void getMongoQueryWithEmptyQuery() throws Exception {
        // Given
        String sql = "";

        // When
        Map<String, Object> map = queryConverterService.getMongoQuery(sql);
    }
}
