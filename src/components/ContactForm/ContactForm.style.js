import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { ftSizes } from "../../globalVars";
import { BiErrorCircle, BiError } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

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
    border: 1px solid ${({status}) => 
        (status === "required" && "#f2c779") ||
        (status === "minLength" && "#f5aca6") ||
        (status === "maxLength" && "#f5aca6") ||
        (status === "pattern" && "#f5aca6") ||
        VoiceUpColors.grey
    };
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
    border: 1px solid ${({status}) => 
        (status === "required" && "#f2c779") ||
        (status === "minLength" && "#f5aca6") ||
        (status === "maxLength" && "#f5aca6") ||
        (status === "pattern" && "#f5aca6") ||
        VoiceUpColors.grey
    };
    border-radius: 10px;
    font-size: ${ftSizes.M_ftSizeSM};
    outline: 0;
    padding: 10px;

    // Remove autofill background color
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px ${VoiceUpColors.white} inset !important;
        box-shadow: 0 0 0 30px ${VoiceUpColors.white} inset !important;
    }
`;

export const InputError = styled.p`
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: ${({status}) => (status === "warn" ? "#fff8c4" : "#ffecec")};
    border: ${({status}) => (status === "warn" ? "1px solid #f2c779" : "1px solid #f5aca6")};
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

export const WarnIcon = styled(BiError)`
    fill: orange;
    font-size: 1.3em;
    margin-right: 5px;
    padding: 0;
`;

export const ConfirmMsgBox = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    height: 0;
    overflow: hidden;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: ${ftSizes.M_ftSizeSM};
    border: ${({status}) => (status === "error" ? "1px solid #f2c779" : `1px solid ${VoiceUpColors.grey}`)};
    background-color: ${({status}) =>
        (status === "success" && "#52BE80") ||
        (status === "warn" && "#fff8c4") ||
        (status === "error" && "#ffecec") ||
        "white"
    };
    transition: opacity, height 800ms ease;

    &.show {
        height: 40px;
        opacity: 1;
    }   
`;

export const InscriptionNote = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
    border: 1px solid ${VoiceUpColors.darkGrey};
    font-size: ${ftSizes.M_ftSizeSM};
    color: ${VoiceUpColors.darkGrey};
    padding: 15px 0 15px 0;

    @media only screen and (max-width: 1024px) {
        font-size: ${ftSizes.S_ftSizeSM};
    }
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
    fill: ${VoiceUpColors.darkGrey};
    font-size: 1.3em;
    min-width: 30px;
    margin-right: 5px;
`;