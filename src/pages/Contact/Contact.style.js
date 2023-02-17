import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { ELEMENT_HEIGHTS } from "../../globalVars";

const DEBUG = false;
const mapsBlockSize = 550;
const mobileMapsBlockSize = 350;

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
        padding: 50px 0 50px 0;
    }
`;

export const MapsContainer = styled.div`
    width: ${mapsBlockSize}px;
    height: ${mapsBlockSize}px;
    ${DEBUG ? "border: 1px solid purple;" : ""}

    @media only screen and (max-width: 1300px) and (min-width: 1024px) {
        width: ${mapsBlockSize - 80}px;
        height: ${mapsBlockSize - 80}px;
    }

    @media only screen and (max-width: 1024px) and (min-width: 400px) {
        width: ${mobileMapsBlockSize}px;
        height: ${mobileMapsBlockSize}px;
    }

    /* Narrow screen (Galaxy fold) */
    @media only screen and (max-width: 400px) {
        width: ${mobileMapsBlockSize - 50}px;
        height: ${mobileMapsBlockSize - 50}px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${mapsBlockSize}px;
    height: ${mapsBlockSize}px;
    ${DEBUG ? "border: 1px solid orange;" : ""}

    & > h2 {
        ${DEBUG ? "border: 1px solid brown;" : ""}
    }
    
    @media only screen and (max-width: 1300px) and (min-width: 1024px) {
        width: ${mapsBlockSize - 80}px;
        height: ${mapsBlockSize - 80}px;
    }

    @media only screen and (max-width: 1024px) and (min-width: 400px) {
        width: ${mobileMapsBlockSize}px;
        height: ${mobileMapsBlockSize + 150}px;
    }

    /* Narrow screen (Galaxy fold) */
    @media only screen and (max-width: 400px) {
        width: ${mobileMapsBlockSize- 50}px;
    }
`;

export const SubTitle = styled.h4`
    ${DEBUG ? "border: 1px solid green;" : ""}
`;

export const DirectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    ${DEBUG ? "border: 1px solid red;" : ""}

    @media screen and (max-width: 1300px) {
        gap: 10px; 
    }
`;

export const DirectionList = styled.ol`
    padding: 10px 30px;
    background-color: ${VoiceUpColors.lightGrey};
`;

export const ParkingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    ${DEBUG ? "border: 1px solid cyan;" : ""}

    @media only screen and (max-width: 1300px) {
        gap: 10px;
    }
`;