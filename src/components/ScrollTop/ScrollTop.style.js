import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { IoIosArrowUp } from "react-icons/io";

export const ScrTopBtn = styled.button`
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 50px;
    right: 50px;
    border: 0;
    border-radius: 50px;
    background-color: ${VoiceUpColors.gold};
    cursor: pointer;
    z-index: 999;
    opacity: 0;
    transition: all 350ms ease;

    &.active {
        opacity: 1;
    }

    @media screen and (max-width: 960px) {
        width: 50px;
        height: 50px;
        bottom: 30px;
        right: 30px;
    }
`;

export const UpArrow = styled(IoIosArrowUp)`
    font-size: 2em;
    fill: ${VoiceUpColors.white};
`;
