import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Api } from "../Api";

export default () => {
    const history = useHistory();    
    let eml = React.createRef();
    let pass = React.createRef();
    const [student, setStudent] = useState({});
    const [email, setEmail] = useState("");
    let stud = {};
    // useEffect(() => {

    // },[])

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
            throw new Error(e);

            // this.showMessage("error", e.message.split(":")[1]);
        }
    }

    let validateUser =async  () => {
        try {
            let data = await getUser();
            stud = data;
            setStudent(data);
            console.log(stud);
            console.log("ce a listat");
        } catch (e) {
            throw new Error(e);
        }
    }

    return (
        <body>

            <div id="message"></div>


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