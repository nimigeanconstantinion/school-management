package com.example.api.services;

import com.example.api.exceptions.*;
import com.example.api.model.Book;
import com.example.api.model.Course;
import com.example.api.model.Student;
import com.example.api.repository.BookRepository;
import com.example.api.repository.CourseRepository;
import com.example.api.repository.StudentRepository;
import com.github.javafaker.Faker;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.*;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.TestPropertySource;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;
import static org.mockito.Mockito.doReturn;

@TestPropertySource(
        locations="classpath:application-it.properties"
)
class StudentServicesTest {
    Faker fk=new Faker();
    @Mock
    private StudentRepository mockStudentRepo;
    @Mock
    private CourseRepository mockCourseRepo;
    @Mock
    private BookRepository mockBookRepo;



    @Captor
    private ArgumentCaptor<Student> studentArgumentCaptor;
    @Captor
    private ArgumentCaptor<Course> courseArgumentCaptor;

    @InjectMocks
    private StudentServices underTest;

    @BeforeEach
    void setUp(){
        MockitoAnnotations.openMocks(this);
        underTest=new StudentServices(mockStudentRepo, mockBookRepo,mockCourseRepo);
    }



    @Test
    void addStudentOK(){
        Student st=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        given(this.mockStudentRepo.findStudentByEmail(st.getEmail())).willReturn(Optional.empty());
        underTest.addStudent(st);

        then(mockStudentRepo).should().save(studentArgumentCaptor.capture());
        Student newS=studentArgumentCaptor.getValue();
        assertThat(newS).isEqualTo(st);
    }


    @Test
    void addStudentNotOK(){
        Student st=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        given(this.mockStudentRepo.findStudentByEmail(st.getEmail())).willReturn(Optional.of(st));

        assertThatThrownBy(()->underTest.addStudent(st)).isInstanceOf(StundentExists.class).hasMessageContaining("exists");
    }


    @Test
    void removeStudentOK() {
        Student st=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        given(this.mockStudentRepo.findStudentByEmail(st.getEmail())).willReturn(Optional.of(st));
        underTest.removeStudent(st);
        then(mockStudentRepo).should().delete(studentArgumentCaptor.capture());
        Student delS=studentArgumentCaptor.getValue();
        assertThat(delS).isEqualTo(st);

    }


    @Test
    void removeStudentNotOK() {
        Student st=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        given(this.mockStudentRepo.findStudentByEmail(st.getEmail())).willReturn(Optional.empty());

        assertThatThrownBy(()->underTest.removeStudent(st)).isInstanceOf(NotFoundStudent.class).hasMessageContaining("not");
    }


    @Test
    void addBookOK() {
        Student student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        student.setId(1L);
        Book bk=new Book(fk.book().title());
        bk.setId(3L);
//        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
//
//        Set<ConstraintViolation<Book>> violations = validator.validate(bk);
//       // System.out.println(violations.iterator().next().getMessage());
//        assertThat(violations.size()).isEqualTo(0);

        given(mockStudentRepo.findById(student.getId())).willReturn(Optional.of(student));
        given(this.mockBookRepo.findBookByStudentAndTitle(student.getId(),bk.getTitle())).willReturn(Optional.empty());

        underTest.addBook(student.getId(),bk);

        then(mockStudentRepo).should().save(studentArgumentCaptor.capture());
        Student stt=studentArgumentCaptor.getValue();
        assertThat(stt).isEqualTo(student);


    }
//
    @Test
    void addBookNotOK() {
        Student student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        Book bk=new Book(fk.book().title());
        bk.setId(3L);
        given(mockStudentRepo.findById(student.getId())).willReturn(Optional.of(student));
        given(mockBookRepo.findBookByStudentAndTitle(student.getId(),bk.getTitle())).willReturn(Optional.of(bk));
        assertThatThrownBy(()->underTest.addBook(student.getId(),bk)).isInstanceOf(BookException.class).hasMessageContaining("You have this book");
    }
//
//
    @Test
    void removeBookOK() {
       Student student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        student.setId(1L);
        Book bk=new Book(fk.book().title());
        bk.setStudent(student);
        bk.setId(5L);

        doReturn(Optional.of(bk)).when(mockBookRepo).findById(5L);
        doReturn(Optional.of(student)).when(mockStudentRepo).findById(1L);
        underTest.removeBook(student.getId(),bk.getId());
        then(mockStudentRepo).should().save(student);


    }


    @Test
    void removeBookNotOK() {
        Student student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        Book bk=new Book(fk.book().title());
        given(mockBookRepo.findBookByStudentAndTitle(student.getId(),bk.getTitle())).willReturn(Optional.empty());

        assertThatThrownBy(()->underTest.removeBook(student.getId(),bk.getId())).isInstanceOf(BookException.class).hasMessageContaining("not exist");
    }
//
//
    @Test
    void addEnrolmentOK() {
          Student s=new Student(fk.name().firstName(),fk.name().lastName(),"aaa","123",20,1);
          Course c=new Course("dsd","sdsd",12.00,"dklk");

          c.setId(1L);
          s.setId(1L);

          Mockito.when(mockStudentRepo.findById(1L)).thenReturn(Optional.of(s));
          Mockito.when(mockCourseRepo.findById(1L)).thenReturn(Optional.of(c));

         // s.addCourse(c);
            underTest.addEnrolment(1L,1L);
            then(mockStudentRepo).should().save(studentArgumentCaptor.capture());

            Student st=studentArgumentCaptor.getValue();
            assertThat(st).isEqualTo(s);

    }
//
//
    @Test
    void addEnrolmentNotOKStudent() {
       Student student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
       Course c=new Course();
       student.setId(1L);
        given(mockStudentRepo.findById(1L)).willReturn(Optional.empty());
        assertThatThrownBy(()->underTest.addEnrolment(student.getId(),c.getId())).isInstanceOf(StudentException.class).hasMessageContaining("Student not");

    }


    @Test
    void addEnrolmentNotOKCourse() {
        Student student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        student.setId(1L);
        Course c=new Course();
        given(mockStudentRepo.findById(student.getId())).willReturn(Optional.of(student));
//
        given(mockCourseRepo.findById(c.getId())).willReturn(Optional.empty());
//
        assertThatThrownBy(()->underTest.addEnrolment(student.getId(),c.getId())).isInstanceOf(CourseException.class).hasMessageContaining("Course didn't exist");
    }
//
//
    @Test
    void removeEnrolmentOK() {
        Student student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        Course c=new Course();
        given(mockStudentRepo.findById(student.getId())).willReturn(Optional.of(student));
        given(mockCourseRepo.findById(c.getId())).willReturn(Optional.of(c));
        underTest.removeEnrolment(student.getId(),c.getId());
        then(mockStudentRepo).should().save(studentArgumentCaptor.capture());
        Student st=studentArgumentCaptor.getValue();
        assertThat(st).isEqualTo(student);

    }
//
    @Test
    void removeEnrolmentNotOK() {
        Student student=new Student(fk.name().firstName(),fk.name().lastName(),fk.internet().emailAddress(),"123",20,1);
        Course c=new Course();
        given(mockStudentRepo.findById(student.getId())).willReturn(Optional.empty());
        assertThatThrownBy(()->underTest.removeEnrolment(student.getId(),c.getId())).isInstanceOf(StudentException.class).hasMessageContaining("Student not");


        given(mockStudentRepo.findById(student.getId())).willReturn(Optional.of(student));
//
        given(mockCourseRepo.findById(c.getId())).willReturn(Optional.empty());

       assertThatThrownBy(()->underTest.removeEnrolment(student.getId(),c.getId())).isInstanceOf(CourseException.class).hasMessageContaining("Course didn't");
    }
//
//
    @Test
    void addCourseOK() {
        Course c=new Course("Course","department",2L,"description");
        given(mockCourseRepo.findAll()).willReturn(new ArrayList<>());
        underTest.addCourse(c);
        then(mockCourseRepo).should().save(courseArgumentCaptor.capture());
        Course nC=courseArgumentCaptor.getValue();
        assertThat(nC).isEqualTo(c);

    }
//
//
    @Test
    void addCourseNotOK() {
        Course c=new Course("Course","department",2D,"description");
        c.setId(1L);
        given(mockCourseRepo.findById(1L)).willReturn(Optional.of(c));
        assertThatThrownBy(()->underTest.addCourse(c)).isInstanceOf(CourseException.class).hasMessageContaining("Course exist");
    }
//
//
    @Test
    void removeCourseOK() {
        Course c=new Course("Course","department",2L,"description");
        given(mockCourseRepo.findAll()).willReturn(List.of(c));
        underTest.removeCourse(c);
        then(mockCourseRepo).should().delete(courseArgumentCaptor.capture());
        Course nC=courseArgumentCaptor.getValue();
        assertThat(nC).isEqualTo(c);

    }
//
//
    @Test
    void removeCourseNotOK() {
        Course c = new Course("Course", "department", 2D, "description");
        given(mockCourseRepo.findAll()).willReturn(new ArrayList<>());
        assertThatThrownBy(() -> underTest.removeCourse(c)).isInstanceOf(CourseException.class).hasMessageContaining("Course didn't");
    }
    }