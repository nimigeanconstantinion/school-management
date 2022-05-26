import React, { useEffect, useState } from "react";
import {WrapperCardCourse} from "./CardCourse.style";

export default ({course,courseClick}) => {
    const [idc, setIdc] = useState(0);
    useEffect(() => {
        setIdc(course.id);
    },[])

    let crsClk=(e)=>{
        courseClick(e);
    }
    return (
        <WrapperCardCourse className={"cardcourse"} onClick={crsClk}>
            <p className="coursedivid">
                {course.id}
            </p>
            <h6>Course</h6>
            <p>{course.name}</p>
        </WrapperCardCourse>
    )

}
