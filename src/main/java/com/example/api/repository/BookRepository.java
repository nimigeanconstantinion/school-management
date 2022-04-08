package com.example.api.repository;

import com.example.api.model.Book;
import com.example.api.model.Student;
import com.example.api.model.Book;
import com.example.api.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface BookRepository extends JpaRepository<Book,Long> {
    @Query("select b from Book b where b.student=?1 and b.title=?2")
    Optional<Book> findBookByStudentAndTitle(Student student, String title);
}
