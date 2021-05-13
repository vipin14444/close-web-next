import styled from "styled-components"
import { themeVariable } from "../config/ThemeConfig"
import CopyToClipboard from "../utils/CopyToClipboard"
import Heading from "./Heading"

const PostItem = ({ data }) => {

    const _data = data?.data
    const userImage = _data?.user_data?.image_url
    const userName = _data?.user_data?.name || ''
    const userLocation = _data?.location?.text || ''
    const createdOn = _data?.created || ''
    const category = _data?.category?.cat_name || ''
    const postTitle = _data?.title
    const postDescription = _data?.description
    const postMedia = _data?.media?.[0]?.link_data?.mid
    const reactionCount = _data?.reactions?.intendedReaction?.count
    const reactionCountText = (
        _data?.reactions?.intendedReaction?.count === 1 ?
            (_data?.reactions?.intendedReaction?.postPluralText ? _data?.reactions?.intendedReaction?.postPluralText.replace('%s', reactionCount) : '')
            :
            (_data?.reactions?.intendedReaction?.postText ? _data?.reactions?.intendedReaction?.postText.replace('%s', reactionCount) : '')
    )

    const sharePost = (e) => {
        e.preventDefault()
        if (navigator.share) {
            navigator.share({
                title: 'Title',
                text: `Description`
            }).then(() => {
                console.log('Successful share')
            }).catch((error) => {
                console.log('Error sharing', error)
            });
        } else {
            //Web share API not available / Site is opened in a browser which doesnt support Web share api
            console.log('Web Share API not available')
        }
    }

    const copyLink = (e) => {
        e.preventDefault()
        const url = 'ABC'
        CopyToClipboard(url)
        alert(`Url copied to clipboard : ${url}`)
    }

    return (
        <Container>
            <Header>
                <UserSection>
                    {userImage ? <UserImage url={userImage} /> : null}
                    <UserInfo>
                        <Name> {userName} </Name>
                        <MetaInfo>
                            <div> {userLocation} </div>
                            <div> {createdOn} </div>
                        </MetaInfo>
                    </UserInfo>
                </UserSection>

                <Tag> {category} </Tag>
            </Header>

            { postTitle ? <PostTitle> {postTitle} </PostTitle> : null}

            { postDescription ? <Description> {postDescription} </Description> : null}

            { postMedia ? <Media src={postMedia} alt='media' /> : null}

            {
                reactionCount ? (
                    <ReactionsContainer>
                        {/* <ReactionsList>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ReactionsList> */}
                        <div className='total-reaction-count'>{reactionCountText}</div>
                    </ReactionsContainer>
                ) : (null)
            }

            <PostActions>
                <Action href={`https://www.closeapp.in/post/${data?.id}`}>Open in App</Action>
                <Action href='#' onClick={sharePost}>Share</Action>
                <Action href='#' onClick={copyLink}>Copy Link</Action>
                {/* <Action href={`http://localhost:3000/post/${data?.id}`}>Open in App</Action> */}
            </PostActions>
        </Container>
    )
}

export default PostItem

const Container = styled.li`
    border: 1px solid #ededed;
    border-radius: 0.5rem;
    font-size: 1rem;
`

const Header = styled.div`
    padding: 0.8em;
    display: flex;
    align-items: center;
    font-size: 1em;
`
const UserSection = styled.div`
    display: flex;
    align-items: center;
`
const UserImage = styled.div`
    width: 3em;
    height: 3em;
    background: ${props => `url(${props.url})`};
    border-radius: 50%;
    background-size: cover;
    margin-right: 0.8em;
`
const UserInfo = styled.div``

const Name = styled.div`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 0.9em;
`

const MetaInfo = styled.div`
    display: flex;
    align-items: center;  
    font-size: 0.75em;
    color: gray;
    margin-top: 0.25em;
    gap: 0.5em;

    div {
        position: relative;
        display: flex;
        align-items: center;
    }

    div + div {
        &::before {
            content: '';
            width: 5px;
            height: 5px;
            background-color: #8080807a;
            border-radius: 50%;
            margin-right: 0.5em;
        }
    }
`
const Tag = styled.div`
    margin-left: auto;
    background-color: ${themeVariable.colPrimary};
    color: white;
    padding: 0.5em 0.8em;
    font-size: 0.8em;
    border-radius: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &::selection {
        color: white;
        background: ${themeVariable.colPrimaryDark};
    }
`

const PostTitle = styled.h3`
    padding: 0.8rem;
    padding-top: 0;
    font-size: 0.95em;
`

const Description = styled.p`
    padding: 0.8em;
    padding-top: 0;
    display: flex;
    align-items: center;
    font-size: 0.95em;
`

const Media = styled.img`
    width: 100%;
`

const ReactionsContainer = styled.div`
    display: flex;
    padding: 0.5em 0.8em;

    .total-reaction-count {
        font-size: 0.7em;
        margin-left: auto;
        color: gray;
    }
`

const ReactionsList = styled.ul`
    display: flex;
    align-items: center;
    gap: 0.3em;
    list-style: none;

    li {
        width: 1em;
        height: 1em;
        background-color: #ededed;
        border-radius: 50%;
    }
`

const PostActions = styled.div`
    display: flex;
    align-items: center;

    border-top: 1px solid whitesmoke;

    a + a {
        border-left: 1px solid whitesmoke;
    }
`

const Action = styled.a`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5em 0;
    font-size: 0.9em;

    @media screen and (max-width: 768px) {
        font-size: 0.8em;
        padding: 0.8em 0;
    }
`
