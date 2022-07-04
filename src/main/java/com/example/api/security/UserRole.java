package com.example.api.security;

import com.google.common.collect.Sets;
import lombok.AllArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Set;
import java.util.stream.Collectors;

import static com.example.api.security.UserPermissions.*;

@AllArgsConstructor
public enum UserRole {
     STUDENT(Sets.newHashSet(COURSE_READ,BOOK_READ,BOOK_WRITE,STUDENT_READ,STUDENT_WRITE));
    private final Set<UserPermissions> permissions;

    public Set<UserPermissions> getPermissions() {
        return permissions;
    }

    public Set<SimpleGrantedAuthority> getGrantedAuthorities(){
        Set<SimpleGrantedAuthority> collect=getPermissions()
                .stream()
                .map(e->new SimpleGrantedAuthority(e.getPermission()))
                .collect(Collectors.toSet());
        collect.add(new SimpleGrantedAuthority("ROLE_"+this.name()));
        return collect;
    }
}
