import styled from "styled-components"
import PlayStoreIcon from '../assets/playstore.svg'
import { mobileAppDownloadUrl } from "../config/GlobalConfig"
import { themeVariable } from "../config/ThemeConfig"

const DownloadAppButton = () => {
    return (
        <Link className='download' href={mobileAppDownloadUrl}> <PlayStoreIcon /> Download Now </Link>
    )
}

export default DownloadAppButton

const Link = styled.a`
    display: flex;
    padding: 1rem 2rem;
    align-items: center;
    justify-content: center;
    background-color: ${themeVariable.colPrimary};
    color: white;
    border: 1px solid white;
    font-weight: 500;
    outline: none;

    svg {
        width: 1.5rem;
        margin-right: 0.75rem;
    }

    &:hover,
    &:focus {
        background-color: white;
        color: ${themeVariable.colPrimary};
        cursor: pointer;

        svg {
            path {
                fill: ${themeVariable.colPrimary};
            }
        }
    }

    border-radius: 10rem;
    -webkit-border-radius: 10rem;
    -moz-border-radius: 10rem;
    -ms-border-radius: 10rem;
    -o-border-radius: 10rem;
    transition: all 300ms ease-out;
    -webkit-transition: all 300ms ease-out;
    -moz-transition: all 300ms ease-out;
    -ms-transition: all 300ms ease-out;
    -o-transition: all 300ms ease-out;
`