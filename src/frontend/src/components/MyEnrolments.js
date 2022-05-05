import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../Api";
import { Context } from "../Context";
import CardCourse from "./CardCourse";

export default () => { 
    
    const [user, setUser] = useContext(Context);
    const [enrolments, setEnrolments] = useState([]);
    const history = useHistory();

    useEffect(() => {
        
        getMyCourses();
    },[])
    
    let getMyCourses = async () => {
        let api = new Api();
        try {
            let response = await api.getEnrolmentsById(user.id);
            setEnrolments(response);
            console.log(enrolments);
            
        } catch (e) {
            throw new Error(e);
        }
    }

    let courseClick = (e) => {
        let elm = e.target;
        let id = 0;
        if (elm.className!=""&&elm.className === "course") {
            id = elm.children[0].innerHTML;
        } else {
            id = elm.parentNode.children[0].innerHTML;
        }
        history.push("/coursedetails/" + id+"/0");
       // history.go("/coursedetails/" + id+"/0");
       // history.push("/wstudent");
    }

   return (
        
            <div id="container">
            {
                enrolments 
                        ? enrolments.map((c) => (<CardCourse course={c} courseClick={courseClick } />))
                        :   <img src={require('../images/wheel.gif')} class="loading" />
            }           
            </div>

        
        
               
    )

}