import styled from "styled-components";
import { elementHeights } from "../../globalVars";
import { VoiceUpColors } from "../../colors";

const DEBUG = false;

export const SliderContainer = styled.div`
    width: 100%;
    height: ${({winHeight}) => (winHeight ? (winHeight - elementHeights.navbarHeight) : elementHeights.sectionHeight)}px;
    max-height: 1280px;
    min-height: 300px;

    @media only screen and (max-width: 1024px) {
        height: ${({winHeight}) => (winHeight ? (winHeight - elementHeights.mobileNavbarHeight) : elementHeights.sectionHeight)}px;
    }
`;

export const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: ${({winHeight}) => (winHeight ? (winHeight - elementHeights.navbarHeight) : elementHeights.sectionHeight)}px;
    /* max-height: 1280px; */
    padding: 60px 0 60px 0;
    /* min-height: 800px; */
    width: 100%;
    background-color: ${VoiceUpColors.lightGrey};
    ${DEBUG ? "border: 1px solid blue;" : ""}
    overflow: hidden;
`;

export const FormContainer = styled.div`
    width: 75%;
    padding-right: 30%;
    opacity: ${({isVisible}) => (isVisible ?  1 : 0)};
    transform: ${({isVisible}) => (isVisible ?  "translateY(0)" : "translateX(120%)")};
    transition: transform .6s ease, opacity 2s ease;
    ${DEBUG ? "border: 1px solid orange;" : ""}

    @media only screen and (max-width: 1024px) {
        padding-right: 0;
    }
`;