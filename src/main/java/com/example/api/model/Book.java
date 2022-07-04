package com.example.api.model;

import com.fasterxml.jackson.annotation.*;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter

@Entity(name="Book")
@Table(name="book")
public class Book {
    @Id
    @SequenceGenerator(
            name="book_sequence",
            sequenceName = "book_sequence",
            allocationSize = 1

    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "book_sequence"
    )
    private Long id;

    @Column(
            name="title",
            columnDefinition = "TEXT"
    )
    @NotNull(message = "Title is required")
    @NotBlank(message = "Title is required and can not be blank")
    private String title;

    public Book(String title) {
        this.title = title;
    }


    @ManyToOne(
            fetch = FetchType.LAZY
    )

    @JoinColumn(
            name="student_id",
            referencedColumnName = "id"
    )
    @JsonBackReference
    @JsonIgnore
    private Student student;

    public boolean equals(Object o){
        Book b=(Book) o;
        return this.title.equals(b.title);
    }
}
