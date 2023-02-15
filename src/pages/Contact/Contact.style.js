import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { ELEMENT_HEIGHTS } from "../../globalVars";

const DEBUG = false;

export const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: ${({winHeight}) => (winHeight ? (winHeight - ELEMENT_HEIGHTS.navbarHeight) : ELEMENT_HEIGHTS.sectionHeight)}px;
    padding: 60px 0 60px 0;
    width: 100%;
    background-color: ${VoiceUpColors.lightGrey};
    ${DEBUG ? "border: 1px solid blue;" : ""}
    overflow: hidden;
`;

export const FormContainer = styled.div`
    width: 75%;
    padding-right: 30%;
    opacity: ${({isVisible}) => (isVisible ?  1 : 0)};
    transform: ${({isVisible}) => (isVisible ?  "translateY(0)" : "translateY(120%)")};
    transition: transform .6s ease, opacity 1.5s ease;
    ${DEBUG ? "border: 1px solid orange;" : ""}

    @media only screen and (max-width: 1024px) {
        padding-right: 0;
    }
`;

export const MapsSection = styled.section`
    display: flex;
    gap: 4%;
    align-items: center;
    justify-content: center;
    min-height: ${({winHeight}) => (winHeight ? (winHeight - ELEMENT_HEIGHTS.navbarHeight) : ELEMENT_HEIGHTS.sectionHeight)}px;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 30px;
        padding: 30px 0 30px 0;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 500px;
    height: 500px;
    ${DEBUG ? "border: 1px solid orange;" : ""}
    
    & > ol {
        font-weight: 300;
    }

    & > p {
        font-weight: 300;
    }

    @media only screen and (min-width: 1024px) and (max-width: 1150px) {
        width: 400px;
    }
`;

export const MapsContainer = styled.div`
    width: 500px;
    height: 500px;
`;

export const DirectionList = styled.ol`
    padding: 10px 30px;
    background-color: ${VoiceUpColors.lightGrey};
`;