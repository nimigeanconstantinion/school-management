import React from "react";
import {WrapperMenuGen} from "./MenuGen.style";

export default ({crsClick,bkClick})=>{


    let crsClk=()=>{
        crsClick();
    }

    let bkClk=()=>{
        bkClick();
    }

    return(
        <WrapperMenuGen className="commands">

                <button className="btnw mycourses" onClick={crsClk}>Courses</button>
                <button className="btnw mybooks" onClick={bkClick}>Books</button>


        </WrapperMenuGen>
    )
}