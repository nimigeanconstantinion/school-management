package com.example.api.security;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public enum UserPermissions {
    STUDENT_READ("student:read"),
    STUDENT_WRITE("student:write"),
    COURSE_READ("course:read"),
    BOOK_READ("book:read"),
    BOOK_WRITE("book:write");
    private final String permission;
    public String getPermission(){
        return permission;
    }
}
