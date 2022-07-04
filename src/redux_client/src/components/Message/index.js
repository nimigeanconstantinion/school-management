import React from "react";
import {WrapperMess} from "./Message.style";

export default ({mes})=>{

    return (
        <WrapperMess id="mess">
            <div id="logo">
                <img src={require("../../images/close-svgrepo-com.svg").default} alt="" srcset=""/>
            </div>
            <div id="msg">
                <h5>Error</h5>
                <p id="mtext">{ mes}</p>
            </div>
            <div id="modal">
                <img src={require("../../images/close-real.svg").default } alt="" srcset=""/>
            </div>
        </WrapperMess>
    );
}