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

import java.util.ArrayList;
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

        public void addBook(Long idS,Book book){
            System.out.println(book);
            if(studentRepository.findById(idS).get()!=null){
                if(bookRepository.findBookByStudentAndTitle(idS,book.getTitle()).isEmpty()==true){
                    Student student=studentRepository.findById(idS).get();
                    student.addBook(book);
                    studentRepository.save(student);
                }else{
                    throw new BookException("You have this book");
                }

            }else{
                throw new StudentException("Student didn't exist");
            }
        }

        public void removeBook(Long idStudent,Long idBook){
            if(bookRepository.findById(idBook).isPresent()){
                Student st=studentRepository.findById(idStudent).get();
                Book bk=bookRepository.findById(idBook).get();
//
                if(bk.getStudent().getId()==idStudent){
                    st.removeBook(bk);
                  //  bk.setStudent(null);
                   // bookRepository.delete(bk);
                    studentRepository.save(st);
                }else{
                    throw new BookException("You don have this book!!");
                }
            }else{
                throw new BookException("Book did not exist!!");
            }

        }

        public void addEnrolment(Long idStudent, Long idCourse){

           if(studentRepository.findById(idStudent).isPresent()){
               if(courseRepository.findById(idCourse).isPresent()){
                   Student s=studentRepository.findById(idStudent).get();
                   Course c=courseRepository.findById(idCourse).get();

                   s.addCourse(c);
                   studentRepository.save(s);

               }else{
                    throw new CourseException("Course didn't exist!");
               }
           }else{
               throw new StudentException("Student not found!!");
           }

    }

        public void removeEnrolment(Long idS,Long idE){

            if(studentRepository.findById(idS).isPresent()){
                Student s=studentRepository.findById(idS).get();
                if(courseRepository.findById(idE).isPresent()){
                    Course c=courseRepository.findById(idE).get();
                    s.removeCourse(c);
                    studentRepository.save(s);

                }else{
                    throw new CourseException("Course didn't exist!");

                }
            }else{
                throw new StudentException("Student not found!!");

            }
        }

        public void addCourse(Course c){
            if(courseRepository.findById(c.getId()).isEmpty()){
                courseRepository.save(c);
            }else{
                throw new CourseException("Course exist!!");
            }
        }

    public void removeCourse(Course c){
        if(courseRepository.findAll().stream().filter(x->x.equals(c)).collect(Collectors.toList()).size()>0){
            courseRepository.delete(c);
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
