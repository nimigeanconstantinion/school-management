package com.example.api.services;

import com.example.api.exceptions.*;
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

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;
@TestPropertySource(
        locations="classpath:application-it.properties"
)
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
    @Captor
    private ArgumentCaptor<Course> courseArgumentCaptor;

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
        student.setId(1L);
        Book bk=new Book(fk.book().title());
        bk.setId(3L);
//        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
//
//        Set<ConstraintViolation<Book>> violations = validator.validate(bk);
//       // System.out.println(violations.iterator().next().getMessage());
//        assertThat(violations.size()).isEqualTo(0);

        given(studentRepository.findById(student.getId())).willReturn(Optional.of(student));
        given(this.bookRepository.findBookByStudentAndTitle(student.getId(),bk.getTitle())).willReturn(Optional.empty());

        underTest.addBook(student.getId(),bk);

        then(studentRepository).should().save(studentArgumentCaptor.capture());
        Student stt=studentArgumentCaptor.getValue();
        assertThat(stt).isEqualTo(student);


    }

    @Test
    void addBookNotOK() {
        student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        Book bk=new Book(fk.book().title());
        bk.setId(3L);
        given(studentRepository.findById(student.getId())).willReturn(Optional.of(student));
        given(bookRepository.findBookByStudentAndTitle(student.getId(),bk.getTitle())).willReturn(Optional.of(bk));
        assertThatThrownBy(()->underTest.addBook(student.getId(),bk)).isInstanceOf(BookException.class).hasMessageContaining("You have this book");
    }


    @Test
    void removeBookOK() {
        student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        student.setId(1L);
        Book bk=new Book(fk.book().title());
        bk.setId(5L);
        given(studentRepository.findById(student.getId())).willReturn(Optional.of(student));
        given(bookRepository.findBookByStudentAndTitle(student.getId(),bk.getTitle())).willReturn(Optional.of(bk));
        underTest.removeBook(student.getId(),bk);
        then(studentRepository).should().save(studentArgumentCaptor.capture());
        Student st=studentArgumentCaptor.getValue();
        assertThat(st).isEqualTo(student);

    }


    @Test
    void removeBookNotOK() {
        student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        Book bk=new Book(fk.book().title());
        given(bookRepository.findBookByStudentAndTitle(student.getId(),bk.getTitle())).willReturn(Optional.empty());

        assertThatThrownBy(()->underTest.removeBook(student.getId(),bk)).isInstanceOf(BookException.class).hasMessageContaining("You don't have");
    }


    @Test
    void addEnrolmentOK() {
        student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        Course c=new Course();
        given(studentRepository.findStudentByEmail(student.getEmail())).willReturn(Optional.of(student));
        given(courseRepository.findById(c.getId())).willReturn(Optional.of(c));
        underTest.addEnrolment(student,c);
        then(studentRepository).should().save(studentArgumentCaptor.capture());
        Student st=studentArgumentCaptor.getValue();
        assertThat(st).isEqualTo(student);

    }


    @Test
    void addEnrolmentNotOKStudent() {
        student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        Course c=new Course();
        given(studentRepository.findStudentByEmail(student.getEmail())).willReturn(Optional.empty());
        assertThatThrownBy(()->underTest.addEnrolment(student,c)).isInstanceOf(StudentException.class).hasMessageContaining("Student not");

        //given(courseRepository.findById(c.getId())).willReturn(Optional.of(c));

       // assertThatThrownBy(()->underTest.addEnrolment(student,c)).isInstanceOf(CourseException.class).hasMessageContaining("Course didn't exist");
    }


    @Test
    void addEnrolmentNotOKCourse() {
        student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        Course c=new Course();
        given(studentRepository.findStudentByEmail(student.getEmail())).willReturn(Optional.of(student));

        given(courseRepository.findById(c.getId())).willReturn(Optional.empty());

        assertThatThrownBy(()->underTest.addEnrolment(student,c)).isInstanceOf(CourseException.class).hasMessageContaining("Course didn't exist");
    }


    @Test
    void removeEnrolmentOK() {
        student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        Course c=new Course();
        given(studentRepository.findStudentByEmail(student.getEmail())).willReturn(Optional.of(student));
        given(courseRepository.findById(c.getId())).willReturn(Optional.of(c));
        underTest.removeEnrolment(student,c);
        then(studentRepository).should().save(studentArgumentCaptor.capture());
        Student st=studentArgumentCaptor.getValue();
        assertThat(st).isEqualTo(student);

    }

    @Test
    void removeEnrolmentNotOK() {
        student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        Course c=new Course();
        given(studentRepository.findStudentByEmail(student.getEmail())).willReturn(Optional.empty());
        assertThatThrownBy(()->underTest.removeEnrolment(student,c)).isInstanceOf(StudentException.class).hasMessageContaining("Student not");

        given(studentRepository.findStudentByEmail(student.getEmail())).willReturn(Optional.of(student));

        given(courseRepository.findById(c.getId())).willReturn(Optional.empty());
        assertThatThrownBy(()->underTest.removeEnrolment(student,c)).isInstanceOf(CourseException.class).hasMessageContaining("Course didn't");
    }


    @Test
    void addCourseOK() {
        Course c=new Course("Course","department",2L,"description");
        given(courseRepository.findAll()).willReturn(new ArrayList<>());
        underTest.addCourse(c);
        then(courseRepository).should().save(courseArgumentCaptor.capture());
        Course nC=courseArgumentCaptor.getValue();
        assertThat(nC).isEqualTo(c);

    }


    @Test
    void addCourseNotOK() {
        Course c=new Course("Course","department",2L,"description");
        given(courseRepository.findAll()).willReturn(List.of(c));
        assertThatThrownBy(()->underTest.addCourse(c)).isInstanceOf(CourseException.class).hasMessageContaining("Course exist");
    }


    @Test
    void removeCourseOK() {
        Course c=new Course("Course","department",2L,"description");
        given(courseRepository.findAll()).willReturn(List.of(c));
        underTest.removeCourse(c);
        then(courseRepository).should().delete(courseArgumentCaptor.capture());
        Course nC=courseArgumentCaptor.getValue();
        assertThat(nC).isEqualTo(c);

    }


    @Test
    void removeCourseNotOK() {
        Course c=new Course("Course","department",2L,"description");
        given(courseRepository.findAll()).willReturn(new ArrayList<>());
        assertThatThrownBy(()->underTest.removeCourse(c)).isInstanceOf(CourseException.class).hasMessageContaining("Course didn't");
    }
}