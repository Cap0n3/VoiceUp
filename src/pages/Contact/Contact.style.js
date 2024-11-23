import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { ELEMENT_HEIGHTS, FONT_SIZES, FONT_WEIGHTS } from "../../globalVars";

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
    max-width: 1200px;
    min-width: 280px;
    /* padding-right: 30%; */
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
    min-height: 700px;
    
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
        font-size: ${FONT_SIZES.desktopSubheadings};
        font-weight: ${FONT_WEIGHTS.headingsWeight};
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
    font-size: ${FONT_SIZES.mobileBody};
    font-weight: ${FONT_WEIGHTS.headingsWeight};
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

    & > li {
        font-weight: ${FONT_WEIGHTS.bodyWeight};
        font-size: ${FONT_SIZES.mobileBody};
    }
`;

export const ParkingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: ${FONT_SIZES.mobileBody};
    font-weight: ${FONT_WEIGHTS.bodyWeight};
    ${DEBUG ? "border: 1px solid cyan;" : ""}

    @media only screen and (max-width: 1300px) {
        gap: 10px;
    }
`;

export const AddressSection = styled.section`
    display: flex;
    width: 100%;
    min-height: 200px;
    justify-content: center;
    align-items: flex-start;
    
    ${DEBUG ? "background-color: lightgreen;" : ""}
`;

export const InfoBlockWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 4%;
    justify-content: center;
    align-items: center;
    ${DEBUG ? "border: 1px solid yellow;" : ""}

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 10px; 
    }
`;

export const InfoBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 80px;
    background-color: ${VoiceUpColors.lightGrey};
    font-size: ${FONT_SIZES.mobileBody};
    width: ${mapsBlockSize}px;
    overflow: hidden;

    ${DEBUG ? "border: 1px solid brown;" : ""}

    & > h4, p {
      ${DEBUG ? "border: 1px solid green;" : ""}
    }

    & > h4 {
        font-weight: ${FONT_WEIGHTS.subheadingsWeight};
    }

    & > p {
        text-align: center;
        font-weight: ${FONT_WEIGHTS.bodyWeight};
    }

    @media only screen and (max-width: 1300px) and (min-width: 1024px) {
        width: ${mapsBlockSize - 80}px;
    }

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        width: ${mobileMapsBlockSize}px;
    }

    /* Narrow screen (Galaxy fold) */
    @media only screen and (max-width: 400px) {
        width: ${mobileMapsBlockSize- 50}px;
    }
`;