import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { elementHeights } from "../../globalVars";

const DEBUG = true;

export const ContactSection = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: ${elementHeights.sectionHeight}px;
    padding: 60px 0 60px 0;
    overflow: hidden;
    background-color: ${VoiceUpColors.white};
    ${DEBUG ? "background-color: CornflowerBlue;" : ""}
`;