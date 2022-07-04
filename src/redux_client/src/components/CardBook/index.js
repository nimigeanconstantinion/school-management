import React, {useEffect, useRef, useState} from "react";
import {BsPlusLg} from "react-icons/bs";
import { HiOutlineCursorClick } from "react-icons/hi";
import {MdDeleteForever} from "react-icons/md";
import crsimg from "../../images/cursor.svg"
import {WrapperCardBook} from "./CardBook.style";
import { ReactComponent as Logo } from './cursor.svg';

export default ({key,idBook,title,delbookClick})=>{

    // let style=style={{ cursor: "url(" + crsimg + "), auto"}}
    const [tit,setTit]=useState(undefined);
    const refId=useRef("");
    const refIndex=useRef("");
     useEffect(()=>{
         setTit(title);

     },[]);


    let delbookClk=()=>{
        let idB=refId.current.innerHTML;
        console.log("sterg cartea cu id="+idB);
        delbookClick(idB);
    }

    return (

            <WrapperCardBook className={"bookcard"} >
                               <MdDeleteForever className={"delsign"} onClick={delbookClk}/>
                               <p ref={refId} className={"hiddenp"}>{idBook}</p>
                               <h4>Title</h4>
                               <p>{tit}</p>
            </WrapperCardBook>




    )


}