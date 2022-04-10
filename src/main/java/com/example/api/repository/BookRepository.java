package com.example.api.repository;

import com.example.api.model.Book;
import com.example.api.model.Student;
import com.example.api.model.Book;
import com.example.api.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface BookRepository extends JpaRepository<Book,Long> {
    @Query(value = "select * from Book b where b.student_id =?1 and b.title=?2",nativeQuery = true)
    Optional<Book> findBookByStudentAndTitle(Long idS, String title);
}