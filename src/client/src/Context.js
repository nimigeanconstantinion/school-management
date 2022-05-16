import { createContext, useEffect, useState } from "react";

import { useContext } from "react";
import Cookies from 'js-cookie';


export const Context = createContext();


const UserProvider = ({ children }) => {
    
   
    const [user, setUser] = useState(undefined);
    useEffect(() => {
        
        if (Cookies.get("authenticatedUser")) {
            setUser(JSON.parse(Cookies.get("authenticatedUser")));
        }
    },[])

    return (
        <Context.Provider value={[user, setUser]}>{ children}</Context.Provider>
    );
}

export default  UserProvider ;