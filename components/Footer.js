import styled from "styled-components"
import ContentWrapper from "./ContentWrapper"
import AppIcon from '../assets/Logo/logo-rect-invert.svg'
import AppIconLight from '../assets/Logo/logo-rect.svg'
import { useRouter } from 'next/router'
import { themeVariable } from "../config/ThemeConfig"
import Head from 'next/head'
import { useEffect, useState } from "react"

const Footer = ({ children, light }) => {

    const [location, setLocation] = useState({})

    const router = useRouter()

    useEffect(() => {

        if (!children) {
            getLocation()
        }

    }, [])

    const getLocation = () => {
        fetch('https://geolocation-db.com/json/').then(res => {
            res.json().then(data => {
                setLocation(data)
            })
        })
    }

    return (
        <Container light={light}>
            <Head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
            </Head>

            <Wrapper>
                <Section>

                    <AppInfo>
                        <LogoContainer light={light} onClick={() => { router.push('/') }}>
                            {
                                light ? (<AppIconLight className='logo' />) : (<AppIcon className='logo' />)
                            }
                            <span className="title">CloseApp</span>
                        </LogoContainer>
                        <p>Connect with people near you! Get help or help others.</p>
                    </AppInfo>

                    <CustomFooter>
                        {
                            children ?
                                children
                                :
                                (
                                    <LinksContainer>

                                        <div className="column">
                                            <div className="list-title">
                                                Contact Us
                                            </div>

                                            <ul>
                                                <li> <a href="mailto:info@closeapp.in">Email: info@closeapp.in</a> </li>
                                            </ul>
                                        </div>

                                        <div className="column">
                                            <div className="list-title">
                                                About Us
                                            </div>

                                            <ul>
                                                <li> <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); router.push('/privacy-policy') }}>Privacy Policy</a> </li>
                                            </ul>
                                        </div>

                                        <div className="column">
                                            <div className="list-title">
                                                Oxygen Cylinders
                                            </div>

                                            <ul>
                                                <li> In Delhi </li>
                                                <li> In Gurgaon </li>
                                                <li> In Noida </li>
                                            </ul>
                                        </div>

                                        <div className="column">
                                            <div className="list-title">
                                                Oxygen Beds
                                            </div>

                                            <ul>
                                                <li> In Delhi </li>
                                                <li> In Gurgaon </li>
                                                <li> In Noida </li>
                                            </ul>
                                        </div>
                                    </LinksContainer>
                                )
                        }
                    </CustomFooter>

                </Section>

                <LegalContainer light={light}>
                    © 2021 CloseApp. All rights reserved.
                </LegalContainer>
            </Wrapper>
        </Container>
    )
}

export default Footer

const Container = styled.footer`
    padding: 2rem 0;
    background-color: ${props => props.light ? "#fafafb" : '#4d45bf'};
    margin-top: 2rem;
    color: ${props => props.light ? `black` : `white`};
`

const Wrapper = styled(ContentWrapper)``

const Section = styled.section`
    display: flex;
    gap: 3rem;

    @media screen and (max-width: 1210px) {
        flex-direction: column;
    }
`

const AppInfo = styled.div`
    max-width: 25ch;

    p {
        margin-top: 1rem;
        font-size: 0.9rem;
    }
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0;

    .logo {
        width: 35px;
    }

    .title {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        color: ${props => props.light ? themeVariable.colPrimary : 'white'};
        font-size: 1.5rem;
        margin-left: 0.5rem;
    }
`

const CustomFooter = styled.div`
    flex: 1;
`

const LinksContainer = styled.div`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    .column {
        flex: 1;
        max-width: 25ch;
        min-width: 20ch;

        font-size: 0.9rem;

        .list-title {
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        ul {
            list-style: none;

            li {
                margin-top: 0.6rem;
            
                &:hover {
                    opacity: 0.8;
                    cursor: pointer;
                }
            }
        }
    }
`

const LegalContainer = styled.div`
    border-top: 1px solid ${props => props.light ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)'};
    padding: 2rem 0 1rem;
    margin-top: 2rem;
    font-size: 0.75rem;
    color: ${props => props.light ? 'black' : 'whitesmoke'};
`