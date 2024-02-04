import Header from "../components/header";
import styled from 'styled-components'
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../context/lang";
import { ModeContext } from "../context/mode";


export default function Projetos() {

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
            setTitulos("green")
            setText("white")
        }
    }, [mode])

    const translate = {
        "titulo": {
            pt: "meus projetos",
            en: "my projects"
        },
        "vp": {
            pt: "O Viper Pixels foi meu primeiro projeto por diversão! começei a fazer com html css e js puro e hoje em dia estou refazendo com React, Node, e MongoBd, por enquanto essa é a versão original. É um site para ajudar jogadores de Valorant com a personagem Viper",
            en: "Viper Pixels was my first project for fun! I started doing it with pure html css and js and nowadays I'm redoing it with React, Node, and MongoBd, for now this is the original version. It's a website to help Valorant players with the character Viper"
        },
        "kg": {
            pt: "Esse foi meu primeiro projeto em React! ainda não usava Styled Components então a estilização é em Css puro. Fiz ele por diversão e porquê queria entender como fazer a lógica de um carrinho dos sites de compras.",
            en: "This was my first project in React! I haven't used Styled Components yet so the styling is in pure Css. I made it for fun and because I wanted to understand how to create the logic of a cart on shopping sites."
        },
        "cf": {
            pt: "Eu fiz essa calculadora que fala pois meu bisavô é cego e eu queria fazer algo que ele possa usar por conta própria, feito em React e muito amor",
            en: "I made this calculator that says it because my great-grandfather is blind and I wanted to make something that he can use on his own, made in React and lots of love"
        },
        "su": {
            pt: "Esse site está incompleto, mas eu me orgulho dele, por isso temos fotos de cachorrinhos ao invés de fotos de cursos. Foi nesse site em que eu aprendi a consumir APIS dificeis, temos atualização automatica, toda vez que esse canal do youtube posta um vídeo, o site atualiza junto com o link do vídeo novo.",
            en: "This site is incomplete, but I'm proud of it, that's why we have photos of puppies instead of photos of courses. It was on this website where I learned how to use difficult APIs, we have automatic updates, every time this YouTube channel posts a video, the website updates along with the new video link."
        }
    }

    const projetos = [
        {
            nome: "Calculadora que Fala",
            id: "cf",
            Img: "https://ik.imagekit.io/q0sjacoje/imagem_2024-02-02_200840161.png?updatedAt=1706915322059",
            link: "https://calculadoraquefala.vercel.app",
            class: "rowreverse"
        },
        {
            nome: "Viper Pixels",
            id: "vp",
            Img: "https://ik.imagekit.io/q0sjacoje/imagem_2024-02-02_191355923.png?updatedAt=1706912048125",
            link: "https://viperpixels.vercel.app/index.html",
            class: "row"
        },
        {
            nome: "Kuro Glam",
            id: "kg",
            Img: "https://ik.imagekit.io/q0sjacoje/imagem_2024-02-02_200320408.png?updatedAt=1706915005460",
            link: "https://kuroglam.vercel.app",
            class: "rowreverse"
        },
        {
            nome: "SoulUnalome",
            id: "su",
            Img: "https://ik.imagekit.io/q0sjacoje/imagem_2024-02-02_201531766.png?updatedAt=1706915733648",
            link: "https://soulunalome.vercel.app",
            class: "row"
        }
    ]

    return (
        <Wrapper>
            <div className={backgound}>
                <Header page="projetos" />
                <DivTitulo>
                    <Titulo>{translate.titulo[lang]}</Titulo>
                </DivTitulo>
                <Content>
                    {
                        projetos.map((projeto) =>
                            <a href={projeto.link} key={projeto.vp} className="link" target="_blank" rel="noreferrer">

                                <DivImgTexto className={projeto.class}>
                                    <Img src={projeto.Img} alt="" />
                                    <DivTextos>
                                        <SubTitulos className={titulos}>{projeto.nome}</SubTitulos>
                                        <Texto className={text}>{translate[`${projeto.id}`][lang]}</Texto>
                                    </DivTextos>
                                </DivImgTexto>
                            </a>
                        )
                    }

                </Content>
            </div>
        </Wrapper>
    )
}
const Content = styled.main`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    .row{
        flex-direction: row;
    }
    .rowreverse{
        flex-direction: row-reverse;
    }
    `
const DivImgTexto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin-top: 30px;
    `

const Img = styled.img`
        width: 32.8125rem;
    `
const DivTextos = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    gap: 40px;
    text-decoration: none;
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

.link{
    text-decoration: none;
}
.WrapperBlack{
    text-decoration: none;
    min-height: 100vw;
    background-color: #151313;
    z-index: -5;
    color: #FEFFE1;
    height: 100vh;
}

.WrapperWhite{
    text-decoration: none;
    min-height: 100vw;
    background-color: #FEFFE1;
    z-index: -5;
    color: #151313;
    height: 100vh;
    
}
`