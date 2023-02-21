import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { ELEMENT_HEIGHTS, FONT_SIZES, FONT_WEIGHTS } from "../../globalVars";

const DEBUG = false;

export const EnrollSection = styled.section`
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

export const EnrollFormContainer = styled.div`
    width: 70%;
    ${DEBUG ? "border: 1px solid orange;" : ""}

    @media only screen and (max-width: 1024px) {
        padding-right: 0;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    width: 70%;
    margin-bottom: 60px;
    ${DEBUG ? "border: 1px solid pink;" : ""}

    & > p {
        font-weight: ${FONT_WEIGHTS.bodyWeight};
        font-size: ${FONT_SIZES.desktopBody};

        @media only screen and (max-width: 1024px) {
            font-size: ${FONT_SIZES.mobileBody};
        }
    }
`;