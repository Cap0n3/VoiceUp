import styled from "styled-components";
import { FONT_SIZES } from "../../globalVars";

const DEBUG = false;

export const ConditionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
    overflow: hidden;
    ${DEBUG ? "border: 1px solid red;" : ""}
`;

export const BlockWrapper = styled.div`
    width: 100%;
    opacity: ${({isVisible}) => (isVisible ?  1 : 0)};
    transform: ${({isVisible}) => (isVisible ?  "translateY(0)" : "translateY(120%)")};
    transition: transform .6s ease, opacity 1.5s ease;
    ${DEBUG ? "border: 1px solid yellow;" : ""}

    & > :last-child {
        margin-bottom: 0;
    }
`;

export const ConditionTitle = styled.h1`
    width: 80%;
    margin: 60px 0 60px 0;
    text-transform: uppercase;
    font-size: ${FONT_SIZES.M_ftSizeL};
    ${DEBUG ? "background-color: lightgreen;" : ""}

    @media only screen and (max-width: 1024px) {
        font-size: ${FONT_SIZES.S_ftSizeL};
    }
`;

export const ConditionBlock = styled.div`
    width: 80%;
    margin-bottom:30px;
    ${DEBUG ? "background-color: lightblue;" : ""}

    & > h2 {
        margin-bottom: 10px;
        font-weight: 500;
        font-size: ${FONT_SIZES.M_ftSizeL_alt};
        text-transform: uppercase;
    }

    & > p {
        font-weight: 300;
        font-size: ${FONT_SIZES.M_ftSizeMD};
    }
    
    @media only screen and (max-width: 1024px) {
        & > h2 {
            font-size: ${FONT_SIZES.S_ftSizeMD};
        }

        & > p {
            font-size: ${FONT_SIZES.S_FONT_SIZESM};
        }
    }

`;