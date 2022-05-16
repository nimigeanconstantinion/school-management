import React, { useState,useEffect, Component, useRef } from "react";

export default ({handleClick,refresh }) => {

    const [menuType, setMenuType] = useState(undefined);
    const [refrMenu, setRefrMenu]=useState(undefined);
    useEffect(() => {

        setMenuType(0); 
        setRefrMenu(refresh);
    },[])

    useEffect(() => {
        console.log("am apsat pe meniu de "+refrMenu+" ori");
    }, [refrMenu])
    
    let genClick = (e) => {
        e.preventDefault();
        e.target.class == "btnw mycourses" ? setMenuType(0) : setMenuType(1);
    }

    return (
        <div id="commands">
        
        {
         menuType == 0 ? (
            <>
                <button class="btnw mycourses" onClick={genClick}>Courses</button>
                <button class="btnw mybooks" onClick={genClick}>Books</button>
        
            </>)
            :
            (menuType == 1 ? (
                        <>
                    <button class="btnw myc" onClick={handleClick}>My Enrolments</button>
                    <button class="btnw addC" onClick={handleClick}>Enroll course</button>
                    <button class="btnw delC" onClick={handleClick}>Delete enrolment</button>
                    <button class="ret" onClick={handleClick}>Return to Home</button>
                       
                </>)
                :
                (<>
                    <p>klwlk</p>
                </>)
            )
    }      
        
        
        </div>
        
    )
    

}

