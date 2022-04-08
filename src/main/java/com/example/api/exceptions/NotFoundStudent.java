package com.example.api.exceptions;

public class NotFoundStudent extends RuntimeException{
    public NotFoundStudent(String message){
        super(message);
    }
}
