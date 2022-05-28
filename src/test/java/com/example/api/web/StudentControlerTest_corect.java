package com.example.api.web;

import com.example.api.ApiApplication;
import com.example.api.model.Book;
import com.example.api.model.Course;
import com.example.api.model.Student;
import com.example.api.repository.BookRepository;
import com.example.api.repository.CourseRepository;
import com.example.api.repository.StudentRepository;
import com.example.api.services.StudentServices;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.*;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import javax.naming.StringRefAddr;

import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@TestPropertySource(
        locations="classpath:application-it.properties"
)
@RunWith(SpringRunner.class)
@SpringBootTest(classes = ApiApplication.class)
@AutoConfigureMockMvc
class StudentControlerTest_corect {

    @MockBean
    private StudentRepository mockStudentRepo;

    @MockBean
    private CourseRepository mockCourseRepo;

    @MockBean
    private BookRepository mockBookRepo;

    @MockBean
    private StudentServices mockStudentServices;

    @Autowired
    private MockMvc mockMvc;


    @Test
    void getAllStudents() throws Exception {
        List<Student> lista=new ArrayList<>();
        Student st1=new Student("klk;l","kwlklk","kjllksl","klslk",20,0);
        lista.add(st1);
        when(mockStudentServices.getAllStudents()).thenReturn(lista);
        ObjectMapper mapper = new ObjectMapper();

        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/school")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect( content().string(mapper.writeValueAsString(lista)));

        ;
    }

    @Test
    void getAllCourses() throws Exception {
        List<Course> lista=new ArrayList<>();
        Course c1=new Course("mkkalsks","lkallkd",12.00,"asklkdsl");
        lista.add(c1);
        ObjectMapper mapper = new ObjectMapper();

        when(mockCourseRepo.findAll()).thenReturn(lista);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/school/courses")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(mapper.writeValueAsString(lista)));
    }

    @Test
    void getStudent() throws Exception {
        Student st=new Student("jjjkk","klkjlkj","aaa","123",20,0);
        st.setId(1L);
        when(mockStudentServices.getUser("aaa","123")).thenReturn(st);
        mockMvc.perform(MockMvcRequestBuilders.get(String.format("/api/v1/school/%s/%s","aaa","123"))
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(asJsonString(st)));


    }

    @Test
    void addUser() throws Exception {
        Student student=new Student("kjjln","llklk","aaa","123",20,0);
        student.setId(1L);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/school/addstudent")
                .contentType(MediaType.APPLICATION_JSON)
                .content(String.valueOf(asJsonString(student))))
                        .andExpect(status().isOk());

    }

    @Test
    void addBook() throws Exception {
        Book book=new Book("llllk");
        book.setId(1L);
        Student student=new Student("kjjln","llklk","aaa","123",20,0);
        book.setStudent(student);
        mockMvc.perform(MockMvcRequestBuilders.post(String.format("/api/v1/school/book/%d",1L))
                .contentType(MediaType.APPLICATION_JSON)
                .content(String.valueOf(asJsonString(student))))
                .andExpect(status().isOk());

    }

    @Test
    void deleteBook() throws Exception {
        Book book=new Book("llllk");
        book.setId(1L);
        Student student=new Student("kjjln","llklk","aaa","123",20,0);
        book.setStudent(student);
        mockMvc.perform(MockMvcRequestBuilders.delete(String.format("/api/v1/school/book/%d/%d",1L,1L))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

    }

    @Test
    void addEnrolment() throws Exception {
        Student st=new Student("jjjkk","klkjlkj","aaa","123",20,0);
        st.setId(1L);
        Course cs=new Course("hjhj","jhgjhj",12.00,"kjkhhk");
        cs.setId(1L);
        mockMvc.perform(MockMvcRequestBuilders.post(String.format("/api/v1/school/enrolment/%d/%d",1L,1L))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    void deleteEnrolment() throws Exception {
        Student st=new Student("jjjkk","klkjlkj","aaa","123",20,0);
        st.setId(1L);
        Course cs=new Course("hjhj","jhgjhj",12.00,"kjkhhk");
        cs.setId(1L);
        mockMvc.perform(MockMvcRequestBuilders.delete(String.format("/api/v1/school/enrolment/%d/%d",1L,1L))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    void addCourse() throws Exception {
        Course c=new Course("hj","kkkj",12.00,"hjkh");
        mockMvc.perform(MockMvcRequestBuilders.post(String.format("/api/v1/school/course/%d",1L))
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(c)))
                .andExpect(status().isOk());
    }

    @Test
    void getCourseById() throws Exception {
        Course c=new Course("hj","kkkj",12.00,"hjkh");
        c.setId(1L);
        when(mockCourseRepo.findById(1L)).thenReturn(Optional.of(c));

        mockMvc.perform(MockMvcRequestBuilders.get(String.format("/api/v1/school/course_id/%d",1L))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
//                .andExpect(content().string(asJsonString(c)));

    }

    @Test
    void getEnrolmentsById() throws Exception {
        Course c=new Course("ajkskj","skjkd",12.00,"alkl");
        List<Course> lista=List.of(c);
        Student student=new Student("kjjln","llklk","aaa","123",20,0);
        student.setId(1L);
        student.setCourses(lista);
        when(mockStudentServices.getUserById(1L)).thenReturn(student);
        mockMvc.perform(MockMvcRequestBuilders.get(String.format("/api/v1/school/enrolmentsById/%d",1L))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(asJsonString(lista)));
    }

    @Test
    void getCoursesByOwner() throws Exception {
        Student student=new Student("kjjln","llklk","aaa","123",20,0);
        student.setId(1L);
        List<Course> lista =new ArrayList<>();
        Course c1=new Course("jjhgjg","kjkj",12.00,"kjkhhk");
        c1.setOwner(1L);
        lista.add(c1);
        when(mockCourseRepo.findAll()).thenReturn(lista);
        mockMvc.perform(MockMvcRequestBuilders.get(String.format("/api/v1/school/ownedcourses/%d",1L))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(asJsonString(lista.stream().filter(c->c.getOwner()==1L).collect(Collectors.toList()))));

    }

    @Test
    void getPersonById() throws Exception {
        Student student=new Student("kjjln","llklk","aaa","123",20,0);
        student.setId(1L);
        when(mockStudentServices.getUserById(1L)).thenReturn(student);
        mockMvc.perform(MockMvcRequestBuilders.get(String.format("/api/v1/school/person_id/%d",1L))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk()).andExpect(content().string(asJsonString(student)));
    }

    public static String asJsonString(final Object obj) throws JsonProcessingException {
        try{
            return new ObjectMapper().writeValueAsString(obj);

        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }
}