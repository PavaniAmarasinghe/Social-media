import { DarkMode } from "@mui/icons-material";
import { create } from "@mui/material/styles/createTransitions";

import { Children,createContext, useEffect } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({Children}) => {
    const[darkMode,setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode" )) || false
    );

    const toggle = ()=>{
        setDarkMode(!darkMode)
    }
    useEffect(()=>{
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    return(
        <DarkModeContext.Provider value = {{darkMode,toggle}}>
            {Children}
        </DarkModeContext.Provider>
    );
};