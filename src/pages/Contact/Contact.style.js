import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { elementHeights } from "../../globalVars";

const DEBUG = false;

export const ContactSection = styled.section`
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

export const FormContainer = styled.div`
    width: 75%;
    padding-right: 30%;
    ${DEBUG ? "border: 1px solid orange;" : ""}

    @media only screen and (max-width: 1024px) {
        padding-right: 0;
    }
`;