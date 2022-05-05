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

// const MenuComm = ({ children }) => {
//     const [comm, setComm] = useState(undefined);
//     useEffect(() => {
//         if (Cookies.get("menucommand")) {
//             setComm(JSON.parse(Cookies.get("menucommand")));
//         }
            
//     }, [])
//     return (

//         <Context.Provider value={[comm, setComm]}>{ children}</Context.Provider>
//     )
// }
export default  UserProvider ;