package com.example.api.exceptions;

public class BookException extends RuntimeException{
   private String message;

    public BookException(String mess){

        super(mess);
        this.message=mess;

    }
}
