import styled, { keyframes } from "styled-components";
import { VoiceUpColors } from "../../colors";
import { ftSizes } from "../../globalVars";

// === Card size === //
const cardWidth = 380;
const cardHeight = 600;
const cardHeadHeight = cardHeight / 3;
const circleSize = 100;

// DEBUG
const DEBUG = true;

const makeSlide = keyframes`
    from {background-position: 0% 0%;}
    to {background-position: 100% 0%;}
`;

export const PCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${cardWidth}px;
    height: ${cardHeight}px;
    border-radius: 10px;
    overflow: hidden;
    z-index: 5;
    ${DEBUG ? "background-color: lightgreen;" : ""}
`;

export const CardHeader = styled.div`
    background-image: url("https://2.bp.blogspot.com/-E9_QZh1-08U/UOc0R0skSoI/AAAAAAAAB9A/ppu2Q2giHGs/s1600/Facebook-Timeline-Profile-Covers-New-York-NYC14.jpg");
    background-repeat: no-repeat;
    background-size: 150%;
    background-position: 0% 0%;
    width: 100%;
    height: ${cardHeadHeight}px;
    transition: background-position 0.6s; /* Return to position quickly */
    
    ${DEBUG ? "background-color: purple;" : ""}

    &.active {
        background-position: 60% 0%;
        transition: background-position linear 3.4s; /* Move to right slowly */
    }
`;

export const InnerCircle = styled.div`
    position: absolute;
    top: ${cardHeadHeight - (circleSize + 5)}px;
    left: ${(cardWidth - circleSize) / 2}px; /* Center circle */
    display: flex;
    border: 5px solid white;
    width: ${circleSize}px;
    height: ${circleSize}px;
    border-radius: 50px;
    background-color: ${VoiceUpColors.lightGrey};
    z-index: 10;
`;

export const CardBodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 30px 30px 30px;
    width: 100%;
    height: 100%;
`;

export const PriceTag = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${DEBUG ? "border: solid 1px blue;" : ""}

    & > h2 {
        font-size: ${ftSizes.M_ftSizeMD};
        text-transform: uppercase;
    }

    & > h1 {
        font-size: 2.9rem;
    }

`;