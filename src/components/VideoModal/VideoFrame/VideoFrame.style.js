import styled from "styled-components";
import { VoiceUpColors } from "../../../colors";

export const VidWrapper = styled.div`
    position: relative;
    padding-bottom: 50%;
    padding-top: 35px; 
    height: 0; 
    overflow: hidden;   /* optional */
    background-color: ${VoiceUpColors.lightGrey}; /* optional */

    & > iframe, & > object, & > embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;