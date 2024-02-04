import { createContext } from 'react'
import { useEffect, useState } from "react"

export const LangContext = createContext();

// eslint-disable-next-line react/prop-types
export function LangProvider({ children }) {

    const [lang, setLang] = useState("pt");

    useEffect(() => {
        setLang(localStorage.getItem("Lang") || "pt")
    }, [])

    function toggleLang() {
        if (lang === "pt") {
            setLang("en")
            localStorage.setItem("Lang", "en")
        } else {
            setLang("pt")
            localStorage.setItem("Lang", "pt")
        }
    }
    return (

        <LangContext.Provider value={{ toggleLang, lang }} >
            {children}
        </LangContext.Provider>
    )

}