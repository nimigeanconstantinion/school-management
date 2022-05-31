package com.example.api.web;

import com.example.api.dto.BookDto;
import com.example.api.model.Book;
import com.example.api.model.Course;
import com.example.api.model.Student;
import com.example.api.repository.BookRepository;
import com.example.api.repository.CourseRepository;
import com.example.api.services.StudentServices;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jackson.JsonObjectDeserializer;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.io.DataInput;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/school")
@CrossOrigin
public class StudentControler {

        private StudentServices studentServices;
        private CourseRepository courseRepository;
        BookRepository bookRepository;

        @Autowired
        public StudentControler(StudentServices studentServices, CourseRepository courseRepository, BookRepository bookRepository){

                this.studentServices=studentServices;
                this.courseRepository=courseRepository;
                this.bookRepository=bookRepository;
        }

        @ResponseStatus(HttpStatus.OK)
        @GetMapping("")
        public List<Student> getAllStudents(){

            return studentServices.getAllStudents();
        }

        @ResponseStatus(HttpStatus.OK)
        @GetMapping("/courses")
        public List<Course> getAllCourses(){
               return courseRepository.findAll();
        }

        @ResponseStatus(HttpStatus.OK)
        @GetMapping("/{email}/{pass}")
        public Student getStudent(@PathVariable(value = "email") String eml,@PathVariable String pass){
                return studentServices.getUser(eml,pass);
        }

        @ResponseStatus(HttpStatus.OK)
        @PostMapping(value="/addstudent")
        public void addUser(@RequestBody String newStud){
                Student target2 = new Gson().fromJson(String.valueOf(newStud), Student.class); // deserializes json into target2
               // Student st = objectMapper.readValue(newStud, Student.class);

                studentServices.addStudent(target2);
        }


        @ResponseStatus(HttpStatus.OK)
        @PostMapping(value="/book/{idStud}")
        public void addBook(@PathVariable Long idStud, @RequestBody Book book){
                studentServices.addBook(idStud,book);
        }




        @ResponseStatus(HttpStatus.OK)
        @DeleteMapping("/book/{idStudent}/{idBook}")
        public void deleteBook(@PathVariable Long idStudent,@PathVariable Long idBook){
                studentServices.removeBook(idStudent,idBook);
        }


        @ResponseStatus(HttpStatus.OK)
        @PostMapping("/enrolment/{idStudent}/{idCourse}")
        public void addEnrolment(@PathVariable Long idStudent,@PathVariable Long idCourse){
                studentServices.addEnrolment(idStudent,idCourse);
        }

        @ResponseStatus(HttpStatus.OK)
        @DeleteMapping("/enrolment/{idStud}/{idCourse}")
        public void deleteEnrolment(@PathVariable Long idStud,@PathVariable Long idCourse){
                studentServices.removeEnrolment(idStud,idCourse);
        }

        @ResponseStatus(HttpStatus.OK)
        @PostMapping("/course/{idS}")
        public void addCourse(Student owner,Course course){

                studentServices.addCourse(course);
        }

        @ResponseStatus(HttpStatus.OK)
        @GetMapping("/course_id/{idCourse}")
        public Course getCourseById(@PathVariable Long idCourse){
                return courseRepository.findById(idCourse).get();
        }


        @ResponseStatus(HttpStatus.OK)
        @GetMapping("/enrolmentsById/{idStud}")
        public List<Course> getEnrolmentsById(@PathVariable Long idStud){
                return studentServices.getUserById(idStud).getCourses();
        }



        @ResponseStatus(HttpStatus.OK)
        @GetMapping("/ownedcourses/{idOwner}")
        public  List<Course> getCoursesByOwner(@PathVariable Long idOwner){
                return courseRepository.findAll().stream().filter(c->c.getOwner()==idOwner).collect(Collectors.toList());
        }

        @ResponseStatus(HttpStatus.OK)
        @GetMapping("/person_id/{id}")
        public Student getPersonById(@PathVariable Long id){
                return studentServices.getUserById(id);
        }


}
