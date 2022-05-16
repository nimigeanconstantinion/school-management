import reactRouterDom from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React, { useState,useEffect,useRef } from "react";

import { Api } from "../Api";
import { Context } from "../Context";
import { ContextMenu } from "../ContextMenu";
import { useHistory } from "react-router-dom";

import { useContext } from "react";
import Test from "./WorkMenu";
import WorkMenu from "./WorkMenu";
import Cookies from "js-cookie";
import CourseDetails from "./CourseDetails";
import { isEditable } from "@testing-library/user-event/dist/utils";
import MyEnrolments from "./MyEnrolments";
import MyE from "./MyEnrolments";
import WMenu from "./WMenu";

const menuClk = undefined;

export default () => {

    const [command, setCommand] = useState(undefined);
    const [content, setContent] = useState("");
    const history = useHistory();
    const [user, setUser] = useContext(Context);
    const [myList, setMyList] = useState([]);
    const [cntClk, setCntClk] = useState(0);
    const [x, setX] = useState(0);
    let j = 0;
    let menuClk = (e) => {
        console.log("din studentboard");
        console.log(e.target);  

        setCommand(e.target.className);

    }

    useEffect(() => {
        console.log("===============am incarcat");
        setCommand(""); 
    }, [])
    
    useEffect(() => {
        console.log("******din use effect " + cntClk);
    }, [cntClk]);
    
    useEffect(() => {
        console.log("id user este======" + user.id);
        if (command == "btnw myc") {
            console.log("am apasat myenrolments");
            //history.push("/studentWork/" + user.id);
           // history.push("/wstudent");
        } 
    }, [command])
    
    return (
        
        <>
    
            <WMenu handleClick={menuClk} refresh={ cntClk}/>
            <main>
                
                {
                    
                    command == "btnw myc" ?
                    <MyEnrolments/>
                        :""
                
    
                 }   
            </main>
    
{/*            
            {
                
                content != "" ?
       
                    <main>
                    </main>
                    : <>
                        <main>
                            <p>{command}</p>                            
                        </main>

                    </>

            } */}
        </>

    )
}

export { menuClk };