import React, { useState, useEffect, useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Api } from "../Api";

import { Context } from "../Context";
import { useContext } from "react";
import Cookies from "js-cookie";
import xer from "../images/close-svgrepo-com.svg";


export default () => {
    const history = useHistory();    
    const eml =useRef("");
    const pass = useRef("");
    const [student, setStudent] = useState({});
    const [email, setEmail] = useState("");
    const [mesaj, setMesaj] = useState("");
    const refM = React.createRef();
    
    const [user, setUser] = useContext(Context);
    let stud = {};
     useEffect(() => {

     },[mesaj])

    let homeClick = () => {
        history.push("/");
    }



    let getUser = async () => {
        let xeml = eml.current.value;
        let xpassw = pass.current.value;
        console.log("jkqkqwkklklwelekl");
        let api = new Api();
        try {
            let response = await api.getUser(xeml, xpassw);
            console.log(response);
            return response;

        } catch (e) {
            //alert(e.message.split(":")[1]);
            throw new Error(e);

            // this.showMessage("error", e.message.split(":")[1]);
        }
    }


 

    let mkMessage = (mes) => {
        let msg=(
        <div id="mess">
                <div id="logo">
                    <img src={require("../images/close-svgrepo-com.svg").default} alt="" srcset=""/>
                </div>
                <div id="msg">
                    <h5>Error</h5>
                    <p id="mtext">{ mes}</p>
                </div>
                <div id="modal">
                    <img src={require("../images/close-real.svg").default } alt="" srcset=""/>
                </div>
            </div>)
        setMesaj(msg)
    }
    let animateMess = () => {
       console.log("in transform");
        const elmm = document.querySelector("#message");
        setTimeout(() => {
            elmm.style.transform = "translate(-430px)";
        
        }, 100);
        
        setTimeout(() => {
            
            elmm.style.transform="translate(-400px,-500px)";
           // elm.style.display = "none";
           const el = eml.current;
           el.value = "";
           const pr = pass.current;
           pr.value = "";

        }, 2100)
        setTimeout(() => {
            setMesaj("");
            elmm.style.transform="translate(430px)";

//           elmm.style.opacity=1 
        }, 4200);
    }

    let validateUser =async  () => {
        try {
            let data = await getUser();
            stud = data;
            setStudent(data);
            const usr = {};
            usr.id = data.id;
            usr.firstName = data.firstName;
            usr.lastName = data.lastName;

            Cookies.set("authenticatedUser", JSON.stringify(usr));
            
            setUser(usr);
            history.push("/student");

        } catch (e) {
            console.log(e.message.split(":")[2]);
            let msg=(e.message.split(":")[2]);
            mkMessage(msg);
            animateMess();
            //throw new Error(e);
        }
    }

    return (
        <body>

            <div ref={refM} id="message">
                {mesaj}
            </div>


            <main>
                    <form id="login" action="">
                        <legend>Sign In</legend>
                        <label for="eml">Email Address</label>
                        <input type="text" name="eml" id="eml" ref={eml}/>
                        <label for="pass">Password</label>
                        <input type="password" name="pass" id="pass" ref={pass}/>
                        <div id="btngroup">
                            <input class="btn sgn" type="button" value="Sign In" onClick={validateUser}/>
                            <input class="btn cancel" type="button" value="Cancel"/>

                        </div>
                        <div class="frmbott">
                            <p>Don't have a user account? Click here to <span>Sign Up</span> !</p>
                        </div>
                    </form>
            </main>
            <footer></footer>        

        </body>
)

}