package com.example.api;

import com.example.api.repository.BookRepository;
import com.example.api.repository.CourseRepository;
import com.example.api.repository.StudentRepository;
import com.example.api.services.StudentServices;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiApplication.class, args);
    }
    @Bean
    CommandLineRunner commandLineRunner(StudentServices studentServices, StudentRepository studentRepository, CourseRepository courseRepository, BookRepository bookRepository) {
        return args -> {
//            Faker fk = new Faker();
//            // System.out.println(studentServices.getAllStudents());
////            for(int i=1;i<10;i++){
////                Student s=new Student();
////                s.setFirstName(fk.name().firstName());
////                s.setLastName(fk.name().lastName());
////                s.setEmail(fk.internet().emailAddress());
////                s.setAge(fk.number().numberBetween(18,70));
////                s.setPassword("123");
////                System.out.println(s);
////                studentRepository.save(s);
////            }
//////
////                for(int i=1;i<10;i++){
////                    Course c=new Course();
////                    c.setName(fk.team().sport());
////                    c.setDepartment(fk.demographic().educationalAttainment());
////                    c.setDescription(fk.team().sport());
////                    c.setTime(2000);
////                    c.setOwner(3L);
////                    courseRepository.save(c);
////                }
////          adaugare enrolment
////            Course c=courseRepository.findById(3L).get();
////            Student s=studentRepository.findById(3L).get();
////
////            s.addCourse(c);
////            studentRepository.save(s);
//
////adaugare book
////
//            Student s=studentRepository.findById(7L).get();
//////
//            Book bk=new Book("kjjkjlklklkljl");
//            s.addBook(bk);
//            studentServices.addBook(7L,bk);
//            Book bk2=new Book("Cartea o 4");
//            s.addBook(bk);
//            studentServices.addBook(7L,bk2);

            //
           // studentServices.addBook(1L,bk);
//        Book bk=bookRepository.findById(4L).get();
//        Student s=studentRepository.findById(3L).get();
//        s.removeBook(bk);
//        studentRepository.save(s);
//  delete enrolment
//                Student s=studentRepository.findById(4L).get();
//                Course c=courseRepository.findById(7L).get();
//                s.removeCourse(c);
//                studentRepository.save(s);

//        Student s=studentRepository.findById(4L).get();
//            //System.out.println(s.getBooks().toString());
//            //System.out.println(s.getCourses().toString());
//            System.out.println("Student :"+s.getFirstName()+" "+s.getLastName());
//            System.out.println("Cartile mele :");
//            s.getBooks().forEach((e)->{
//                System.out.println(e.getTitle());
//            });
//            System.out.println("Cursurile mele :");
//            s.getCourses().forEach((c)->{
//                System.out.println(c.getName()+" "+c.getDepartment()+" dep:"+c.getDepartment());
//            });
        //Student s=studentServices.getUser("aaa","123");
//            System.out.println(s);
            //System.out.println(bookRepository.findBookByStudentAndTitle(1L,"Cartea noua").isPresent());
           // System.out.println(studentRepository.findById(1L).isPresent());
            //s.getBooks().stream().filter(e->e.getTitle().equals("ceva"));
//                Student s=new Student();
//                s.setFirstName("aaa");
//                s.setLastName("bbb");
//                s.setEmail("zzzz");
//                s.setAge(33);
//                s.setPassword("123");
//                System.out.println(s);
//                studentServices.addStudent(s);
             //   studentServices.removeBook(1L,1L);
           // Student student=new Student("Nelu","Santinelu","www","123",20,0);
           // studentServices.addStudent(student);
        };
    }
}
