package com.example.api.web;

import com.example.api.model.Book;
import com.example.api.model.Course;
import com.example.api.model.Student;
import com.example.api.repository.BookRepository;
import com.example.api.repository.CourseRepository;
import com.example.api.repository.StudentRepository;
import com.example.api.services.StudentServices;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.javafaker.Faker;
import org.assertj.core.api.Assert;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.TestPropertySources;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Objects;
import java.util.Optional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
@AutoConfigureMockMvc
@EnableWebMvc
@ExtendWith(MockitoExtension.class)
@TestPropertySource(
        locations="classpath:application-it.properties"
)
class StudentControlerTest2 {

    @Mock
    private BookRepository bookRepository;
    @Autowired
    private StudentRepository studentRepository;

    @Mock
    private CourseRepository courseRepository;


    @Autowired
    private StudentServices studentServices;



    @Autowired
    private MockMvc mockMvc;



    private JacksonTester<Student> studentJacksonTester;

    public Faker fk;


    @BeforeEach
    public void setUp(){
        JacksonTester.initFields(this,new ObjectMapper());
        // MockitoAnnotations.openMocks(this.courseRepository);
       // MockitoAnnotations.openMocks(courseRepository);

//        underTest=new StudentServices(this.studentRepository,this.bookRepository,this.courseRepository);
//

    }

//    @AfterEach
//    void tearDown(){
//
//            studentRepository.deleteAll();
//            courseRepository.deleteAll();
//
//
//    }



    @Test
    void getAllStudents() throws Exception{
//        Student st=new Student("First","Last","aaa","123",20,1);
//        studentRepository.save(st);
//
//        assertEquals(1,studentServices.getAllStudents().size());
//       mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/school")
//       .accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk());

    }


    @Test
    void getAllCourses() throws Exception{
//        Course c=new Course();
//        c.setName("Curs1");
//        c.setDepartment("departament");
//        c.setDescription("descriere");
//        c.setOwner(1L);
//        Student st=new Student("First","Last","aaa","123",20,1);
//        studentRepository.save(st);
//        courseRepository.save(c);
//        assertEquals(1,courseRepository.findAll().size());
       mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/school/courses")
                .accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk());

    }

    @Test
    void getStudent() throws Exception{
       Student st=new Student("First","Last","aaa","123",20,1);
//       StudentServices sts=Mockito.mock(StudentServices.class);
//       Mockito.when(sts.getUser("aaa","123")).thenReturn(st);
//       Student xs=sts.getUser("aaa","123");
//       assertEquals(st,xs);

    }


 public static String asJsonString(final Object obj) {
  try {
   return new ObjectMapper().writeValueAsString(obj);
  } catch (Exception e) {
   throw new RuntimeException(e);
  }
 }
    @Test
    void addBook() throws Exception{
//        Faker fk=new Faker();
//       Book bk=new Book(fk.book().title());
//        Student st=new Student("Nelu","Santinelu","aaa","123",26,1);
//        st.setId(3L);

//lw        assertEquals(Optional.of(st),studentRepository.findStudentByEmail("aaa"));
//lw        assertEquals(Optional.empty(),bookRepository.findBookByStudentAndTitle(st.getId(),bk.getTitle()));
//        Mockito.when(studentRepository.findById(3L)).thenReturn(Optional.of(st));
//
//        Mockito.when(bookRepository.findBookByStudentAndTitle(st.getId(),bk.getTitle()))
//                .thenReturn(Optional.empty());
//

//lw   mockMvc.perform(post(String.format("http://localhost:5000/api/v1/school/book/%d",3))
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(Objects.requireNonNull(asJsonString(bk))))
//                .andExpect(status().isOk());

    }

    @Test
    void deleteBook() {
//        Book bk=new Book("Behold the Man");
//        Student st=new Student("Nelu","Santinelu","aaa","123",26,1);
//        st.setId(3L);
//        assertEquals(Optional.of(bk),bookRepository.findBookByStudentAndTitle(st.getId(),bk.getTitle()));





    }

    @Test
    void addEnrolment() throws Exception{
//        Course c= new Course("oil wrestling","Bachelor's degree",2000,"soccer");
//        c.setId(2L);
//        Student s=new Student();
//        s.setId(5L);
//        s.setEmail("bbb");
//        s.setPassword("123");
//        assertEquals(Optional.of(s),studentRepository.findStudentByEmail(s.getEmail()));
//        assertEquals(Optional.of(c),courseRepository.findById(c.getId()));
//        mockMvc.perform(post(String.format("/api/v1/school/enrolment/%d/%d",s.getId(),c.getId())))
//                .andExpect(status().isOk());
//
//        assertEquals(1,studentRepository.findStudentByEmail("bbb").get().getCourses().size());
    }

    @Test
    void deleteEnrolment() {
    }

    @Test
    void addCourse() {
    }

    @Test
    void getCourseById() {
    }

    @Test
    void getCoursesByOwner() {
    }

    @Test
    void getPersonById() {
    }

    @Test
    void addUser() throws Exception {
            Student st=new Student("Nelu","Santinelu","aalklka","123",26,1);
        mockMvc.perform(post("http://localhost:8080/api/v1/school/addstudent")
                .contentType(MediaType.APPLICATION_JSON).content(Objects.requireNonNull(asJsonString(st)))).andExpect(status().isOk());

//        )
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(Objects.requireNonNull(asJsonString(st))))
//                .andExpect(status().isOk());
//            mockMvc.perform(post("http://localhost:8080/api/v1/school/addstudent")
//                        .contentType(MediaType.APPLICATION_JSON)
//                .content(Objects.requireNonNull(asJsonString(st))))
//                .andExpect(status().isOk());
    }

//    public static String asJsonString(final Object obj) {
//        try {
//            return new ObjectMapper().writeValueAsString(obj);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//    }


}