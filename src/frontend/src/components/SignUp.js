import React, { useEffect,useState} from "react";

export default () => {
    
    return (
        <main>
                <div class="mess">
                    <p>Mesaj meuosdouosu</p>
                </div>
                <form id="signup" action="">
                    <legend>Sign Up</legend>
                    <label for="fname">First Name</label>
                    <input type="text" name="fname" id="fname"/>

                    <label for="lname">Last Name</label>
                    <input type="text" name="lname" id="lname"/>

                    <label for="age">Age</label>
                    <input type="text" name="age" id="age"/>

                    <label for="eml">Email Address</label>
                    <input type="text" name="eml" id="eml"/>
                    <label for="pass">Password</label>
                    <input type="password" name="pass" id="pass"/>
                    <div id="btngroup">
                        <input class="btn sgnu" type="button" value="Sign Up"/>
                        <input class="btn sgnu cancel" type="button" value="Cancel"/>

                    </div>
                    <div class="fsubott">
                        <p id="fsum">Already have a user account? Click here to <span>Sign In</span>!</p>
                    </div>
                </form>
    </main>

)

}