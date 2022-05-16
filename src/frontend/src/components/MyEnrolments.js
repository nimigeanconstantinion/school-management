import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../Api";
import { Context } from "../Context";
import CardCourse from "./CardCourse";
import CourseDetails from "./CourseDetails";

export default ({myenrol}) => { 
    
    const [user, setUser] = useContext(Context);
    const [enrolments, setEnrolments] = useState([]);
    const history = useHistory();
    const [inEdit, setInEdit] = useState(0);
    const [idC, setIdC] = useState(undefined);
    let idd = 0;
    useEffect(() => {
        setInEdit(0);
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
        idd = id;
        setIdC(id);
        setInEdit(1);
      ////  history.push("/coursedetails/" + id+"/0");
       // history.go("/coursedetails/" + id+"/0");
       // history.push("/wstudent");
    }

   return (
        
            <div id="container">
           {
                inEdit==0?(
                enrolments 
                        ? enrolments.map((c) => (<CardCourse course={c} courseClick={courseClick } />))
                       : <img src={require('../images/wheel.gif')} class="loading" />)
                   : (
                       idC?
                           <CourseDetails idUser={3} idCourse={idC} />
                           :""
                       
                   )
                  
           }        

            </div>

               
    )

}