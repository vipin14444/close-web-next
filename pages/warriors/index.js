import styled from "styled-components"
import { ContentWrapper, Footer, Header } from '../../components/Components'
import { useEffect, useState } from 'react'

export const getStaticProps = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const res = await fetch(url)
    const data = await res.json()

    return {
        props: {
            warriors: data
        }
    }
}

const Warriors = ({ warriors }) => {

    const [height, setHeight] = useState(0)

    useEffect(() => {
        setHeight(window.innerHeight)
    }, [])

    return (
        <Container>
            <Header light />

            <Wrapper style={{ minHeight: `${height}px` }}>
                {
                    warriors.map(item => (
                        <p key={item.id}>{item.name}</p>
                    ))
                }
            </Wrapper>

            <Footer light />
        </Container>
    )
}

export default Warriors

const Container = styled.div``
const Wrapper = styled(ContentWrapper)``