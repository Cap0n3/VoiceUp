import styled from "styled-components";
import Tania2 from "../../assets/images/Tania/Tania2_medium_header.jpg";
import { VoiceUpColors } from "../../colors";

const debug = false;
const sectionHeight = 600;

export const C2AContainer = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    z-index: -1;
    ${debug ? "border: 1px solid blue;" : ""}
`;

export const ImgDiv = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: ${`url(${Tania2})`};
    background-repeat: no-repeat;
    background-size: cover;
    transform: translateZ(-10px) scale(2);
    z-index: -1;
`;

export const BoxWrapper = styled.div`
    width: 45%;
    ${debug ? "border: 1px solid pink;" : ""}
    z-index: 900;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: visible;
    overflow-wrap: break-word;
    
    & > h1 {
        text-align: center;
        color: ${VoiceUpColors.white};
        font-size: 4em;
        text-transform: uppercase;
        font-weight: normal;
        margin-bottom: 30px;
        ${debug ? "border: 1px solid red;" : ""}

        @media screen and (max-width: 960px) {
            font-size: 2.2em;
        }
    }

    & > p {
        text-align: center;
        color: ${VoiceUpColors.white};
        ${debug ? "border: 1px solid purple;" : ""}
    }
`;