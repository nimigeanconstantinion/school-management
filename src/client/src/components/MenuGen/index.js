import React from "react";
import {WrapperMenuGen} from "./MenuGen.style";

export default ({crsClick,bkClick})=>{


    let crsClk=()=>{
        crsClick();
    }

    let bkClk=()=>{
        console.log("in meniu gen booclick");
        bkClick();
    }

    return(
        <WrapperMenuGen className="commands">

                <button className="btnw mycourses" onClick={crsClk}>Courses</button>
                <button className="btnw mybooks" onClick={bkClk}>Books</button>


        </WrapperMenuGen>
    )
}