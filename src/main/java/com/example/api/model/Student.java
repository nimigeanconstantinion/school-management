package com.example.api.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import static com.example.api.security.UserRole.STUDENT;
import static javax.persistence.GenerationType.SEQUENCE;

@Entity(name = "Student")
@Table(
        name = "student"
)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter

@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="id")

public class Student implements UserDetails {

    @Id
    @SequenceGenerator(
            name = "student_sequence",
            sequenceName = "student_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "student_sequence"
    )
    @Column(
            name = "id"
    )
    private Long id;

    @Column(
            name = "first_name",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String firstName;

    @Column(
            name = "last_name",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String lastName;

    @Column(
            name = "email",
            nullable = false
    )
    private String email;

    @Column(
            name = "age",
            nullable = false

    )
    private Integer age;

    @Column(
            name="role",
            nullable = false,
            columnDefinition = "INT"

    )
    int role;

    @Column(
            name="password",
            nullable = false
    )
    private String password;



    public Student(String firstName, String lastName, String email, String password,int age,int role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = new BCryptPasswordEncoder().encode(password);
        this.age=age;
        this.role=role;
    }


    @ManyToMany(
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER
    )

    @JoinTable(name = "enrolment",
            joinColumns = { @JoinColumn(name = "fk_author") },
            inverseJoinColumns = { @JoinColumn(name = "fk_course") })
    @JsonManagedReference

    private List<Course> courses = new ArrayList<>();



    @OneToMany(
            mappedBy = "student",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )

    @JsonManagedReference
    @LazyCollection(LazyCollectionOption.FALSE)
    List<Book> books = new ArrayList<>();


    public void addCourse(Course course){
        this.courses.add(course);
    }

    public void removeCourse(Course course){
        this.courses.remove(course);
    }

    @Transactional
    public void addBook(Book book){
        this.books.add(book);
        book.setStudent(this);
    }

    @Transactional
    public void removeBook(Book book){
        this.books.remove(book);
        book.setStudent(null);
    }



    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", age=" + age +
                ", password='" + password + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {

        Student aux=(Student) o;

        return aux.getEmail().equals(this.getEmail());
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return STUDENT.getGrantedAuthorities();
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
