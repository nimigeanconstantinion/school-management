package com.example.api.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerator;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.GenerationType.SEQUENCE;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter

@Entity(name="Course")
@Table(name="course")
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
public class Course {
    public Course(String name, String department, double time, String description) {
        this.name = name;
        this.department = department;
        this.time = time;
        this.description = description;
    }

    @Id
    @SequenceGenerator(
            name = "course_sequance",
            sequenceName = "course_sequance",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "course_sequance"
    )
    private Long id;

    @Column(
            name = "name"
    )
    @NotBlank(message = "name is necessary")
    private String name;
    @Column(
            name = "department"
    )
    @NotBlank(message = "department is necessary")
    private String department;


    @NotNull(message = "time is necessary")
    private double time;

    @NotBlank(message = "description is necessary")
    private String description;

    @NotNull(message = "Owner is necessary")
    private Long owner;

    @ManyToMany(mappedBy="courses",
    fetch = FetchType.EAGER)
    @JsonBackReference
    private List<Student> students = new ArrayList<>();


    public void addStudent(Student student){

        this.students.add(student);
    }

    //add enrolment
    //remove enrolmment
    //getenrolments


    public Course(Long id, String name, String department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }

    public Course(String name, String department) {
        this.name = name;
        this.department = department;
    }


    @Override
    public boolean equals(Object o) {
        Course aux = (Course) o;
        return this.name.equals(aux.getName()) && this.department.equals(aux.getDepartment()) && this.description.equals(aux.getDescription());
    }

}
