import { createContext } from 'react'
import { useEffect, useState } from "react"

export const ModeContext = createContext();

// eslint-disable-next-line react/prop-types
export function ModeProvider({ children }) {

    const [mode, setMode] = useState("black");

    useEffect(() => {
        setMode(localStorage.getItem("Mode"))
    }, [])

    function toggleMode() {
        if (mode === "black") {
            setMode("white")
            localStorage.setItem("Mode", "white")
        } else {
            setMode("black")
            localStorage.setItem("Mode", "black")
        }
    }
    return (

        <ModeContext.Provider value={{ toggleMode, mode }} >
            {children}
        </ModeContext.Provider>
    )

}