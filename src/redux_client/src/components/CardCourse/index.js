import React, {useEffect, useRef, useState} from "react";
import {WrapperCardCourse} from "./CardCourse.style";

export default ({course,courseClick}) => {
    const [idc, setIdc] = useState(0);
    const refId=useRef("");
    useEffect(() => {
        setIdc(course.id);
    },[])

    let crsClk=()=>{
        let idC=refId.current.innerHTML;
        courseClick(idC);
    }
    return (
        <WrapperCardCourse className={"cardcourse"} onClick={crsClk}>
            <p ref={refId} className="coursedivid">
                {course.id}
            </p>
            <h6>Course</h6>
            <p>{course.name}</p>
        </WrapperCardCourse>
    )

}
