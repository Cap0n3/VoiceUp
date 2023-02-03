import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { elementHeights } from "../../globalVars";

const DEBUG = false;

export const EnrollSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: ${({winHeight}) => (winHeight ? (winHeight - elementHeights.navbarHeight) : elementHeights.sectionHeight)}px;
    padding: 60px 0 60px 0;
    width: 100%;
    background-color: ${VoiceUpColors.lightGrey};
    ${DEBUG ? "border: 1px solid blue;" : ""}
    overflow: hidden;
`;

export const EnrollFormContainer = styled.div`
    width: 70%;
    /* opacity: ${({isVisible}) => (isVisible ?  1 : 0)};
    transform: ${({isVisible}) => (isVisible ?  "translateY(0)" : "translateY(120%)")};
    transition: transform .6s ease, opacity 1.5s ease; */
    ${DEBUG ? "border: 1px solid orange;" : ""}

    @media only screen and (max-width: 1024px) {
        padding-right: 0;
    }
`;