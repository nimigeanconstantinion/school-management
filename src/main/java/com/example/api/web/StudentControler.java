package com.example.api.web;

import com.example.api.model.Book;
import com.example.api.model.Course;
import com.example.api.model.Student;
import com.example.api.repository.BookRepository;
import com.example.api.repository.CourseRepository;
import com.example.api.services.StudentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/school")
@CrossOrigin
public class StudentControler {

        StudentServices studentServices;
        CourseRepository courseRepository;
        BookRepository bookRepository;

        @Autowired
        public StudentControler(StudentServices studentServices, CourseRepository courseRepository, BookRepository bookRepository){

                this.studentServices=studentServices;
                this.courseRepository=courseRepository;
                this.bookRepository=bookRepository;
        }

        @ResponseStatus(HttpStatus.OK)
        @GetMapping
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
        @PostMapping("/book/{idStud}")
        public void addBook(@PathVariable Long idStud,@RequestBody Book book){
                studentServices.addBook(idStud,book);
        }

        @ResponseStatus(HttpStatus.OK)
        @DeleteMapping("/book/{idStudent}")
        public void deleteBook(@PathVariable Long idStudent,Book book){
                studentServices.removeBook(idStudent,book);
        }


        @ResponseStatus(HttpStatus.OK)
        @PostMapping("/enrolment")
        public void addEnrolment(Student student,Course course){
                studentServices.addEnrolment(student,course);
        }

        @ResponseStatus(HttpStatus.OK)
        @DeleteMapping("/enrolment")
        public void deleteEnrolment(Student student,Course course){
                studentServices.removeEnrolment(student,course);
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
        @GetMapping("/ownedcourses/{id}")
        public  List<Course> getCoursesByOwner(@PathVariable Long idO){
                return courseRepository.findAll().stream().filter(c->c.getId()==idO).collect(Collectors.toList());
        }

        @ResponseStatus(HttpStatus.OK)
        @GetMapping("/person_id/{id}")
        public Student getPersonById(@PathVariable Long id){
                return studentServices.getUserById(id);
        }


}
