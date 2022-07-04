package com.example.api.security;

import com.example.api.model.Student;
import com.example.api.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImpl implements UserDetailsService {
    private StudentRepository studentRepository;

    @Autowired
    public UserDetailServiceImpl(StudentRepository studentRepository){
            this.studentRepository=studentRepository;
    }


    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Student student=studentRepository.findStudentByEmail(s).get();
        if(student!=null){
            return student;
        }
        throw new UsernameNotFoundException("User email "+student.getEmail()+" did not exist!!");
    }
}
