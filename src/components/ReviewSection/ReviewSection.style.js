import styled from "styled-components";
import { VoiceUpColors } from "../../colors";

const debug = false;
const sectionHeight = 600;

export const ReviewContainer = styled.section`
    position: relative;
    width: 100%;
    height: ${sectionHeight}px;
    overflow: hidden;
    z-index: 1;
    background-color: ${debug ? "lightblue" : VoiceUpColors.white};
`;

// Review container style //

export const ReviewSlide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    width: 100%;
    height: ${sectionHeight}px;
    background-color: ${debug ? "lightgreen" : VoiceUpColors.white};

    &.active {
        opacity: 1;
        transition: ${({transitionTime}) => `opacity ${transitionTime}ms ease-in`};
    }

    &.inactive {
        opacity: 0;
        transition: ${({transitionTime}) => `opacity ${transitionTime}ms ease-in`};
    }
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

export const ReviewBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 300px;
    height: ${sectionHeight - 100}px;
    overflow: scroll;
    ${debug ? "background-color: cyan;" : ""}

    & > img {
        margin-left: auto;
        margin-right: auto;
        width: 120px;
        margin-bottom: 20px;
        border-radius: 50%;
    }

    & > blockquote {
        display: block;
        font-style: italic;
        font-weight: 300;
        height: ${sectionHeight - 350}px;
        margin-bottom: 10px;
        overflow-y: scroll;
        text-align: center;
        ${debug ? "border: 1px solid red;" : ""}
    }

    & > p {
        display: block;
        font-weight: 700;
        text-align: center;
        font-style: bold;
        ${debug ? "border: 1px solid purple;" : ""}
    }

    & > small {
        display: block;
        font-style: italic;
        text-align: center;
        ${debug ? "border: 1px solid orange;" : ""}
    }
`;

