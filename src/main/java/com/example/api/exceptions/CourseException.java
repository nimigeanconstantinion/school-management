package com.example.api.exceptions;

public class CourseException extends RuntimeException{
    private String message;
    public CourseException(String message){
        super(message);

    }
}
