import styled from "styled-components"
import { useEffect, useState } from "react"
import { clientApiBaseUrl } from "../../config/GlobalConfig";
import { ContentWrapper, Footer, Header } from "../../components/Components";

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const url = `${clientApiBaseUrl}/posts?id=${id}`
    const res = await fetch(url);
    const resData = await res.json();
    return { props: { _data: resData } };
}

const Post = ({ _data }) => {
    const [height, setHeight] = useState(1000)
    const [data, setData] = useState(null)

    useEffect(() => {
        setData(_data)
        setHeight(window.innerHeight)
    }, [])

    return (
        <Container>
            <Header light />
            <Wrapper style={{ minHeight: `${height}px` }}>
                {JSON.stringify(data)}
            </Wrapper>
            <Footer light />
        </Container>
    )
}

export default Post

const Container = styled.div``
const Wrapper = styled(ContentWrapper)``