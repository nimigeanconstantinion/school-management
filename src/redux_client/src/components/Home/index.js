import React from "react";
import {useState,useEffect} from "react";
import CardCourse from "../CardCourse/index";
import Api from "../../Api.js";
import {useDispatch,useSelector} from "react-redux";
import {loginUser} from "../../actions/userActions";


export default () => {
    const [courses,setCourses]=useState(undefined);
    const dispatch=useDispatch();
    // const login=useSelector(state=>state.login);
    // const {loading,error,retToken}=login;

    useEffect(()=>{
        console.log("suntin useekfkfk");
       // dispatch(loginUser({}));
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