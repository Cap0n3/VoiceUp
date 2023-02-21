import styled from "styled-components";
import { FONT_SIZES, FONT_WEIGHTS } from "../../globalVars";

const DEBUG = false;

export const ConditionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0 60px 0;
    overflow: hidden;
    ${DEBUG ? "border: 1px solid red;" : ""}
`;

export const BlockWrapper = styled.div`
    width: 85%;
    opacity: ${({isVisible}) => (isVisible ?  1 : 0)};
    transform: ${({isVisible}) => (isVisible ?  "translateY(0)" : "translateY(120%)")};
    transition: transform .6s ease, opacity 1.5s ease;
    ${DEBUG ? "border: 1px solid yellow;" : ""}

    & > :last-child {
        margin-bottom: 0;
    }
`;

export const ConditionBlock = styled.div`
    width: 100%;
    margin-bottom:30px;
    ${DEBUG ? "background-color: lightblue;" : ""}

    & > h2 {
        margin-bottom: 10px;
        font-weight: 500;
        font-size: ${FONT_SIZES.desktopBody};
        font-weight: ${FONT_WEIGHTS.headingsWeight};
        text-transform: uppercase;
    }

    & > p {
        font-size: ${FONT_SIZES.desktopBody};
        font-weight: ${FONT_WEIGHTS.bodyWeight};
    }
    
    @media only screen and (max-width: 1024px) {
        & > h2 {
            font-size: ${FONT_SIZES.mobileBody};
        }

        & > p {
            font-size: ${FONT_SIZES.mobileBody};
        }
    }

`;