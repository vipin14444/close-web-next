import MoonLoader from "react-spinners/MoonLoader";
import styled from "styled-components";
import { themeVariable } from "../config/ThemeConfig";

const Spinner = ({ loading }) => {
    return (
        <Container>
            <MoonLoader color={themeVariable.colPrimary} loading={true} size={20} />
        </Container>
    )
}

export default Spinner

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
`
