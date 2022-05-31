import React from "react";
import {WrapperMenuStudBook} from "./MenuStudBook.style";


export default ({retClick})=>{


    let retClk=()=>{

        retClick();
    }
    return(

        <>
            <WrapperMenuStudBook className={"commands"}>
                <button className="btnw myb">My Books</button>
                <button className="ret" onClick={retClk}>Return to Home</button>
            </WrapperMenuStudBook>
        </>

    )
}