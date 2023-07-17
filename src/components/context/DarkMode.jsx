import { useReducer } from "react";
import DarkModeReducer from "./DarkModeReducer";
import { createContext } from "react";

const INITIAL_STATE = {
    darkmode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeProvider = ({children})=>{
    const [state,dispatch] = useReducer(DarkModeReducer,INITIAL_STATE);

    return (
        <DarkModeContext.Provider value={{darkmode: state.darkmode,dispatch}}>
            {children}
        </DarkModeContext.Provider>
    )


}