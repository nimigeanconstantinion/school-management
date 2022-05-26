import React, {useEffect, useState} from "react";
import Api from "../../Api";
import {WrapperDetail} from "./CourseDetails.style";

export default ({idC})=>{

    const [course,setCourse]=useState(undefined);
    const [owner,setOwner]=useState(undefined);

    useEffect(()=>{
        console.log("in constructie detalii pentru cursul "+idC);
        getCourse(idC);

    },[])
    let getCourse =async (idC) => {
        let api = new Api()
        try {
            let data = await api.getCourseById(idC);
            let idO = data.owner;

            console.log("----in course " + idC);
            console.log("ownerul are id-ul " + idO);
            let result = await getOwner(idO);
            console.log("numele ownerului este="+result.firstName);
            //setOwner(result);
            setOwner(result);
            setCourse(data);



        } catch (e) {
            throw new Error(e);
        }
    }

    let getOwner = async (id) => {
        let api = new Api();
        try {
            let data = await api.getPerson(id);
            return data;
        } catch (e) {
            throw new Error(e);
        }
    }



    return (


        <div>


            {
                course
                    ? <WrapperDetail className="containermain">
                       <div className={"hideid"}>{course.id}</div>
                        <div class="buttongroup"></div>
                        <h1 id="h1det">Course detail</h1>
                        <div id="detail">
                            <aside id="left">
                                <h2 id="h2det">COURSE</h2>
                                <hr/>
                                <h3 id="h3det">{ course.name}</h3>
                                <h4 id="h4det">By {owner.firstName} { owner.lastName}</h4>
                                <p>{ course.description}</p>
                            </aside>
                            <aside id="right">
                                <div id="top">
                                    <h2 id="h2det">ESTIMATED TIME </h2>
                                    <hr/>
                                    <p>{ course.time} ore</p>
                                </div>
                                <div id="bottom">
                                    <h2 id="h2det">MATERIALS NEEDED</h2>
                                    <hr/>
                                    <ul>
                                        <li>PC Windows</li>
                                        <li>Tablet</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </WrapperDetail >
                    :<p>Loding details.....</p>
            }
        </div>)
}