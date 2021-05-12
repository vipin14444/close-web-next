import styled from "styled-components"
import { ContentWrapper, Footer, Header, Heading, Warrior } from '../../components/Components'
import { useEffect, useState } from 'react'
import Head from "next/head"

const Warriors = () => {

    const [height, setHeight] = useState(1000)
    const [warriors, setWarriors] = useState([
        {
            name: 'Vaishnavi Bhardwaj',
            city: 'New Delhi'
        },
        {
            name: 'Tanya Dhingra',
            city: 'Gurgaon'
        },
        {
            name: 'AaNand Shekhar',
            city: 'New Delhi'
        },
        {
            name: 'Mohit Manuja',
            city: 'Gurgaon'
        },
        {
            name: 'Vipin Sharma',
            city: 'Gurgaon'
        },
    ])

    useEffect(() => {
        setHeight(window.innerHeight)
    }, [])

    return (
        <Container>
            <Head>
                <title>CloseApp - Warriors</title>
            </Head>

            <Header light />

            <Wrapper style={{ minHeight: `${height}px` }}>
                <Heading>Warriors</Heading>
                <List>
                    {
                        warriors.map((item, idx) => (
                            <li>
                                <Warrior
                                    key={idx}
                                    name={item.name}
                                    city={item.city}
                                />
                            </li>
                        ))
                    }
                </List>
            </Wrapper>

            <Footer light />
        </Container>
    )
}

export default Warriors

const Container = styled.div``
const Wrapper = styled(ContentWrapper)``
const List = styled.ul`
    margin-top: 1.5rem;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    list-style: none;

    li {
        width: 100%;
        min-width: 30ch;

        @media screen and (min-width: 768px) {
            width: unset;
        }
    }
`