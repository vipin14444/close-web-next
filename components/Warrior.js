import styled from "styled-components";
import { themeVariable } from "../config/ThemeConfig";

const Warrior = ({ name, city }) => {

    const colors = [
        '#4FC3F7',
        '#E91E63',
        '#FFCA28',
        '#4DB6AC',
        '#3F51B5',
        '#FF5722',
        '#CDDC39'
    ]

    const getColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    return (
        <Container>
            <Wrapper style={{ borderLeftColor: getColor() }}>
                <h3>{name}</h3>
                <p>{city}</p>
            </Wrapper>
        </Container>
    )
}

export default Warrior

const Container = styled.div`
    border: 1px solid rgb(222, 222, 222);
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    overflow: hidden;
    width: 100%;
`

const Wrapper = styled.div`
    padding: 1rem;
    border-left: 5px solid ${themeVariable.colPrimary};

    @media screen and (min-width: 768px) {
        p {
            font-size: 0.8rem;
        }
    }
`