import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default (props) => { 
    const [idc, setIdc] = useState(0);
    useEffect(() => {
        setIdc(props.course.id); 
    },[])
    return (
            <div class="course" onClick={props.courseClick}>
                <p class="coursedivid">
                    {props.course.id}
                </p>
                <h6>Course</h6>
                <p>{props.course.name}</p>       
            </div>
    )

}
