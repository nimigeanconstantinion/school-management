package com.example.api.exceptions;

public class StundentExists extends RuntimeException{

    public StundentExists(String message){
        super(message);
    }
}
