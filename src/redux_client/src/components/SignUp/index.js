import React, {useEffect, useRef, useState} from "react";
import {WrapperSignUp} from "./SignUp.style"
import ErrorMessage from "../Message";
import Api from "../../Api";
import OKMessage from "../OKMessage";

export default () => {

    const [mesaj,setMesaj]=useState([]);
    const refM=useRef("");
    const refK=useRef("");
    const refFName=useRef("");
    const refLName=useRef("");
    const refAge=useRef(0);
    const refEmail=useRef("");
    const refPass=useRef("");
    const [mesok,setMesOk]=useState(false);
    const [errors,setErrors]=useState([]);

    let validateInputs=async ()=>{
            if(refFName.current.value==""||refLName.current==""){
                setMesOk(false);
                setMesaj((prev)=>
                   [...prev,"User name can not be empty!!"]
                )

            }


            if(refEmail.current.value==""){
                setMesOk(false);
                setMesaj((prev)=>
                    [...prev,"Email field can not be empty!!"]
                )
                if(refPass.current.value==""){
                    setMesaj((prev)=>
                        [...prev,"Password field can not be empty!!"]
                    )

                }

            }else{
                   let is=await userExist();
                   console.log("---user exist");
                   console.log(is);
                if(await userExist()){
                    setMesOk(false);
                    setMesaj((prev)=>
                        [...prev,"User email exist, please Sign In!!"]
                    )


                }else{
                    let newU={};
                    setMesOk(true);
                    setMesaj("Wellcome "+newU.firstName);
                    newU.firstName=refFName.current.value;
                    newU.lastName=refLName.current.value;
                    newU.age=refAge.current.value;
                    newU.email=refEmail.current.value;
                    newU.password=refPass.current.value;
                    newU.role=0;
                    await addUser(newU);
                    refFName.current.value="";
                    refPass.current.value="";
                    refAge.current.value="";
                    refLName.current.value="";
                    refEmail.current.value="";
                    setTimeout(()=>{
                        let elm=refK.current;
                        elm.style.visible="false";
                    },2000);
                    setTimeout(()=>{
                        let elm=refK.current;
                        elm.style.visible="true";
                        setMesaj("");
                    },2000);


                }

            }




            animateMess();
    }


    useEffect(()=>{
       },[])


    let addUser=async (newUser)=>{
        let api=new Api();
        console.log(newUser);
        let firstName=newUser.firstName;
        let lastName=newUser.lastName;
        let email=newUser.email;
        let password=newUser.password;
        let age=newUser.age;
        let role=newUser.role;
        try{
                let response=await api.addUser({firstName,lastName,email,password,age,role});

        }catch (e) {

        }
    }

    let animateMess = () => {
        console.log("in transform");
        const elmm = refM.current;
        setTimeout(() => {
            elmm.style.transform = "translate(-430px)";

        }, 100);

        setTimeout(() => {

            elmm.style.transform="translate(-400px,-500px)";
            // elm.style.display = "none";

        }, 3100)
        setTimeout(() => {
            setMesaj("");
            elmm.style.transform="translate(430px)";

//           elmm.style.opacity=1
        }, 4200);
    }

    let userExist=async ()=>{
        let api=new Api();
        try{
            let response=await api.getAllUsers();
            let users=response;
            let newEmail=refEmail.current.value;

            if(users.filter(p=>p.email==newEmail).length>0){
                return true;
            }else{
                return false;
            }

        }catch (e) {
            throw new Error(e);
        }
    }

    return (
        <body>
        {
            mesaj?(
                mesok==false?(
                    <div ref={refM} id={"message"}>
                        {mesaj.map(m=><ErrorMessage mes={m}/> )}
                    </div>
                )
                :(
                    <OKMessage ref={refK}  mes={mesaj}/>
                    )
            ):("")

        }
        {/*<div ref={refM} id="message">*/}
        {/*    {*/}
        {/*        mesaj?*/}
        {/*            (*/}

        {/*            mesaj.map(m=>(*/}
        {/*                <ErrorMessage mes={m}/>*/}
        {/*            ))*/}
        {/*            )*/}

        {/*            : ("")*/}
        {/*    }*/}
        {/*</div>*/}




        <main>
            <WrapperSignUp className={"wrpsgnup"}>

            <form className="signup" action="">
                <legend>Sign Up</legend>
                <label for="fname">First Name</label>
                <input ref={refFName} type="text" name="fname" id="fname"/>

                <label for="lname">Last Name</label>
                <input ref={refLName} type="text" name="lname" id="lname"/>

                <label for="age">Age</label>
                <input ref={refAge} type="text" name="age" id="age"/>

                <label for="eml">Email Address</label>
                <input ref={refEmail} type="text" name="eml" id="eml"/>
                <label for="pass">Password</label>
                <input ref={refPass} type="password" name="pass" id="pass"/>
                <div id="btngroup">
                    <input className="btn sgnu" type="button" value="Sign Up" onClick={validateInputs}/>
                    <input className="btn sgnu cancel" type="button" value="Cancel"/>

                </div>
                <div className="fsubott">
                    <p id="fsum">Already have a user account? Click here to <span>Sign In</span>!</p>
                </div>
            </form>
            </WrapperSignUp>

        </main>
        </body>
    )

}
