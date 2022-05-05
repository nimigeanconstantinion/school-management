import React, { useState,useEffect, Component, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import Cookies from "js-cookie";
import { Api } from "../Api";
import { ContextMenu } from "../ContextMenu";

const comm= 0;
export default  (props) => {
    const who = {};

    const [user, setUser] = useContext(Context);
    const [person, setPerson] = useState(undefined);
    const [menuCom, setMenuCom] = useContext(ContextMenu);
    const [meniu, setMeniu] = useState(undefined);
    const cm = 0;
    const ref1 = useRef("");
    
    useEffect(() => {
        console.log(user);
        getPers();
        mkMenu();
     }, []);

    // useEffect(() => {
    //     if (persoana == undefined) {
    //         getPers();
    //         mkMenu();
    //     }
    // }, [persoana])



    useEffect(() => {
        console.log("comm =" + menuCom);

    },[meniu,menuCom])
   
    let getPers = async () => {
        let api = new Api();
        try {
            let pers = await api.getPerson(user.id);
            console.log("asta e persoana");
            console.log(pers);
            setPerson(pers);
            return pers;
        } catch (e) {
            throw new Error(e);
        }
    }

    let mkMenu = () => {
        let arm = [];
        Cookies.set("workCommandValue", 0);
        setMenuCom(0);

        arm.push(<button class="btnw mycourses" onClick={genClick}>Courses</button>);
        arm.push(<button class="btnw mybooks" onClick={genClick}>Books</button>);
        setMeniu(arm);
        
    }

   
    let courseClk = () => {
        let arm = [];  

        arm.push(<button class="btnw myc" onClick={handleClick} ref={ref1}>My Enrolments</button>);
        arm.push(<button class="btnw addC" onClick={handleClick}>Enroll course</button>);
        arm.push(<button class="btnw delC" onClick={handleClick}>Delete enrolment</button>);
        arm.push(<button class="ret" onClick={handleClick}>Return to Home</button>);
        const cm = 1;
        Cookies.set("workCommandValue", 1);
        setMenuCom(1);

        setMeniu(arm);
      
        //childToParent(comm);
        
}

let bookClk = () => {
    let arm = [];  

    arm.push(<button class="btnw myB">My Books</button>);
    arm.push(<button class="btnw addB">New Book</button>);
    arm.push(<button class="btnw delB">Delete Book</button>);
    arm.push(<button class="ret" onClick={mkMenu}>Return to Home</button>);
    // Cookies.set("menucommand", comm);
    // Cookies.set("menucommand", comm);
    Cookies.set("workCommandValue", 2);
    setMenuCom(2);

    setMeniu(arm);

}

    let myEnrolClk = () => {
        Cookies.set("workCommandValue", 11);

        setMenuCom(11);

    }    
    let enrolClk = () => {
        Cookies.set("workCommandValue", 12);

        setMenuCom(12);
    }
    let delEnrolClk = () => {
        Cookies.set("workCommandValue", 13);

        setMenuCom(13);
    }

    let genClick = (e) => {
        e.preventDefault();

       
        if (e.target.className == "btnw mycourses") {
            courseClk();
            
        }
    }

    let handleClick = (e) => {
        e.preventDefault();
        props.menuClk(e);

    }

    return (
        <>
        
        {

            person&&person.role<1?(
                    
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

    
// /* <div id="commands">
// <button class="btnw myc">My Enrolments</button>

// <button class="btnw add">Enroll course</button>
// <button class="btnw del">Delete enrolment</button>

// <button class="ret">Return to list</button>

// </div>

// <p>{who.id}</p> */}
