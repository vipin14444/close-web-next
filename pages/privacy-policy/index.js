import styled from "styled-components"
import { ContentWrapper, Header, Footer, Heading } from "../../components/Components"
import { themeVariable } from "../../config/ThemeConfig"
import Head from 'next/head'

const PrivacyPolicy = () => {
    return (
        <Container>

            <Head>
                <title>CloseApp - Privacy Policy</title>
            </Head>

            <Header light />

            <Wrapper>

                <Heading>Privacy Policy and Terms & Conditions</Heading>
                <Content>
                    <p>
                        The CloseApp is a location-based social networking platform that helps users discover and connect with people located in their vicinity at any given time. This hyper-local approach of this open platform helps users reach out for support in real-time in their neighborhood, raise local concerns, run community-driven initiatives, work towards bringing in social impact, promote small businesses in the area, organize local events, and together create a better, safe and supportive living environment for all.
                    </p>
                </Content>

                <Heading>Privacy Policy</Heading>
                <Content>
                    <p>
                        Close App is committed to protecting your privacy. Our primary goal is to connect people around you through this app. Users of this app can ask questions and seek help from their neighbors.
                        <br /><br />
                        Usage of the application without providing any personal information:
                        <br /><br />
                        The close app allows their user to explore the app without sharing their personal information. They can check all the content without login in or signing up in the account. However, if any user wants to share their personal opinions in the app they will have to create an account on the app.
                    </p>
                </Content>

                <Heading>How does CloseApp use your personal information?</Heading>
                <Content>
                    <p>
                        The app collects only such personal information from you (Name, city address, e-mail address) that is voluntarily submitted or disclosed by you to us, this information helps us to identify the user who shares content on this platform.
                    </p>
                </Content>

                <Heading>How do we protect your personal information?</Heading>
                <Content>
                    <p>
                        We do not share any of our user’s personal information with any third-party services or other users of the platform. We do not pass any of the user’s personal information to any data analytics services or services. However, the user themselves can share their information publicly for their personal purposes inside the content, close app do not stop their users to share their opinion, statements publicly. The close app is not liable for any harm/damage caused to any user from the information listed inside the app.
                        <br /><br />
                        All information in this app is shared by the user, the user who posts the content are the owner of their content.
                    </p>
                </Content>

                <Heading>Whom to approach if you have further queries about our Privacy Policy?</Heading>
                <Content>
                    <p>
                        If you have any questions about this Privacy Policy or if you would like to provide comments, please contact us at the address and/or e-mail given at <a style={{ textDecoration: 'underline' }} href="mailto:info@closeapp.in">info@closeapp.in</a>
                    </p>
                </Content>

            </Wrapper>

            <Footer light />
        </Container>
    )
}

export default PrivacyPolicy

const Container = styled.div``
const Wrapper = styled(ContentWrapper)``

const Content = styled.div`
    margin-top: 1rem;
    border: 1px solid rgb(222, 222, 222);
    overflow: hidden;

    p {
        padding: 1rem;
        background-color: rgb(252, 252, 252);
        border-left: 5px solid ${themeVariable.colPrimary};
        line-height: 1.5rem;
    }

    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
`
