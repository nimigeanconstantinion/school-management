import React from "react";
import {WrapperSignIn} from "../SingnIn/SignIn.style";
import {WrapperMenuStud} from "./MenuStudent.style";
import {useNavigate} from "react-router-dom";

export default ({enrolClick,retClick,myEnrolClick,delClick})=>{

    const history=useNavigate();

    let myClk=()=>{
        myEnrolClick();
    }

    let addClk=()=>{
        enrolClick();
    }

    let delClk=()=>{
            delClick();
    }

    let retClk=()=>{
        retClick();
    }

    return (
        <>
            <WrapperMenuStud className={"commands"}>
                <button className="btnw myc" onClick={myClk}>My Enrolments</button>
                <button className="btnw addC" onClick={addClk}>Enroll course</button>
                <button className="btnw delC" onClick={delClk}>Delete enrolment</button>
                <button className="ret" onClick={retClk}>Return to Home</button>
            </WrapperMenuStud>
        </>
    )
}