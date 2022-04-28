import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import Cookies from "js-cookie";
import jsCookie from "js-cookie";



export default () => {
    const [user, setUser] = useContext(Context);

    let history = useHistory();
    let signIn = () => {
        history.push("/signin");

    }

    let homeClick = () => {
        history.push("/");
    }
    
    let outClick = () => {
        setUser(undefined);
      
        Cookies.remove("authenticatedUser");

        history.push("/");
        
    }

    let signUp = () => {
        history.push("/signup");
    }
    return (

        <header>

            {
                user ? (
                    <>
                        <div class="htitle"  >Courses</div>
                        <div class="com si" >Hi {user.firstName}</div>
                        <div class="com sout" onClick={outClick} >Sign Out</div>
                    </>
                    

                )
             :
                    (
                        <>
                            <div class="htitle" onClick={homeClick}>Courses</div>
                            <div class="com si" onClick={signIn}>Sign In</div>
                            <div class="com su" onClick={signUp}>Sign Up</div>
                        </>
                    )
             }
        </header>
       
       
);

}



{/* <> user?{
    <header>
      
  </header>
}
:
{   <header>


   </header>

} */}