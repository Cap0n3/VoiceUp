import styled from "styled-components";
import { VoiceUpColors } from "../../colors";

export const SliderWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 160px;
    background-color: yellow;
    background-image: ${(props) => {
        console.log(props.imageURL)
        return `url(${props.imageURL})`
    }};
    background-position: 50% 20%;
    background-repeat: no-repeat;
    background-size: 100%;
    transition: background-image 0.9s ease;

    @media screen and (max-width: 960px) {
        background-position: 65% 20%;
        background-size: cover;
        padding-left: 100px;    
    }
`;

export const TextBox = styled.div`
    border: 1px solid pink;

    & > h1 {
        color: ${VoiceUpColors.white};
        font-size: 4em;
        text-transform: uppercase;
        font-weight: normal;
        margin-bottom: 30px;
    }

    & > p {
        color: ${VoiceUpColors.white};
    }

    @media screen and (max-width: 960px) {
        width: 40%;
    }
`;

export const LeftArrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 32px;
    font-size: 40px;
    color: #fff;
    z-index: 1;
    cursor: pointer;
`;

export const RightArrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 32px;
    font-size: 40px;
    color: #fff;
    z-index: 1;
    cursor: pointer;
`;