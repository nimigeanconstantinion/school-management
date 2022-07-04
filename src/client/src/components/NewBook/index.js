import React, {useRef} from "react";
import {WrapperNewBook} from "./NewBook.style";
import Api from "../../Api";

export default ({addBookClick})=>{
    const refTitle=useRef("");


    let addbkClk=async (e)=>{


        e.preventDefault();
        let title=refTitle.current.value;
        addBookClick({title});
    }
    let cancelClk=()=>{
        refTitle.current.value="";
    }
    return (
        <WrapperNewBook className={"wpbook"}>

            <h1>Add New Book</h1>
            <h2>Book Title</h2>
            <input type={"text"} className={"inptitle"} ref={refTitle}/>
            <input className="btnab addb" type="button" value="Add Book" onClick={addbkClk}/>
            <input className="btnab cancel" type="button" value="Cancel" onClick={cancelClk}/>

        </WrapperNewBook>


    )

}