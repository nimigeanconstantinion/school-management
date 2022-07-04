import React from "react";
import {WrapperOKMessage} from "./OKMessage.style";

export default ({mes})=>{

    return (
        <WrapperOKMessage className={"okmess"}>
            <div id="logook">
                <img src={require("../../images/checked-svgrepo-com.svg").default} alt="" srcSet=""/>
            </div>
            <div id="msg">
                <h5>Succes</h5>
                <p id="mtext">{mes}</p>
            </div>
            <div id="modal">
                <img src={require("../../images/close-real.svg").default} alt="" srcSet=""/>
            </div>


        </WrapperOKMessage>

    );
}