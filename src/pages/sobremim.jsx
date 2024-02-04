import Header from "../components/header";
import styled from 'styled-components'
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../context/lang";
import { ModeContext } from "../context/mode";
import oi from '../assets/oie.jpg'
import estudos from '../assets/estudos.jpg'
import gostos from '../assets/gostos.jpg'
import criacao from '../assets/criacao.jpg'

export default function Sobremim() {

    const { lang } = useContext(LangContext);
    const { mode } = useContext(ModeContext);
    const [backgound, setBackground] = useState("WrapperBlack")
    const [text, setText] = useState("white")
    const [titulos, setTitulos] = useState("green")

    useEffect(() => {
        if (mode == "black") {
            setBackground("WrapperWhite")
            setText("black")
            setTitulos("purple")
        } else {
            setBackground("WrapperBlack")
            setText("white")
            setTitulos("green")
        }
    }, [mode])

    const translate = {
        "titulo": {
            pt: "eu",
            en: "me"
        },
        "oi": {
            pt: "oie :)",
            en: "hi :)"
        },
        "eu": {
            pt: "Eu sou a Criativaria, meu nome defaut é Maria Rita e eu tenho 17 anos (se esse site estiver atualizado",
            en: "I am Criativaria, my default name is Maria Rita and I am 17 years old (if this site is updated"
        },
        "estudos": {
            pt: "estudos",
            en: "studies"
        },
        "escola": {
            pt: "Atualmente estou no 3° ano cursando Desenvolvimento de Sistemas na Etec! e foi lá que eu aprendi a programar",
            en: "I'm currently in my 3rd year studying Systems Development at Etec! (that is an tecnical school of the state of São Paulo in Brazil) and that's where I learned to program"
        },
        "criar": {
            pt: "criação de conteúdo",
            en: "content creation"
        },
        "trabalho": {
            pt: "Faço lives pra Twitch praticamente todos os dias e posto fotos e videos no Instagram e Tiktok e estou pensando em criar um canal do Youtube de vlogs do meu dia a dia :)",
            en: "I do lives on Twitch practically every day and post videos on Instagram and Tiktok and I'm thinking about creating a YouTube channel with vlogs about my daily life :)"
        },
        "gostos": {
            pt: "gostos",
            en: "things I like"
        },
        "joguinhos": {
            pt: "Obviamente, eu adoro programar, gosto de desenhar, de jogar valorant, league of legends, joguinhos indies e minecraft, gosto de café com chocolate, meu sorvete favorito é chocomenta, e eu AMO macarrão (mas não miojo, macarrão mesmo.)",
            en: "Obviously, I love programming, I like drawing, playing Valorant, League of Legends, indie games and Minecraft, I like coffee with chocolate, my favorite ice cream is chocolate with mint, and I LOVE pasta (but not noodles, really pasta.)"
        }


    }

    return (
        <Wrapper>
            <div className={backgound}>
                <Header page="sobremim" />
                <DivTitulo>
                    <Titulo>{translate.titulo[lang]}</Titulo>
                </DivTitulo>
                <Content>
                    <DivImgTexto>
                        <Img src={oi} alt="" />
                        <DivTextos>
                            <SubTitulos className={titulos}>{translate.oi[lang]}</SubTitulos>
                            <Texto className={text}>{translate.eu[lang]}</Texto>
                        </DivTextos>
                    </DivImgTexto>
                    <DivImgTexto2>
                        <Img src={estudos} alt="" />
                        <DivTextos>
                            <SubTitulos className={titulos}>{translate.estudos[lang]}</SubTitulos>
                            <Texto className={text}>{translate.escola[lang]}</Texto>
                        </DivTextos>
                    </DivImgTexto2>
                    <DivImgTexto>
                        <Img src={criacao} alt="" />
                        <DivTextos>
                            <SubTitulos className={titulos}>{translate.criar[lang]}</SubTitulos>
                            <Texto className={text}>{translate.trabalho[lang]}</Texto>
                        </DivTextos>
                    </DivImgTexto>
                    <DivImgTexto2>
                        <Img src={gostos} alt="" />
                        <DivTextos>
                            <SubTitulos className={titulos}>{translate.gostos[lang]}</SubTitulos>
                            <Texto className={text}>{translate.joguinhos[lang]}</Texto>
                        </DivTextos>
                    </DivImgTexto2>
                </Content>
            </div>
        </Wrapper>
    )
}
const Img = styled.img`
    width: 525px;
`
const Content = styled.main`
    margin-top: 100px;

    .white{
        color: #FEFFE1;
    }
    .black{
        color: #151313;
    }
    .green{
        color: #4DFC36;
    }
    .purple{
        color: #8700FF;
    }
`

const DivImgTexto2 = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin-top: 30px;
`
const DivImgTexto = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin-top: 30px;
`

const DivTextos = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    gap: 40px;
`
const Texto = styled.p`
    font-family: 'Roboto Mono', monospace;
    font-size: 19px;
`
const SubTitulos = styled.p`
    font-size: 25px;
    color: #4DFC36;
    font-family: 'Roboto Mono', monospace;
`
const DivTitulo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Titulo = styled.h1`
    font-size: 80px;
    color: #F531E2;
    font-family: 'Reem Kufi Ink', sans-serif;
    `
const Wrapper = styled.div`

.WrapperBlack{
    
        min-height: 100vw;
        background-color: #151313;
        z-index: -5;
        color: #FEFFE1;
        height: fit-content;
    }
    
    .WrapperWhite{
        min-height: 100vw;
        background-color: #FEFFE1;
        z-index: -5;
        color: #151313;
        height: fit-content;
    
    }
    `