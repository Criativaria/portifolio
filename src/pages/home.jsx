import LogoEscura from "../assets/logos/logo5.png"
import LogoClara from "../assets/logos/logo2.png"
import { LangContext } from '../context/lang'
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components'
import { ModeContext } from "../context/mode";
import { Link } from "react-router-dom";
import Foto from '../assets/ftDePerfil.png'
export default function Home() {
    const { lang } = useContext(LangContext);
    const { mode } = useContext(ModeContext);
    const [backgound, setBackground] = useState("WrapperBlack")
    const [text, setText] = useState("white")
    const [logo, setLogo] = useState(LogoEscura)

    useEffect(() => {
        if (mode == "black") {
            setLogo(LogoClara)
            setBackground("WrapperWhite")
            setText("black")
        } else {
            setLogo(LogoEscura)
            setBackground("WrapperBlack")
            setText("white")
        }
    }, [mode])

    const translate = {
        "boasvindas": {
            pt: "boas vindas! :)",
            en: "welcome! :)"
        },
        "subtitulo": {
            pt: "por onde gostaria de começar?",
            en: "where would you like to start?"
        },
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
        <>
            <Wrapper>
                <Margin className={backgound}>
                    <Background></Background>
                    <DivHeader>
                        <Img src={logo} alt="logo da criativaria" />
                    </DivHeader>
                    <Main>
                        <Textos>
                            <DivTitulo>
                                <Titulo>{translate.boasvindas[lang]}</Titulo>
                            </DivTitulo>
                            <div>
                                <SubTitulo>{translate.subtitulo[lang]}</SubTitulo>
                            </div>
                            <Navbar>
                                <Link className="link" to="/sobremim">
                                    <Text className={text}>{translate.sobremim[lang]}</Text>
                                </Link>
                                <Link className="link" to="/projetos">
                                    <Text className={text}>{translate.meusproejtos[lang]}</Text>
                                </Link>
                                <Link className="link" to="/meache">
                                    <Text className={text}>{translate.meache[lang]}</Text>
                                </Link>
                            </Navbar>
                        </Textos>
                        <ImgFoto src={Foto} alt="" />
                    </Main>
                </Margin>

            </Wrapper>
        </>
    )

}
const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const ImgFoto = styled.img`
    width: 533px;
    height: 100%;
    margin-right: 50px;
`
const Background = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 300px;
    background-color: #f68eecb9;
    filter: blur(100px);
    z-index: -1;
    position: absolute;
`
const Textos = styled.div`
    padding-left: 50px;
    width: 50%;
`
const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    .link{
        text-decoration: none;
    }
    .white{
        color: #FEFFE1;
    }
    .black{
        color: #151313;
    }
    `
const Text = styled.div`
    font-size: 25px;
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    &:hover{
        color: #4DFC36;
        transition: 0.5s;
    }
`
const SubTitulo = styled.div`
    font-size: 40px;
    font-family: 'Roboto Mono', monospace;
    padding-block: 30px;
`
const DivTitulo = styled.div`
    display: flex;
    align-items: center;
    padding-top: 200px;
    width: 50%;
`
const Titulo = styled.p`
    font-family: 'Reem Kufi Ink', sans-serif;
    font-size: 95px;
    `
const Img = styled.img`
    width: 300px;
    `
const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
const Margin = styled.div`
    padding-inline: 30px;
    padding-top: 30px;
    
`
const Wrapper = styled.div`
    
    .WrapperBlack{
        
        background-color: #151313;
        z-index: -5;
        color: #FEFFE1 !important;
        height: fit-content;
        min-height: 100vh;
    }
    
    .WrapperWhite{
        background-color: #FEFFE1;
        z-index: -5;
        color: #151313 !important;
        height: fit-content;
        min-height: 100vh;
    }
    `