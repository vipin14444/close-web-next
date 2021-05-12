import styled from "styled-components"
import { ContentWrapper, Footer, Header, Heading } from '../components/Components'
import { mobileAppDownloadUrl } from "../config/GlobalConfig";
import PlayStoreIcon from '../assets/playstore.svg'
import { themeVariable } from "../config/ThemeConfig";
import { useEffect } from 'react'
import DownloadAppButton from "../components/DownloadAppButton";

const NotFound = () => {

    useEffect(() => {
        document.body.classList.add('custom-scroll-bar')

        // This will be fired when component unmounts
        return () => {
            document.body.classList.remove('custom-scroll-bar')
        }
    }, [])

    return (
        <Container>
            <Header />

            <Wrapper>
                <CustomHeading className='first'>404</CustomHeading>
                <CustomHeading className='second'>Looks like you are lost</CustomHeading>
                <CustomHeading className='third'>Download the CloseApp Now</CustomHeading>
                <DownloadAppButton />
            </Wrapper>

            <Footer />
        </Container>
    )
}

export default NotFound

const Container = styled.div`
    background-color: ${themeVariable.colPrimary};
    color: white;
`
const Wrapper = styled(ContentWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0 4rem;
`
const CustomHeading = styled(Heading)`
        &.first {
            font-size: 7rem;
        }
        &.second {
            font-size: 1.5rem;
            margin: 0;
        }
        &.third {
            font-size: 1.17rem;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
`
