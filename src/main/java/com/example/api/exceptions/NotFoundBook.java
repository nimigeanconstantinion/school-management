package com.example.api.exceptions;

public class NotFoundBook extends RuntimeException{
    public NotFoundBook(String message){
        super(message);
    }
}
