import React, { useState, useEffect } from "react";
import { useHistory} from "react-router-dom";
import { useParams } from "react-router-dom";
import { Api } from "../Api";
import WorkMenu from "./WorkMenu";
import StudentBoard from "./StudentBoard";
import { menuClk } from "./StudentBoard";
export default ({idCourse,idUser}) => {
    
    let history = useHistory();

    const [course, setCourse] = useState({});
    const [pers, setPers] = useState({});
    const [persId, setPersId] = useState(0);
    //let { courseId } = useParams();
    //let { userId } = useParams();
    let { courseId } = idCourse;
    let { userId } = idUser;
    const { owner, setOwner } = useState({});
    const [updC, setUpdC] = useState(0);
    const [updP, setUpdP] = useState(0);
    const [wmenu, setWmenu] = useState("");
    
    const wMen = "";
    
    useEffect(() => {
        console.log("id transmis=" + idCourse);
        getCourse(idCourse);
        
    },[])
    // useEffect(() => {
    //     //console.log("in use effect curs");
    //     getCourse(courseId);
    
    // }, [updC])
    

    // useEffect(() => {
    //     getOwner(userId);
        
    // }, [updP])
    
    let getCourse =async (editId) => {
        let api = new Api();
        try {
            let data = await api.getCourseById(editId);
            let idO = data.owner;

            console.log("----in course " + editId);
            console.log("ownerul are id-ul " + idO);
            let result = await getOwner(idO);
            console.log("numele ownerului este="+result.firstName);
            //setOwner(result);
            setPers(result);
            setCourse(data);

            //console.log(data);
     
        
        } catch (e) {
            throw new Error(e);
        }
    }

    let getOwner = async (id) => {
        let api = new Api();
        try {
            let data = await api.getPerson(id);
            return data;
        } catch (e) {
            throw new Error(e);
        }
    }

    return (
        

        <div>
    

        {
            course 
            ? <div class="containermain">
                <div class="buttongroup"></div>
                <h1 id="h1det">Course detail</h1>
                <div id="detail">
                    <aside id="left">
                        <h2 id="h2det">COURSE</h2>
                        <hr/>
                            <h3 id="h3det">{ course.name}</h3>
                            <h4 id="h4det">By {pers.firstName} { pers.lastName}</h4>
                            <p>{ course.description}</p>
                    </aside>
                    <aside id="right">
                        <div id="top">
                            <h2 id="h2det">ESTIMATED TIME </h2>
                            <hr/>
                                <p>{ course.time} ore</p>
                        </div>
                        <div id="bottom">
                            <h2 id="h2det">MATERIALS NEEDED</h2>
                            <hr/>
                            <ul>
                                <li>PC Windows</li>
                                <li>Tablet</li>
                            </ul>
                        </div>    
                    </aside>
                </div>
            </div >
            :<p>Loding hhhh.....</p>
        }
        </div>)

}