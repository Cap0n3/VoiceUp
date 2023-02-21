import styled, { keyframes } from "styled-components";
import { VoiceUpColors } from "../../colors";
import { FONT_SIZES } from "../../globalVars";

// === Card size === //
const cardWidthPercent = 26;
const cardWidthMobilePercent = 65;
const cardHeight = 600;
const cardHeadHeight = cardHeight / 3;
const circleSize = 100;
const circleIconHeight = 30;

// DEBUG
const DEBUG = false;

// === Animations === //
const launch = keyframes`
    0%{left:1px;}
    25%{top:-150px;left:1px}
    50%{left:-200px;}
    75%{top:100px;transform:rotate(40deg)}
    100%{left:1px}
`;

const jump = keyframes`
    from {transform:rotate(0deg)}
    50% {top: -20px;}
    to {transform:rotate(-360deg); top: 0px}
`;

const spin = keyframes`
    0%{transform:rotate(0deg)}
    100%{transform:rotate(720deg)}
`;

// === Card Styles === //
export const CardContainer = styled.div`
    width: ${cardWidthPercent}%;
    min-width: 300px;
    height: ${cardHeight}px;
    overflow: hidden;
    ${DEBUG ? "border: 1px solid green;" : ""}

    @media screen and (max-width: 1024px) {
        width: ${cardWidthMobilePercent}%;
    }

    @media screen and (max-width: 691px) {
        width: 90%;
    }
`;

export const PCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 100%;
    width: 100%;
    height: ${cardHeight}px;
    border-radius: 5px;
    box-shadow: 0px 17px 46px -10px #777777;
    background-image: ${({colors}) => `linear-gradient(45deg, ${colors[0]} 0%, ${colors[1]} 100%)`};
    overflow: hidden;
    z-index: 5;
    opacity: 0;
    transition: margin-top 600ms ease, opacity 2000ms ease;
    ${DEBUG ? "background-color: lightgreen;" : ""}

    &.active {
        opacity: 1;
        margin-top: 0;
    }
`;

export const CardHeader = styled.div`
    background-image: url(${({headerImg}) => headerImg});
    background-color: ${VoiceUpColors.black};
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
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    border: 5px solid white;
    width: ${circleSize}px;
    height: ${circleSize}px;
    border-radius: 50px;
    background-color: ${VoiceUpColors.lightGrey};
    overflow: hidden;
    z-index: 10;
`;

export const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    height: ${circleIconHeight}px;
    ${DEBUG ? "border: solid 1px yellow;" : ""}

    &.active {
        animation: ${({animIcon}) => 
            (animIcon === "rocket" && launch) ||
            (animIcon === "turtle" && jump) ||
            (animIcon === "gear" && spin) ||
            ""
        } 1s forwards;
    }
`;

export const CardBodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 70px 40px 0px 40px;
    width: 100%;
    height: 100%;
`;

export const PriceTag = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${DEBUG ? "border: solid 1px blue;" : ""}

    & > h3 {
        color: rgba(255, 255, 255, 0.64);
        font-size: ${FONT_SIZES.desktopBody};
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    & > h2 {
        color: ${VoiceUpColors.white};
        font-size: ${FONT_SIZES.desktopSubheadings};
        text-transform: uppercase;
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
    }
`;

export const ListWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 180px;
    padding-left: 10%;
    overflow-y: auto;
    ${DEBUG ? "border: 1px solid pink;" : ""}
`;

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    ${DEBUG ? "border: solid 1px blue;" : ""}
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 300;
    font-size: ${FONT_SIZES.priceCardList};
    ${DEBUG ? "background-color: purple;" : ""}
`;

export const Sub = styled.span`
    color: rgba(255, 255, 255, 0.64);;
    font-weight: 300;
    font-size: ${FONT_SIZES.mobileBody};
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
`;
