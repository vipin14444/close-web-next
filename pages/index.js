import styled from "styled-components"
import { Header } from "../components/Components"
import { useRouter } from 'next/router'
import PlayStoreIcon from '../assets/playstore.svg'
import { useEffect, useState } from 'react'
import Head from "next/head"
import { themeVariable } from '../config/ThemeConfig'
import { Footer } from "../components/Components"

const appName = 'CloseApp'
const appDescriptionTitle = 'Location Based Covid Relief App'
const appDescriptionMain = 'CloseApp is a location-based social networking platform that helps users discover and connect with people located in their vicinity at any given time. This hyper-local approach of this open platform helps users reach out for support in real-time in their neighborhood, raise local concerns, run community-driven initiatives, work towards bringing in social impact and a supportive living environment for all.'

const Home = () => {

    const router = useRouter()

    const [height, setHeight] = useState(0)

    useEffect(() => {
        setHeight(window.innerHeight)

        document.body.classList.add('custom-scroll-bar')

        // This will be fired when component unmounts
        return () => {
            document.body.classList.remove('custom-scroll-bar')
        }
    }, [])

    return (
        <Container style={{ minHeight: `${height}px` }}>
            <Head>
                <title>CloseApp - Connect with people near you!</title>
            </Head>

            <Header />

            <Main>
                <Wrapper>
                    <ContentSection>
                        <h1>{appName}</h1>
                        <h3>{appDescriptionTitle}</h3>
                        <p>{appDescriptionMain}</p>
                        <CallToActionContainer>
                            <a className='download' href='https://we.tl/t-bRvWY6pN7y'> <PlayStoreIcon /> Download Now </a>
                        </CallToActionContainer>

                        <ActionLinksContainer>
                            <a href="https://forms.gle/sm7Tew38ZQdSGWmK6">Register For Volunteer</a>
                            <div className="separator"></div>
                            <a href='/warriors' onClick={(e) => { e.preventDefault(); router.push('/warriors') }}>Check Warriors List</a>
                        </ActionLinksContainer>
                    </ContentSection>

                    <HeroImageSection>
                        <img src='/hero-image.png' alt="phone" />
                    </HeroImageSection>
                </Wrapper>
            </Main>

            <Footer />
        </Container>
    )
}

export default Home

const Container = styled.div`
    background-color: ${themeVariable.colPrimary};

    a {
        text-decoration: none;
    }
`

const Main = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 500px;
    gap: 1.5rem;
    width: ${themeVariable.width};

    @media screen and (min-width: 768px) {
        flex-direction: row-reverse;

        section {
            flex: 1;
        }
    }
`

const ContentSection = styled.section`
    color: white;
    margin-top: 3rem;

    @media screen and (min-width: 768px) {
        margin-top: 5rem;
    }

    h1 {
        text-transform: uppercase;
        display: inline-block;
        position: relative;
    }

    h3 {
        margin-top: 1.8rem;
    }

    p {
        margin-top: 0.9rem;
        font-weight: 300;
    }
`

const CallToActionContainer = styled.div`
    margin: 3rem 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px) {
        justify-content: unset;
    }

    a.download {
        display: flex;
        padding: 1rem 2rem;
        align-items: center;
        justify-content: center;
        background-color: ${themeVariable.colPrimary};
        color: white;
        border: 1px solid white;
        font-weight: 500;
        outline: none;

        svg {
            width: 1.5rem;
            margin-right: 0.75rem;
        }

        &:hover,
        &:focus {
            background-color: white;
            color: ${themeVariable.colPrimary};
            cursor: pointer;

            svg {
                path {
                    fill: ${themeVariable.colPrimary};
                }
            }
        }

        border-radius: 10rem;
        -webkit-border-radius: 10rem;
        -moz-border-radius: 10rem;
        -ms-border-radius: 10rem;
        -o-border-radius: 10rem;
        transition: all 300ms ease-out;
        -webkit-transition: all 300ms ease-out;
        -moz-transition: all 300ms ease-out;
        -ms-transition: all 300ms ease-out;
        -o-transition: all 300ms ease-out;
    }
`

const ActionLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        justify-content: unset;
    }

    a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;

        &:hover,
        &:focus {
            background-color: ${themeVariable.colPrimaryDark};
        }
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
    }

    .separator {
        height: 2rem;
        width: 1px;
        background-color: white;
    }
`

const HeroImageSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
    }
`
