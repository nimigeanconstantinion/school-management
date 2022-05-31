import React, {useEffect, useRef, useState} from "react";
import {BsPlusLg} from "react-icons/bs";
import { HiOutlineCursorClick } from "react-icons/hi";
import {MdDeleteForever} from "react-icons/md";
import crsimg from "../../images/cursor.svg"
import {WrapperCardBook} from "./CardBook.style";
import { ReactComponent as Logo } from './cursor.svg';

export default ({index,idBook,title,addClick,delbookClick})=>{

    // let style=style={{ cursor: "url(" + crsimg + "), auto"}}
    const [newB,setNewB]=useState();
    const refId=useRef("");
    const refIndex=useRef("");
    useEffect(()=>{
        setNewB(title);

    },[]);

    let adClk=()=>{
        addClick();
    }

    let delbookClk=()=>{
        let idB=refId.current.innerHTML;
        let indx=refIndex.current.innerHTML;
        console.log("sterg cartea cu id="+idB)
        console.log("index="+indx);
        delbookClick(indx);
    }

    return (
        <>
            <WrapperCardBook className={"bookcard"} >
                {
                       newB?
                           <>
                               <MdDeleteForever className={"delsign"} onClick={delbookClk}/>
                               <p ref={refId} className={"hiddenp"}>{idBook}</p>
                               <p ref={refIndex} className={"hiddenp"}>{index}</p>
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