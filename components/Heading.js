import styled from "styled-components"

const Heading = ({ children, className }) => {
    return (
        <HeadingBody className={className}>{children}</HeadingBody>
    )
}

export default Heading

const HeadingBody = styled.h2`
    margin-top: 2rem;
`
