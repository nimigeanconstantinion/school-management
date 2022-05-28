import React, {useEffect, useRef, useState} from "react";
import {BsPlusLg} from "react-icons/bs";
import { HiOutlineCursorClick } from "react-icons/hi";
import {MdDeleteForever} from "react-icons/md";
import crsimg from "../../images/cursor.svg"
import {WrapperCardBook} from "./CardBook.style";
import { ReactComponent as Logo } from './cursor.svg';

export default ({index,title,addClick,delbookClick})=>{

    // let style=style={{ cursor: "url(" + crsimg + "), auto"}}
    const [newB,setNewB]=useState();
    const refIndex=useRef("");

    useEffect(()=>{
        setNewB(title);
    },[]);

    let adClk=()=>{
        addClick();
    }

    let delbookClk=()=>{

        delbookClick(refIndex.current.innerHTML);
    }


    return (
        <>
            <WrapperCardBook className={"bookcard"} >
                {
                       newB?
                           <>
                               <MdDeleteForever className={"delsign"} onClick={delbookClk}/>
                               <p ref={refIndex} className={"hiddenp"}> aaaa {index}</p>
                               <h4>Title</h4>
                               <p>{newB}</p>

                           </>
                           :
                           <BsPlusLg className={"plus"} style={{ cursor: "url(" + crsimg + "), auto"}} onClick={adClk}/>

                }
            </WrapperCardBook>


        </>

    )


}