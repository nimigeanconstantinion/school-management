import React, { useState,useEffect, Component, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import Cookies from "js-cookie";
import { Api } from "../Api";

const comm= 0;
export default  ({childToParent}) => {
    const who = JSON.parse(Cookies.get("authenticatedUser"));
    const [persoana, setPersoana] = useState(undefined);
    const [menu, setMenu] = useState(0);
    const [comm, setComm] = useState(undefined);
    const [meniu, setMeniu] = useState(undefined);
    const cm = 0;
    const ref1 = useRef("");
    
    useEffect(() => {
        if (persoana == undefined) {
            getPers();
            mkMenu();
        }
    }, [persoana])



    useEffect(() => {
        console.log("comm =" + comm);
        Cookies.set("menucommand", comm);
        childToParent(comm);
    },[meniu,comm])
   
    let getPers = async () => {
        let api = new Api();
        try {
            let pers = await api.getPerson(who.id);
            console.log(pers);
            setPersoana(pers);
            return pers;
        } catch (e) {
            alert("eroareee");
            throw new Error(e);
        }
    }

    let mkMenu = () => {
        let arm = [];
    
        setComm(0);
        arm.push(<button class="btnw mycourses" onClick={courseClk}>Courses</button>);
        arm.push(<button class="btnw mybooks" onClick={bookClk}>Books</button>);
        setMeniu(arm);
        Cookies.set("menucommand", 0);
    }

   
    let courseClk = () => {
        let arm = [];  

        arm.push(<button class="btnw myc" onClick={myEnrolClk} ref={ref1}>My Enrolments</button>);
        arm.push(<button class="btnw addC" onClick={enrolClk}>Enroll course</button>);
        arm.push(<button class="btnw delC" onClick={delEnrolClk}>Delete enrolment</button>);
        arm.push(<button class="ret" onClick={mkMenu}>Return to Home</button>);
        const cm = 1;
        setMeniu(arm);
        setComm(cm);
        console.log("comm ar tb sa aiba val 1 si are val " + comm);
        //childToParent(comm);
        
}

let bookClk = () => {
    let arm = [];  
    setComm(2);

    arm.push(<button class="btnw myB">My Books</button>);
    arm.push(<button class="btnw addB">New Book</button>);
    arm.push(<button class="btnw delB">Delete Book</button>);
    arm.push(<button class="ret" onClick={mkMenu}>Return to Home</button>);
    // Cookies.set("menucommand", comm);
    // Cookies.set("menucommand", comm);
    setMeniu(arm);

}

    let myEnrolClk = () => {
        setComm(11);
    }    
    let enrolClk = () => {
        setComm(12);
    }
    let delEnrolClk = () => {
        setComm(13);
    }
    return (
        <>
        
        {

            persoana&&persoana.role<1?(
                    
                <div id="commands">

                    {meniu}          
                    
                </div>    

                )
            :
            (
                <>
                    <p>nu e</p>
                </>
        
            )

        }

        </>
        
    );

    


}

export { comm };
    
// /* <div id="commands">
// <button class="btnw myc">My Enrolments</button>

// <button class="btnw add">Enroll course</button>
// <button class="btnw del">Delete enrolment</button>

// <button class="ret">Return to list</button>

// </div>

// <p>{who.id}</p> */}
