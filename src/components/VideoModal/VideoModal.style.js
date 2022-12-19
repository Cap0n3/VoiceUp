import styled from "styled-components";
import { VoiceUpColors } from "../../colors";

export const VideoThumbnail = styled.button`
    display: block;
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