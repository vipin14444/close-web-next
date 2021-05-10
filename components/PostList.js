import styled from "styled-components"
import PostItem from "./PostItem"

const PostList = ({ postList }) => {

    if (!postList.length) {
        return (null)
    }

    return (
        <List>
            {
                postList.map((item, idx) => (
                    <PostItem key={idx} data={item} />
                ))
            }
        </List>
    )
}

export default PostList

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 70ch;
    width: 100%;
    margin-top: 2rem;
`
