import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { LangContext } from '../context/lang'
import { ModeContext } from '../context/mode';

export default function ButtonLang() {

    const { toggleLang, lang } = useContext(LangContext);

    const { mode } = useContext(ModeContext);
    const [backgound, setBackground] = useState("black")

    useEffect(() => {
        if (mode == "black") {
            setBackground("white")
        } else {
            setBackground("black")
        }
    }, [mode])

    return (
        <>
            <Div>
                <Button className={backgound} onClick={toggleLang}>
                    {lang === "pt" ? "PT" : "EN"}
                </Button>
            </Div>
        </>
    )
}

const Button = styled.button`
    font-family: 'Roboto Mono', monospace;
    font-size: 25px;
    background: none;
    border: none;
   
    `
const Div = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 50px;
    padding-right: 30px;
    .black{
        color: white;
    }
    .white{
        color:  black;
    }
`