import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { VoiceUpColors } from "../colors";
import { FONT_SIZES, ELEMENT_HEIGHTS } from '../globalVars';
import { BiErrorCircle, BiError } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

const DEBUG = false;

const pulse = keyframes`
    from {
        box-shadow: 0 0 0 0 #D9B47D;
    }
`;

// TODO - Not used yet
export const BaseContainer = styled.section`
    width: 100%;
    height: ${({height}) => (height ? height : ELEMENT_HEIGHTS.sectionHeight)}px;
    max-height: 1280px;
    min-height: 300px;
`;

// === Section Titles === //
export const SectionTitle = styled.h1`
    width: 100%;
    margin-bottom: 60px;
    text-transform: uppercase;
    font-size: ${FONT_SIZES.M_ftSizeL};

    @media only screen and (max-width: 1024px) {
        font-size: ${FONT_SIZES.S_ftSizeL};
    }
`;

// === BUTTONS === //
// For more cool button FX : https://alvarotrigo.com/blog/best-css-button-hover-effects/
export const OutlineBtn = styled(NavLink)`
    position: relative;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap; 
    height: 44px;
    max-width: 250px;
    min-width: 200px;
    color: ${VoiceUpColors.white};
    font-size: ${FONT_SIZES.M_ftSizeMD};
    outline: none;
    background: none;
    text-decoration: none;
    border: 2px solid ${VoiceUpColors.white};
    cursor: pointer;
    transition: 0.25s;

    &:hover {
        border-color: ${VoiceUpColors.gold};
        animation: ${pulse} 1s;
        box-shadow: 0 0 0 2em rgba(255,255,255, 0);
    }
    
    @media only screen and (max-width: 1024px) {
        width: 100%;
        padding: 12px 30px;
    }
`;

export const FilledBtn = styled.button`
    white-space: nowrap;
    padding: 12px 60px;
    color: ${VoiceUpColors.white};
    background: ${VoiceUpColors.gold};
    border: none;
    font-size: ${FONT_SIZES.M_ftSizeMD};
    cursor: pointer;
    transition: 0.25s;

    &:hover {
        background: #d19162;
        box-shadow: 0 0.5em 0.5em -0.4em ${VoiceUpColors.black};
        transform: translateY(-0.25em);
    }
`;

// === SCROLL TOP BOX === //
export const ScrollTop = styled.div`
    position: fixed;
    bottom: 60px;
    right: 60px;
    width: 80px;
    height: 80px;
    background-color: red;
    z-index: 999;
`;

// === FORMS === //
export const Form = styled.form`
    width: 100%;
    ${DEBUG ? "border: 1px solid green;" : ""}

    @media only screen and (max-width: 1024px) {
        width: 100%;
    }
`;

export const InputsContainer = styled.div`
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

export const InputWrapper = styled.div`
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
    font-size: ${FONT_SIZES.M_FONT_SIZESM};
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
    font-size: ${FONT_SIZES.M_FONT_SIZESM};
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

export const Select = styled.select`
    width: 100%;
    border: 1px solid ${({status}) => 
        (status === "required" && "#f2c779") ||
        (status === "minLength" && "#f5aca6") ||
        (status === "maxLength" && "#f5aca6") ||
        (status === "pattern" && "#f5aca6") ||
        VoiceUpColors.grey
    };
    border-radius: 10px;
    font-size: ${FONT_SIZES.M_FONT_SIZESM};
    background-color: ${VoiceUpColors.white};
    outline: 0;
    padding: 10px;
`;

export const InputError = styled.p`
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: ${({status}) => (status === "warn" ? "#fff8c4" : "#ffecec")};
    border: ${({status}) => (status === "warn" ? "1px solid #f2c779" : "1px solid #f5aca6")};
    font-size: ${FONT_SIZES.XS_ftSizeMD};
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

export const MessageStatusBox = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    height: 0;
    overflow: hidden;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 10px;
    font-size: ${FONT_SIZES.M_FONT_SIZESM};
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

    @media only screen and (max-width: 1024px) {
        font-size: ${FONT_SIZES.S_FONT_SIZESM};
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
    font-size: ${FONT_SIZES.M_FONT_SIZESM};
    color: ${VoiceUpColors.darkGrey};
    padding: 10px;

    @media only screen and (max-width: 1024px) {
        font-size: ${FONT_SIZES.S_FONT_SIZESM};
    }
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
    fill: ${VoiceUpColors.darkGrey};
    font-size: 1.3em;
    min-width: 30px;
    margin-right: 5px;
`;