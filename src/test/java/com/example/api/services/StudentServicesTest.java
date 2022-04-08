package com.example.api.services;

import com.example.api.exceptions.NotFoundStudent;
import com.example.api.exceptions.StudentException;
import com.example.api.exceptions.StundentExists;
import com.example.api.model.Book;
import com.example.api.model.Course;
import com.example.api.model.Student;
import com.example.api.repository.BookRepository;
import com.example.api.repository.CourseRepository;
import com.example.api.repository.StudentRepository;
import com.github.javafaker.Faker;
import org.assertj.core.api.AssertionsForClassTypes;
import org.assertj.core.api.ThrowableAssert;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.TestPropertySources;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;

class StudentServicesTest {
    Faker fk=new Faker();
    @Mock
    private StudentRepository studentRepository;
    @Mock
    private CourseRepository courseRepository;
    @Mock
    private BookRepository bookRepository;

    @Mock
    private Student student;

    @Captor
    private ArgumentCaptor<Student> studentArgumentCaptor;

    @Autowired
    private StudentServices underTest;


    @BeforeEach
    void setUp(){
        MockitoAnnotations.openMocks(this);
        underTest=new StudentServices(studentRepository,bookRepository,courseRepository);
    }

    @Test
    void addStudentOK(){
        Student st=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        given(this.studentRepository.findStudentByEmail(st.getEmail())).willReturn(Optional.empty());
        underTest.addStudent(st);

        then(studentRepository).should().save(studentArgumentCaptor.capture());
        Student newS=studentArgumentCaptor.getValue();
        assertThat(newS).isEqualTo(st);
    }

    @Test
    void addStudentNotOK(){
        Student st=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        given(this.studentRepository.findStudentByEmail(st.getEmail())).willReturn(Optional.of(st));

        assertThatThrownBy(()->underTest.addStudent(st)).isInstanceOf(StundentExists.class).hasMessageContaining("exists");
    }

    @Test
    void removeStudentOK() {
        Student st=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        given(this.studentRepository.findStudentByEmail(st.getEmail())).willReturn(Optional.of(st));
        underTest.removeStudent(st);
        then(studentRepository).should().delete(studentArgumentCaptor.capture());
        Student delS=studentArgumentCaptor.getValue();
        assertThat(delS).isEqualTo(st);

    }

    @Test
    void removeStudentNotOK() {
        Student st=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        given(this.studentRepository.findStudentByEmail(st.getEmail())).willReturn(Optional.empty());

        assertThatThrownBy(()->underTest.removeStudent(st)).isInstanceOf(NotFoundStudent.class).hasMessageContaining("not");
    }

    @Test
    void addBookOK() {
        student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        Book bk=new Book(fk.book().title());
        bk.setId(3L);
        student.setId(1L);
        given(this.bookRepository.findBookByStudentAndTitle(student,bk.getTitle())).willReturn(Optional.empty());

        underTest.addBook(student,bk);
       // then(student.addBook()).should().addBook(bk);
        then(studentRepository).should().save(studentArgumentCaptor.capture());
        Student stt=studentArgumentCaptor.getValue();
        assertThat(stt).isEqualTo(student);


    }

    @Test
    void removeBook() {
    }

    @Test
    void addEnrolment() {
    }

    @Test
    void removeEnrolment() {
    }


    @Test
    void addCourse() {
    }

    @Test
    void removeCourse() {
    }
}