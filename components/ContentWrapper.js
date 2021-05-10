import styled from "styled-components"
import { themeVariable } from "../config/ThemeConfig"

const ContentWrapper = ({ children, ...remainingProps }) => {
    return (
        <Container>
            <WrapperBody {...remainingProps}>
                {children}
            </WrapperBody>
        </Container>
    )
}

export default ContentWrapper

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const WrapperBody = styled.div`
    width: ${themeVariable.width};
`
