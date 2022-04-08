package com.example.api.services;

import com.example.api.exceptions.CourseException;
import com.example.api.model.Course;
import com.example.api.repository.CourseRepository;

public class CourseServices {
    private CourseRepository courseRepository;

    public CourseServices(CourseRepository courseRepository){
        this.courseRepository=courseRepository;
    }

    public void addCourse(Course course){
        if(!courseRepository.findCourseByNameAndAndDepartmentAndDescription(course.getName(),course.getDepartment(),course.getDescription()).isPresent()){
            courseRepository.save(course);
        }else{
            throw new CourseException("Course already exist!");
        }
    }

    public void removeCourse(Course course){
        if(courseRepository.findCourseByNameAndAndDepartmentAndDescription(course.getName(),course.getDepartment(),course.getDescription()).isPresent()){
            courseRepository.delete(course);
        }else{
            throw new CourseException("Course didn't exist!");
        }
    }

    public void updateCourse(Course course){
        if(courseRepository.findCourseByNameAndAndDepartmentAndDescription(course.getName(),course.getDepartment(),course.getDescription()).isPresent()){
            Course c=courseRepository.findById(course.getId()).get();
            c.setName(course.getName());
            c.setDepartment(course.getDepartment());
            c.setDescription(course.getDescription());
            courseRepository.save(c);
        }else{
            throw new CourseException("Course didn't exist!");
        }
    }

}
