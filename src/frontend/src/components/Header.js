import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
export default () => {
    
    let history = useHistory();
    let signIn = () => {
        history.push("/signin");

    }

    let homeClick = () => {
        history.push("/");
    }

    let signUp = () => {
        history.push("/signup");
    }
    return (
        <header>
        <div class="htitle" onClick={homeClick}>Courses</div>
        <div class="com si" onClick={signIn}>Sign In</div>
        <div class="com su" onClick={signUp}>Sign Up</div>
      </header>
)

}