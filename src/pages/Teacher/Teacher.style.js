import styled from "styled-components";

const DEBUG = true;
const sectionPadding = 100;

export const AboutSection = styled.section`
    display: flex;
    position: relative;
    width: 100%;
    height: ${({blocksHeight}) => (blocksHeight ? (blocksHeight + sectionPadding) : 5000)}px;
    overflow: hidden;
    ${DEBUG ? "background-color: lightblue;" : ""}

    @media only screen and (max-width: 1024px){
        flex-direction: column;
    }
`;

export const AboutImage = styled.img`
    position: absolute;
    top: ${sectionPadding / 2}px;
    left: 7vw;
    width: ${({width}) => (width ? `${width}px` : "33%")};
    height: ${({height}) => (height ? `${height}px` : "")};
`;

export const DescriptionWrapper = styled.div`
    position: absolute;
    top: ${sectionPadding / 2}px;
    right: 7vw;
    width: ${({width}) => (width ? `${width}px` : "33%")};
    height: ${({height}) => (height ? `${height}px` : "")};
    padding: 30px;
    overflow-y: auto;

    ${DEBUG ? "background-color: lightgreen;" : ""}

    & > h2 {
        font-size: 1.8vw;
        margin-bottom: 5px;
    }

    & > sub {
        display: inline-block;
        font-size: 1.1vw;
        font-weight: 400;
        margin-bottom: 3vw;
    }

    & > p {
        font-size: 1.1vw;
        font-weight: 300;
        margin-bottom: 20px;
    }

    @media only screen and (max-width: 1024px){
        & > h2 {
            font-size: 3.5vw;
            margin-bottom: 0px;
        }

        & > sub {
            font-size: 2vw;
            margin-bottom: 7vw;
        }

        & > p {
            font-size: 2.2vw;
        }
    }

`;