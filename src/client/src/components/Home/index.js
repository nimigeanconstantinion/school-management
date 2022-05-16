import React from "react";
import {useState,useEffect} from "react";
import CardCourse from "../CardCourse/index";
import Api from "../../Api.js";
export default () => {
    const [courses,setCourses]=useState(undefined);


    useEffect(()=>{
        console.log("suntin useekfkfk");
       getAllCourses();

       // setCourses(lista);
    },[])

    let getAllCourses = async () => {
        let api = new Api();
        try {
            let data = await api.getCourses();
            console.log(data);
            setCourses(data);
            return data;

        } catch (e) {
            console.log("Eroareee");
            throw new Error(e);
        }

    }

    let courseClk=()=>{
    }

    return (
        <main>
            <div id="container">
                {
                    courses
                        ? (courses.map(c => (<CardCourse course={c} courseClick={courseClk} />)))
                        :   <img src={require('../../images/wheel.gif')} class="loading" />
                }
            </div>

        </main>

    )
}