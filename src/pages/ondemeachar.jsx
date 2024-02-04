import styled from 'styled-components'
import Header from '../components/header'
import { useContext, useEffect, useState } from 'react';
import { ModeContext } from '../context/mode';
import Tiktok from '../assets/tiktok.mp4'
import { LangContext } from '../context/lang';

export default function MeAche() {

    const { lang } = useContext(LangContext);
    const { mode } = useContext(ModeContext);
    const [backgound, setBackground] = useState("WrapperBlack")
    // const [text, setText] = useState("white")
    const [titulos, setTitulos] = useState("green")

    useEffect(() => {
        if (mode == "black") {
            setBackground("WrapperWhite")
            // setText("black")
            setTitulos("purple")
        } else {
            setBackground("WrapperBlack")
            setTitulos("green")
            // setText("white")
        }
    }, [mode])

    const translate = {
        "titulo": {
            pt: "onde me encontrar",
            en: "how to find me"
        }
    }

    return (
        <Wrapper>
            <div className={backgound}>
                <Header page="meache" />
                <DivTitulo>
                    <Titulo>{translate.titulo[lang]}</Titulo>
                </DivTitulo>
                <Div>
                    <Main>
                        <Column1>
                            <RetanguloDiv>
                                <iframe src={`https://player.twitch.tv/?channel=criativaria&parent=${window.location.hostname}`} height="302" width="535" allowFullScreen></iframe>
                            </RetanguloDiv>
                            <Spotify>
                                <iframe src="https://open.spotify.com/embed/playlist/2Sh31rhttnqqA5uO268cEt?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                <iframe src="https://open.spotify.com/embed/playlist/2ieDuIzaWYvLP7dacKkCCA?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                <iframe src="https://open.spotify.com/embed/playlist/79ZdZltH16uN0UY0nOaDrB?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                <iframe src="https://open.spotify.com/embed/playlist/00S6ZYIfgubr3Hj6qscvTx?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                <iframe src="https://open.spotify.com/embed/playlist/5MIM2a1f9bHJ6yW9q8Re8T?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </Spotify>
                            <a href="https://github.com/Criativaria" target='_blank' rel="noreferrer">
                                <QuadradoDiv>
                                    <Text className={titulos}>GitHub</Text>
                                    <img src="https://ik.imagekit.io/q0sjacoje/imagem_2024-02-02_225400315.png?updatedAt=1706925242343" alt="" />
                                </QuadradoDiv>
                            </a>
                        </Column1>
                        <Column2>
                            <a href="https://www.instagram.com/criativaria/" target='_blank' rel="noreferrer">
                                <QuadradoDiv>
                                    <Text className={titulos}>Instagram</Text>
                                    <img src="https://ik.imagekit.io/q0sjacoje/imagem_2024-02-02_230944229.png?updatedAt=1706926187977" alt="" />
                                </QuadradoDiv>
                            </a>
                            <a href="https://www.linkedin.com/in/maria-rita-boareto-7a13b7269/" target='_blank' rel="noreferrer">
                                <RetanguloDiv>
                                    <Text className={titulos}>Linkedin</Text>
                                    <img src="https://ik.imagekit.io/q0sjacoje/image.png?updatedAt=1706917756945" alt="" />
                                </RetanguloDiv>
                            </a>
                            <a href="https://www.tiktok.com/@criativaria?lang=pt-BR" target='_blank' rel="noreferrer">
                                <Spotify>
                                    <Video width="353" height="603" autoPlay muted loop>
                                        <source src={Tiktok} type="video/mp4" />
                                    </Video>
                                </Spotify>
                            </a>
                        </Column2>
                    </Main>
                </Div>
            </div>

        </Wrapper >


    )
}

const RetanguloDiv = styled.div`
    width: 535px;
    height: 302px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover{
        .green{
            color: #4DFC36;
            }
        .purple{
            color: #8700FF;
        }
        }
`
const Spotify = styled.div`
    width: 353px;
    height: 603px;
    display: flex;
    flex-direction: column;
    margin: 0;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover{
       .green{
           color: #4DFC36;
           }
       .purple{
           color: #8700FF;
       }
    }
   
`
const Video = styled.video`
    width: 353px;
    height: 603px;
    transition: 0.5s;
`
const QuadradoDiv = styled.div`
    width: 353px;
    height: 353px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: 0.5s;
    &:hover{
        .green{
            color: #4DFC36;
            }
        .purple{
            color: #8700FF;
        }
    }
`
const Text = styled.p`
    font-family: 'Roboto Mono', monospace;
    font-size: 25px;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0000009c;
    color: white;
    opacity: 0;
    transition: 0.5s;
    &:hover{
        opacity: 100%;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`
const Main = styled.main`
    display: flex;
    flex-direction: row;
`
const Column1 = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 42px;
    `
const Column2 = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 42px;
    width: 400px;
`
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
    height: fit-content;
    background-color: #151313;
    z-index: -5;
    color: #FEFFE1;
    padding-bottom: 4rem;
}

.WrapperWhite{
    text-decoration: none;
    height: fit-content;
    background-color: #FEFFE1;
    z-index: -5;
    color: #151313;
    padding-bottom: 4rem;
    
}
`