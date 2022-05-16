import React, { useEffect, useState } from "react";
import {WrapperCardCourse} from "./CardCourse.style";

export default ({course}) => {
    const [idc, setIdc] = useState(0);
    useEffect(() => {
        setIdc(course.id);
    },[])
    return (
        <WrapperCardCourse className={"cardcourse"} >
            <p class="coursedivid">
                {course.id}
            </p>
            <h6>Course</h6>
            <p>{course.name}</p>
        </WrapperCardCourse>
    )

}
