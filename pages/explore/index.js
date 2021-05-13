import { clientApiBaseUrl } from "../../config/GlobalConfig"
import { Header, Footer, ContentWrapper, PostList, Heading, Spinner, ListEndMessage } from '../../components/Components'
import styled from "styled-components"
import { useEffect, useState } from "react"
import Head from 'next/head'
import InfiniteScroll from "react-infinite-scroll-component";

export const getServerSideProps = async () => {

    const firstReqLink = '/v1/posts?intent=NEED_HELP';
    const url = `${clientApiBaseUrl}/posts`
    const res = await fetch(url, { method: 'POST', body: JSON.stringify({ url: firstReqLink }) })

    const data = await res.json()
    const postList = data?.data?.content_list
    const fetchNext = data?.data?.next

    return {
        props: {
            posts: postList || null,
            next: fetchNext || null
        }
    }
}

const Explore = ({ posts, next }) => {
    const [height, setHeight] = useState(1000)
    const [postList, setPostList] = useState([])
    const [nextUrl, setNextUrl] = useState('')

    useEffect(() => {
        setPostList(posts)
        setNextUrl(next)
        setHeight(window.innerHeight)
    }, [])

    const fetchMoreData = () => {
        const url = `${clientApiBaseUrl}/posts`

        fetch(url, { method: 'POST', body: JSON.stringify({ url: nextUrl }) }).then(res => {
            res.json().then(data => {
                const postListNew = data?.data?.content_list
                const fetchNextNew = data?.data?.next

                const updatedPostList = []
                updatedPostList.push(...postList)
                updatedPostList.push(...postListNew)

                setPostList(updatedPostList)
                setNextUrl(fetchNextNew)
            })
        })
    }

    return (
        <Container>
            <Head>
                <title>CloseApp - People looking for help</title>
            </Head>

            <Header light />

            <Wrapper style={{ minHeight: `${height}px` }}>

                <Heading>People looking for help / People looking to help</Heading>

                <InfiniteScroll
                    dataLength={postList.length}
                    next={fetchMoreData}
                    hasMore={(nextUrl && nextUrl.length)}
                    loader={<Spinner />}
                    endMessage={<ListEndMessage />}
                >
                    <PostList postList={postList} />
                </InfiniteScroll>

            </Wrapper>

            <Footer light />
        </Container>
    )
}

export default Explore

const Container = styled.div``
const Wrapper = styled(ContentWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;

    .infinite-scroll-component__outerdiv {
        max-width: 70ch;
        width: 100%;
    }
`