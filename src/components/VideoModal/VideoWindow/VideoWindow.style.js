import styled from "styled-components";
import { VoiceUpColors } from "../../../colors";
import { FONT_SIZES } from "../../../globalVars";
import { IoCloseCircleOutline } from "react-icons/io5";

const DEBUG = false;

export const ModalBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translate(-50%, -50%);
    background-color: ${VoiceUpColors.black};
    width: 70%;
    padding: 80px;
    z-index: 1000;

    @media only screen and (max-width: 1024px) {
        padding: 80px;
        width: 90%;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    overflow-y: auto;
`;

// export const VidTitle = styled.h2`
//     color: ${VoiceUpColors.white};
//     font-size: ${FONT_SIZES.M_ftSizeL};
//     margin-bottom: 40px;
//     ${DEBUG ? "background-color: lightgreen;" : ""}
// `;

export const VidDescription = styled.p`
    margin-top: 40px;
    color: ${VoiceUpColors.white};
    font-size: ${FONT_SIZES.M_FONT_SIZESM};
    max-height: 100px;
    overflow-y: auto;
    ${DEBUG ? "background-color: lightblue;" : ""}
`;

export const ExitButton = styled(IoCloseCircleOutline)`
    position: absolute;
    top: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    font-size: 1.5em;
    cursor: pointer;
    stroke: white;
    
`;