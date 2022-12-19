import styled from "styled-components";
import { VoiceUpColors } from "../../../colors";
import { ftSizes } from "../../../globalVars";
import { GrClose } from "react-icons/gr";

const DEBUG = true;

export const ModalBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translate(-50%, -50%);
    background-color: ${VoiceUpColors.black};
    width: 90%;
    height: 800px;
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
`;

export const VidTitle = styled.h2`
    color: ${VoiceUpColors.white};
    font-size: ${ftSizes.M_ftSizeL};
    margin-bottom: 40px;
    ${DEBUG ? "background-color: lightgreen;" : ""}
`;

export const VidDescription = styled.p`
    margin-top: 40px;
    color: ${VoiceUpColors.white};
    font-size: ${ftSizes.M_ftSizeSM};
    ${DEBUG ? "background-color: lightblue;" : ""}
`;

export const ExitButton = styled.button`
    position: absolute;
    top: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    
    
`;