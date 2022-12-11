import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { IoIosArrowUp } from "react-icons/io";

export const ScrTopBtn = styled.button`
    position: fixed;
    width: 55px;
    height: 55px;
    bottom: 20px;
    right: 20px;
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

    @media only screen and (max-width: 1024px) {
        width: 50px;
        height: 50px;
        bottom: 15px;
        right: 15px;
    }
`;

export const UpArrow = styled(IoIosArrowUp)`
    font-size: 2em;
    fill: ${VoiceUpColors.white};
`;
