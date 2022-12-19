import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { ImPlay } from "react-icons/im";

export const VideoThumbnail = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${({imgSRC}) => `url(${imgSRC})`};
    background-size: 100%;
    background-color: ${VoiceUpColors.black};
    cursor: pointer;
    /* 16:9 ratio */
    width: ${({width}) => (width ? `${width}px` : "33%")};
    height: ${({width}) => (width ? `${width / 1.77}px` : "19%")};;
    border: 0;
    outline:0;
`;

export const PlayButton = styled(ImPlay)`
    fill: white;
    opacity: 0.7;
    font-size: 5em;
`;