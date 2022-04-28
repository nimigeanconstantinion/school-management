import reactRouterDom from "react-router-dom";
import React, { useEffect,useRef } from "react";
import useState from 'react-usestateref';

import { useHistory } from "react-router-dom";
import { Api } from "../Api";
import { Context } from "../Context";
import { useContext } from "react";
import Test from "./WorkMenu";
import WorkMenu from "./WorkMenu";
import { comm } from "./WorkMenu";
import Cookies from "js-cookie";
import CourseDetails from "./CourseDetails";

export default () => {
    const ref1 = useRef("");
    const [content, setContent] = useState("");
    const who = JSON.parse(Cookies.get("authenticatedUser"));
    const [trigger, setTrigger, rtrig] = useState(false);
    const sw = useRef("");
    const [enrolments, SetEnrolments] = useState([]);
    const [courses, SetCourses] = useState([]);
    const [sCourse, setScourse,refC] = useState("");
    const [data, setData] = useState('');
    
    const [init, setInit] = useState(0);
    const history = useHistory();
    let vc = {};


    useEffect(() => {
        setScourse({});
        getMyCourses();
        getAllCourses();
        sw.current = false;
        setData(1);
    }, [])
  
    useEffect(() => {
        initContent();
    }, [data]);
    
   
    useEffect(() => {
        
    }, [enrolments, courses]);
    
    // useEffect(() => {
    //     console.log("==========din usefect");                
    //     vc = sCourse;
    //     console.log(vc);
    // }, [sCourse]);

    useEffect(() => { }, [content])
    
    useEffect(() => {
        console.log("am sch trigger=" + trigger);
     }, [trigger]);
    
    let initContent = () => {
        console.log("Butonul apasat este =" + data);
        
        switch (data) {
            case 1:

                setTrigger(false);
                break;
            case 11:
                getMyCourses();
                ShowMyCourses();
                setTrigger(false);
                break;
            case 12:
                console.log("Butonul 12");
                console.log("Trigger crt=" + rtrig.current);
                if(trigger == false) {
                    getAllCourses();
                    showAllCourses();
                } else {
                    alert("kjsdjkljkljd");

                }
                break;
            case 9:
                if (sw.current == true) {
                    sw.current = false;
                } else {
                    sw.current = true;
                }    
                break;
            default:
                setContent("");
                setScourse("");
                setTrigger(false);
                break;
        }
    }

    const childToParent = (childdata) => {
        setData(childdata);
    }
 

    let getMyCourses = async () => {
        let api = new Api();
        try {
            let response = await api.getEnrolmentsById(who.id);
            SetEnrolments(response);
            console.log(enrolments);
        } catch (e) {
            throw new Error(e);
        }
    }


    let getAllCourses = async () => {
        let api = new Api();
        try {
            let response = await api.getCourses();
            SetCourses(response);
            console.log(response);
        } catch (e) {
            throw new Error(e);
        }
    }

    let ShowMyCourses =async  () => {
        try {
            await getMyCourses();
            let arCM = [];   
            let arCx = [];
            let fill = "";
            let arC = [];    
            enrolments.forEach(c => {
                    arC.push(
                        <div class="course" onClick={detailsClk}>
                            <p class="coursedivid">
                                {c.id}
                            </p>
                            <h6>Course</h6>
                            <p>{c.name}</p>       
                        </div>
                    )
            });

            fill = arC;
            arCM.push(<div id="container">{fill}</div>);
            setContent(arCM);
         } catch (e) {
            console.log("eroareeeeee showmy...");
       }
    }

    let getCourseById = async (id) => {
        let api = new Api();
        try {
            let response = await api.getCourseById(id);
            setScourse(response);
            return response;
        } catch (e) {
            throw new Error(e);
        }
    }

    let mkDetail = async (id) => {
        try {
           let resp= await getCourseById(id);
            console.log("cursul ales=============");
            let crs = resp;
            let arc = (
                <>
               <h1 id="h1det">Course detail</h1>
                <div id="detail">
                    <aside id="left">
                        <h2 id="h2det">COURSE</h2>
                        <hr/>
                            <h3 id="h3det">{crs.name}</h3>
                            <h4 id="h4det">By {who.firstName} { who.lastName}</h4>
                            <p>{ crs.description}</p>
                    </aside>
                    <aside id="right">
                        <div id="top">
                            <h2 id="h2det">ESTIMATED TIME </h2>
                            <hr/>
                                <p>{ crs.time} ore</p>
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
                </>
            );
           
            setContent(arc);
            setData(9);
            setTrigger(true);    
            
        } catch (e) {
            console.log("detalii eronate");
            throw new Error(e);
        }
    }

    let detailsClk = (e) => {
        
        let elm = e.target;
        console.log(elm);
        let id = 0;
        if (elm.className!=""&&elm.className === "course") {
            id = elm.children[0].innerHTML;
        } else {
            id = elm.parentNode.children[0].innerHTML;
        }
        console.log("id curs selectat=" + id);
        mkDetail(id);
       
    }


    let showAllCourses = async () => {
        
        try {
            await getAllCourses();
            let arCM = [];   
            let arCx = [];
            let fill = "";
            courses.forEach(c => {
                    arCx.push(
                        <div class="course" onClick={detailsClk}>
                            <p class="coursedivid">
                                {c.id}
                            </p>
                            <h6>Course</h6>
                            <p>{c.name}</p>       
                        </div>
                    )
            });

            fill = arCx;
            arCM.push(<div id="container">{fill}</div>);

            setContent(arCM);
         } catch (e) {
            console.log("eroareeeeee showmy...");
       }
        
    }

    return (
        
        <>
            <WorkMenu childToParent={childToParent} />
            {
                content != "" ?
       
                    <main>
                            {content}
                    </main>
                    : <>
                        

                    </>

            }
        </>

    )
}