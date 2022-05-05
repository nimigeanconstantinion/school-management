import React, { useState, useEffect } from "react";
import { useHistory} from "react-router-dom";
import { useParams } from "react-router-dom";
import { Api } from "../Api";
import WorkMenu from "./WorkMenu";
import StudentBoard from "./StudentBoard";
import { menuClk } from "./StudentBoard";
export default () => {
    
    let history = useHistory();

    const [course, setCourse] = useState({});
    const [pers, setPers] = useState({});
    const [persId, setPersId] = useState(0);
    let { courseId } = useParams();
    let { userId } = useParams();
    const [updC, setUpdC] = useState(0);
    const [updP, setUpdP] = useState(0);
    const [wmenu, setWmenu] = useState("");
    
    const wMen = "";
    
    useEffect(() => {
        //console.log("in use effect curs");
        getCourse();
    
    }, [updC])
    

    useEffect(() => {
        getOwner(updP);
        
    }, [updP])
    
    let getCourse =async () => {
        let api = new Api();
        try {
            let data = await api.getCourseById(courseId);
            
            let dataP = await api.getPerson(data.owner);
            //console.log("----in course "+courseId);
            
            //console.log(data);
            setCourse(data);
            setPers(dataP)
        
        } catch (e) {
            throw new Error(e);
        }
    }

    let getOwner = async (id) => {
        let api = new Api();
        try {
            let data = await api.getPerson(id);
            setPers(data);
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
            :<p>Loding.....</p>
        }
        </div>)

}