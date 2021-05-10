import styled from "styled-components"
import { useRouter } from 'next/router'
import AppIcon from '../assets/Logo/logo-rect-invert.svg'
import AppIconLight from '../assets/Logo/logo-rect.svg'
import Head from 'next/head'
import { useEffect } from "react"
import ContentWrapper from './ContentWrapper'
import { themeVariable } from "../config/ThemeConfig"

const Header = ({ light }) => {

    const router = useRouter()

    const TypeOfContainer = light ? ContainerMain : Container

    useEffect(() => {
        document.documentElement.lang = 'en-us';
    }, [])

    return (
        <TypeOfContainer>
            <Head>
                <meta
                    name="description"
                    content="CloseApp is a location-based social networking platform that helps users discover and connect with people located in their vicinity at any given time. This hyper-local approach of this open platform helps users reach out for support in real-time in their neighborhood, raise local concerns, run community-driven initiatives, work towards bringing in social impact and a supportive living environment for all."
                />
            </Head>

            <Wrapper>
                <LogoContainer onClick={(e) => { e.preventDefault(); router.push('/') }}>
                    {
                        light ? (<AppIconLight className='logo' />) : (<AppIcon className='logo' />)
                    }
                    <span className="title">CloseApp</span>
                </LogoContainer>
                <Nav>
                    <ul>
                        <li> <a href="/explore" onClick={(e) => { e.preventDefault(); router.push('/explore') }}>Explore</a> </li>
                    </ul>
                </Nav>
            </Wrapper>
        </TypeOfContainer>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem 0;

    @media screen and (min-width: 768px) {
        padding: 2rem 0;
    }
`
const ContainerMain = styled(Container)`
    color: ${themeVariable.colPrimary};

    border-bottom: 1px solid whitesmoke;

    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.068);

    .title {
        color: ${themeVariable.colPrimary} !important;
    }

    a {
        color: ${themeVariable.colPrimary} !important;
    }
`

const Wrapper = styled(ContentWrapper)`
    display: flex;
    align-items: center;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0;
    cursor: pointer;

    .logo {
        width: 35px;
    }

    .title {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        color: white;
        font-size: 1.5rem;
        margin-left: 0.5rem;
    }
`

const Nav = styled.nav`
    margin-left: auto;

    ul {
        list-style: none;

        a:last-child {
            margin-right: -1rem;
        }
    }

    a {
        color: white;
        text-decoration: none;
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        font-size: 0.85rem;
        padding: 1rem;
    }
`