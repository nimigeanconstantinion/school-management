import React, {useEffect, useRef, useState} from "react";
import {BsPlusLg} from "react-icons/bs";
import { HiOutlineCursorClick } from "react-icons/hi";
import {MdDeleteForever} from "react-icons/md";
import crsimg from "../../images/cursor.svg"
import { ReactComponent as Logo } from './cursor.svg';
import {WrapperCardBookAdd} from "./CardBookAdd.style";

export default ({addClick})=>{

    // let style=style={{ cursor: "url(" + crsimg + "), auto"}}
    // useEffect(()=>{
    //     setNewB(title);
    //
    // },[]);

    let adClk=()=>{
        addClick();
    }


    return (
        <>
            <WrapperCardBookAdd className={"bookcard"} >
                {

                           <BsPlusLg className={"plus"} style={{ cursor: "url(" + crsimg + "), auto"}} onClick={adClk}/>

                }
            </WrapperCardBookAdd>


        </>

    )


}