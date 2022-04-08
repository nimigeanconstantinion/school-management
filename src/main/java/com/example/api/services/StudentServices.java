package com.example.api.services;

import com.example.api.repository.StudentRepository;
import com.example.api.exceptions.*;
import com.example.api.model.Book;
import com.example.api.model.Course;
import com.example.api.model.Student;
import com.example.api.repository.BookRepository;
import com.example.api.repository.CourseRepository;
import com.example.api.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServices {

        private StudentRepository studentRepository;
        private BookRepository bookRepository;
        private CourseRepository courseRepository;

        public StudentServices(StudentRepository studentRepository,BookRepository bookRepository,CourseRepository courseRepository){
            this.studentRepository=studentRepository;
            this.bookRepository=bookRepository;
            this.courseRepository=courseRepository;
        }

        public List<Student> getAllStudents(){
            return studentRepository.findAll();
        }

        public void addStudent(Student student){
            if(!studentRepository.findStudentByEmail(student.getEmail()).isPresent()){
                studentRepository.save(student);
            }else{
                throw new StundentExists("Student exists!!");
            }

        }

        public void removeStudent(Student student){
            if(studentRepository.findStudentByEmail(student.getEmail()).isPresent()){
                studentRepository.delete(student);
            }else {
                throw new NotFoundStudent("Student not found");
            }

        }

        public void addBook(Student student,Book book){
            if(!bookRepository.findBookByStudentAndTitle(student,book.getTitle()).isPresent()){
                student.addBook(book);
                studentRepository.save(student);
            }else{
                throw new BookException("You have this book");
            }
        }

        public void removeBook(Student student,Book book){
            if(bookRepository.findBookByStudentAndTitle(student, book.getTitle()).isPresent()){
                student.removeBook(book);
                studentRepository.save(student);
            }else{
                throw new BookException("You don't have this book");
            }
        }

        public void addEnrolment(Student student, Course course){
           if(studentRepository.findStudentByEmail(student.getEmail()).isPresent()){
               if(courseRepository.findById(course.getId()).isPresent()){
                   student.addCourse(course);
                   studentRepository.save(student);

               }else{
                    throw new CourseException("Course didn't exist!");
               }
           }else{
               throw new StudentException("Student not found!!");
           }

    }

        public void removeEnrolment(Student student,Course course){
            if(studentRepository.findStudentByEmail(student.getEmail()).isPresent()){
                if(courseRepository.findById(course.getId()).isPresent()){
                    student.removeCourse(course);
                    studentRepository.save(student);

                }else{
                    throw new CourseException("Course didn't exist!");
                }
            }else{
                throw new StudentException("Student not found!!");
            }

        }

        public void addCourse(Course c){
            if(courseRepository.findAll().stream().filter(x->x.equals(c)).collect(Collectors.toList()).size()==0){
                courseRepository.save(c);
            }else{
                throw new CourseException("Course exist!!");

            }
        }

    public void removeCourse(Course c){
        if(courseRepository.findAll().stream().filter(x->x.equals(c)).collect(Collectors.toList()).size()>0){
            courseRepository.save(c);
        }else{
            throw new CourseException("Course didn't exist!!");
        }
    }

    public Student getUser(String email,String password){
            if(studentRepository.findStudentByEmail(email).isPresent()){
                return studentRepository.findStudentByEmail(email).get();
            }else{
                throw new StudentException("User Email didn't exist");
            }
    }
    public Student getUserById(Long id) {
        if (studentRepository.findById(id).isPresent()) {
            return studentRepository.findById(id).get();
        } else {
            throw new StudentException("User didn't exist!!");
        }
    }
}
