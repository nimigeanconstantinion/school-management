package com.example.api.web;

import com.example.api.model.Book;
import com.example.api.model.Student;
import com.example.api.repository.BookRepository;
import com.example.api.repository.CourseRepository;
import com.example.api.repository.StudentRepository;
import com.example.api.services.StudentServices;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.javafaker.Faker;
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
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.TestPropertySources;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

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
class StudentControlerTest {

    @Mock
    private BookRepository bookRepository;
    @Mock
    private StudentRepository studentRepository;
    @InjectMocks
    private StudentServices underTest;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private MockMvc mockMvc;



    private JacksonTester<Student> studentJacksonTester;

    public Faker fk;

//    @BeforeMethod
//    public void initMocks(){
//        MockitoAnnotations.openMocks(this);
//    }

    @BeforeEach
    public void setUp(){
        JacksonTester.initFields(this,new ObjectMapper());


    }


    @Test
    void getAllStudents() {
        assertEquals(9,underTest.getAllStudents().size());
    }

    @Test
    void getAllStudentsN() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("http://localhost:5000/api/v1/demo")
                .accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk());

    }


    @Test
    void getAllCourses() throws Exception{
        assertEquals(9,courseRepository.findAll().size());
        mockMvc.perform(MockMvcRequestBuilders.get("http://localhost:5000/api/v1/demo/courses")
                .accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk());

    }

    @Test
    void getStudent() throws Exception{
        mockMvc.perform(MockMvcRequestBuilders.get("http://localhost:5000/api/v1/school/{email}/{pass}","aaa","123")
                .accept(MediaType.APPLICATION_JSON)).andDo(print())
                .andExpect(status().isOk()).andExpect(content().string("{\"id\":3,\"firstName\":\"Chadwick\",\"lastName\":\"Powlowski\",\"email\":\"aaa\",\"age\":49,\"role\":0,\"password\":\"123\",\"courses\":[{\"id\":3,\"name\":\"rugby union\",\"department\":\"Professional degree\",\"time\":2000.0,\"description\":\"basketball\",\"owner\":3}],\"books\":[]}"));
    }

    @Test
    void addBook() throws Exception{
        Book bk=new Book("jnkllkljl");

        Student st=new Student("Nelu","Santinelu","aaa","123",26,1);
        st.setId(1L);
       ///  doReturn(Optional.empty())
       ///          .when(bookRepository).findBookByStudentAndTitle(st.getId(),bk.getTitle());
         //Mockito.when(bookRepository.findBookByStudentAndTitle(1L,bk.getTitle())).thenReturn(Optional.empty());//    mockMvc.perform(post("http://localhost:5000/api/v1/school/book/{id}",1)
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(Objects.requireNonNull(asJsonString(bk))))
//                .andExpect(status().isOk());

    }

    @Test
    void deleteBook() {
    }

    @Test
    void addEnrolment() {
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

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}