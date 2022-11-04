import styled from "styled-components";
import { VoiceUpColors } from "../../colors";

export const SliderWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const Slide = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${(props) => {
        console.log(props.imageURL)
        return `url(${props.imageURL})`
    }};
    background-position: 50% 20%;
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: 1;

    &.active {
        opacity: 1;
        transition: opacity 500ms ease;
    }

    &.inactive {
        opacity: 0;
        transition: opacity 500ms ease;
    }

    @media screen and (max-width: 960px) {
        background-position: 65% 20%;
        background-size: cover;
        padding-left: 100px;    
    }
`;

export const TextBox = styled.div`
    position: absolute;
    top: 20%;
    bottom: 20%;
    left: 140px;
    border: 1px solid pink;
    z-index: 900;

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
    color: red;
    z-index: 999;
    cursor: pointer;
`;

export const RightArrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 32px;
    font-size: 40px;
    color: red;
    z-index: 999;
    cursor: pointer;
`;