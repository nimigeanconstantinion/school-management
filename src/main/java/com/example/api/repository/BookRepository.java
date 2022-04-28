package com.example.api.repository;

import com.example.api.model.Book;
import com.example.api.model.Student;
import com.example.api.model.Book;
import com.example.api.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface BookRepository extends JpaRepository<Book,Long> {
    @Query("select b from Book b where b.student.id =:idS and b.title=:title")
    Optional<Book> findBookByStudentAndTitle(Long idS, String title);


}