import { useContext, useEffect, useState } from "react";
import logo from "../assets/logos/logosimples.png"
import styled from 'styled-components'
import { ModeContext } from "../context/mode";
import { LangContext } from "../context/lang";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Header({ page }) {

    const { lang } = useContext(LangContext);
    const { mode } = useContext(ModeContext);
    const [text, setText] = useState("white")
    const [destaque, setDestaque] = useState("white")


    useEffect(() => {
        if (mode == "black") {
            setText("black")
            setDestaque("purple")
        } else {
            setDestaque("green")
            setText("white")
        }
    }, [mode])


    const translate = {
        "sobremim": {
            pt: "sobre mim",
            en: "about me"
        },
        "meusproejtos": {
            pt: "meus projetos",
            en: "my projects"
        },
        "meache": {
            pt: "onde me encontrar",
            en: "how to find me"
        }
    }

    return (
        <Wrapper>
            <div>
                <Link to={"/"} className="link">
                    <Logo src={logo} alt="" />
                </Link>
            </div>
            <Navbar>
                <Link to={"/meache"} className="link">
                    <P className={page === "meache" ? destaque : text}>{translate.meache[lang]}</P>
                </Link>
                <Link to={"/projetos"} className="link">
                    <P className={page === "projetos" ? destaque : text}>{translate.meusproejtos[lang]}</P>
                </Link>
                <Link to={"/sobremim"} className="link">
                    <P className={page === "sobremim" ? destaque : text}>{translate.sobremim[lang]}</P>
                </Link>
            </Navbar>
        </Wrapper >
    )

}

const Wrapper = styled.div`
    width: 65%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 30px;
    `
const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    align-items: center;

    .link{
        text-decoration: none;
    }
    .white{
        color: #F8F9D2;
    }
    .black{
        color: #151313;
    }
    .green{
        color: #4DFC36;;
    }
    .purple{
        color: #8700FF;;
    }
    `

const Logo = styled.img`
    width: 73px;
    `
const P = styled.p`
    z-index: 100;
    font-size: 16px;
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    &:hover {
        color: #F531E2;
        transition: 0.5s;
    }
`
