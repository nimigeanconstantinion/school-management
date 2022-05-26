package com.example.api.web;

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
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.lang.management.OperatingSystemMXBean;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;






@SpringBootTest
@AutoConfigureMockMvc
@EnableWebMvc
@ExtendWith(MockitoExtension.class)

@TestPropertySource(
        locations="classpath:application-it.properties"
)

class StudentControlerTest {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private StudentServices studentServices;

    @Autowired
    private StudentControler studentControler;


    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    public void setUp() {
        JacksonTester.initFields(this, new ObjectMapper());
        MockitoAnnotations.openMocks(this);
        // this.mockMvc= MockMvcBuilders.standaloneSetup().build();

    }

    @AfterEach

    void tearDown(){
            studentRepository.deleteAll();
            courseRepository.deleteAll();
    }
//    @ExtendWith(MockitoExtension.class)
//    @MockitoSettings(strictness = Strictness.LENIENT)

    @Test
    void getAllStudents() throws Exception {
        Student st = new Student("First", "Last", "aaa", "123", 20, 1);
        List<Student> lista = List.of(st);
        StudentServices localS = Mockito.mock(StudentServices.class);

        Mockito.when(localS.getAllStudents()).thenReturn(lista);
        List xs = localS.getAllStudents();
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/school")
                .accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk());

    }

    @Test
    void getStudent() throws Exception {
//        Student st = new Student("Ion","Lenta","aaa","123",20,0);
//
//        Mockito.when(studentRepository.findStudentByEmail("aaa")).thenReturn(Optional.of(st));
//        mockMvc.perform(get("/api/v1/school/{email}/{pass}","aaa","123")
//               .contentType(MediaType.APPLICATION_JSON)
//               .content(Objects.requireNonNull(asJsonString(st)))).andExpect(status().isOk());
    }

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    void addUser() throws Exception {
        Student st = new Student("Nelu", "Santinelu", "aala", "123", 26, 1);
        System.out.println(asJsonString(st));

        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/school/addstudent")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(st))).andExpect(status().isOk());
        //.andExpect(status().isOk());}
    }
}