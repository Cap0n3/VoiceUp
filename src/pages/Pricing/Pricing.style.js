import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { ELEMENT_HEIGHTS } from "../../globalVars";

const DEBUG = false;

export const PricingSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    width: 100%;
    min-height: ${ELEMENT_HEIGHTS.sectionHeight + 100}px;
    padding: 60px 0 60px 0;
    overflow: hidden;
    ${DEBUG ? "background-color: lightblue;" : ""}

    @media only screen and (max-width: 1280px) {
        gap: 10px;
    }

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 30px;
    }
`;

export const TableSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: ${ELEMENT_HEIGHTS.sectionHeight}px;
    padding: 60px 0 60px 0;
    overflow: hidden;
    background-color: ${VoiceUpColors.lightGrey};
    ${DEBUG ? "background-color: lightgreen;" : ""}
`;

export const FaqSection = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: ${ELEMENT_HEIGHTS.sectionHeight}px;
    padding: 60px 0 60px 0;
    overflow: hidden;
    background-color: ${VoiceUpColors.white};
    ${DEBUG ? "background-color: CornflowerBlue;" : ""}
`;

export const FaqContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    transition: margin-top 1s ease;
    opacity: ${({isVisible}) => (isVisible ?  1 : 0)};
    transform: ${({isVisible}) => (isVisible ?  "translateY(0)" : "translateY(120%)")};
    transition: transform .6s ease, opacity 1.5s ease;
    ${DEBUG ? "border: 1px solid red;" : ""}
`;