import styled from "styled-components"

const ListEndMessage = () => {
    return (
        <Container>
            You have reached the end of the list.
        </Container>
    )
}

export default ListEndMessage

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
`
