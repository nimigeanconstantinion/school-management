import React, { useState,useEffect } from "react";
//import { useHistory } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import { useContext } from "react";
import { Context } from "../../Context";
import Cookies from "js-cookie";
import jsCookie from "js-cookie";
import {WrapperCardCourse} from "../CardCourse/CardCourse.style";
import {WrapperHeader} from "./Header.style";



export default () => {
    const [user, setUser] = useContext(Context);

    let history = useNavigate();
    let signIn = () => {
        history("/signin");

    }

    let homeClick = () => {
        history("/");
    }

    let outClick = () => {
        setUser(undefined);

        Cookies.remove("authenticatedUser");

        history("/");

    }

    let signUp = () => {
        history("/signup");
    }
    return (

        <WrapperHeader className={"header"}>

            {
                user ? (
                        <>
                            <div className="htitle" onClick={outClick} >Courses</div>
                            <div className="com si" onClick={signIn}>Hi {user.firstName}</div>
                            <div className="com sout" onClick={outClick} >Sign Out</div>
                        </>


                    )
                    :
                    (
                        <>
                            <div className="htitle" onClick={homeClick}>Courses</div>
                            <div className="com si" onClick={signIn}>Sign In</div>
                            <div className="com su" onClick={signUp}>Sign Up</div>
                        </>
                    )
            }
        </WrapperHeader>


    );

}