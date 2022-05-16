import { createContext, useEffect, useState } from "react";

import { useContext } from "react";
import Cookies from 'js-cookie';


// export const ContextMenu = createContext();

// const MenuProvider = ({children }) => {
    
//     const [menuCom, setMenuCom] = useState(undefined);
//     useEffect(() => {
//         if (Cookies.get("workCommandValue")) {
//             setComm(JSON.parse(Cookies.get("workCommandValue")));
//         }


//     },[])
//     return (
//         <Context.Provider value={[menuCom, setMenuCom]}>{ children}</Context.Provider>
//     )
// }
// export default MenuProvider;

export const ContextMenu = createContext();


const MenuProvider = ({ children }) => {
    
   
    const [menuCom, setMenuCom] = useState(undefined);
    useEffect(() => {
        
        if (Cookies.get("workCommandValue")) {
            setMenuCom(JSON.parse(Cookies.get("workCommandValue")));
        }
    },[])

    return (
        <ContextMenu.Provider value={[menuCom, setMenuCom]}>{ children}</ContextMenu.Provider>
    );
}
export default  MenuProvider ;