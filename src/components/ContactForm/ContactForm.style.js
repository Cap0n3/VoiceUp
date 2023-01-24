import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { ftSizes, elementHeights } from "../../globalVars";
import { BiErrorCircle } from "react-icons/bi";

const DEBUG = false;

export const Form = styled.form`
    width: 100%;
    ${DEBUG ? "border: 1px solid green;" : ""}

    @media only screen and (max-width: 1024px) {
        width: 100%;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    gap: 40px;
    width: 100%;
    margin-bottom: 20px;
    ${DEBUG ? "border: 1px solid red;" : ""}

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 15px;
    }
`;

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    ${DEBUG ? "border: 1px solid yellow;" : ""}

    & > label {
        color: ${VoiceUpColors.grey};
        margin-bottom: 10px;
    }
`;

export const Textarea = styled.textarea`
    box-sizing: border-box; 
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    width: 100%;
    height: 250px;
    border-radius: 6px;
    resize: none;
    overflow-y: auto;
    border: 1px solid ${VoiceUpColors.grey};
    border-radius: 10px;
    font-size: ${ftSizes.M_ftSizeSM};
    outline: 0;
    padding: 10px;
`;

export const Label = styled.label`
    color: ${VoiceUpColors.grey};
    margin-bottom: 10px;
`;

export const Input = styled.input`
    box-sizing: border-box; 
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    width: 100%;
    border: 1px solid ${VoiceUpColors.grey};
    border-radius: 10px;
    font-size: ${ftSizes.M_ftSizeSM};
    outline: 0;
    padding: 10px;
`;

export const InputError = styled.p`
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #ffecec;
    border:1px solid #f5aca6;
    font-size: ${ftSizes.XS_ftSizeMD};
    color: #555;

    & > span {
        margin-right: 5px;
        font-weight:bold;
        text-transform:uppercase;
    }
`;

export const ErrorIcon = styled(BiErrorCircle)`
    fill: red;
    font-size: 1.3em;
    margin-right: 5px;
    padding: 0;
`;