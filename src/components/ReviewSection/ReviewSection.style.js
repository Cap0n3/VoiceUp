import styled from "styled-components";
const debug = false;
const sectionHeight = 600;

export const ReviewWrapper = styled.div`
    position: relative;
    width: 100%;
    height: ${sectionHeight}px;
    overflow: hidden;
    ${debug ? "background-color: lightblue;" : ""}
`;

// Review container style //

export const ReviewSlide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    width: 100%;
    height: ${sectionHeight}px;
    ${debug ? "background-color: lightgreen;" : ""}

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
        height: ${sectionHeight - 390}px;
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
