package com.mev;

import com.github.vincentrussell.query.mongodb.sql.converter.ParseException;
import com.github.vincentrussell.query.mongodb.sql.converter.Main;

import java.io.IOException;

public class MainWrapper {

    public static void main(String[] args) {
        try {
            Main.main(args);
        } catch (ClassNotFoundException | ParseException | org.apache.commons.cli.ParseException | IOException err) {
            System.out.println(err.getMessage());
        }
    }
}
