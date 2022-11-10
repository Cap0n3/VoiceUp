import styled from "styled-components";

const debug = true;

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: ${({direction}) => 
        (direction === "normal" && "row") ||
        (direction === "reverse" && "row-reverse") ||
        "row"
    };
    width: 100%;
    height: 500px;
    ${debug ? "border: 1px solid red;" : ""}
`;

export const ImgContainer = styled.div`
    width: 100%;
    overflow: hidden;
    ${debug ? "background-color: lightblue;" : ""}
`;

export const TextContainer = styled.div`
    width: 100%;
    overflow: hidden;
    ${debug ? "background-color: coral;" : ""}
`;

export const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("https://www.myvoiceup.ch/wp-content/uploads/2019/08/12002813_749108578551288_8484097227807049213_n.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-left: -100%;
    transition: margin-left 1000ms 800ms ease;

    &.active {
        margin-left: 0;
    }
`;

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: green;
    margin-left: 100%;
    transition: margin-left 1000ms 800ms ease;

    &.active {
        margin-left: 0;
    }
`;