import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { VoiceUpColors } from "../colors";
import { FONT_SIZES, ELEMENT_HEIGHTS, FONT_WEIGHTS } from '../globalVars';
import { BiErrorCircle, BiError } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

const DEBUG = false;

// Animations
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

// HERE (TESTING SOLUTION
export const MainContainer = styled.div`
    position: ${({pos}) => (pos === "fixed") ? "fixed" : "static"};
    top: ${({scrollPos}) => (scrollPos ? `-${scrollPos - ELEMENT_HEIGHTS.mobileNavbarHeight}px` : "")};
`;

// === Section Titles === //
export const SectionTitle = styled.h2`
    width: 100%;
    margin-bottom: 60px;
    text-transform: uppercase;
    font-size: ${FONT_SIZES.desktopSubheadings};
    font-weight: ${FONT_WEIGHTS.subheadingsWeight};

    @media only screen and (max-width: 1024px) {
        font-size: ${FONT_SIZES.mobileSubheadings};
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
    font-size: ${FONT_SIZES.desktopButton};
    font-weight: ${FONT_WEIGHTS.headingsWeight};
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
        font-size: ${FONT_SIZES.mobileButton};
    }
`;

export const FilledBtn = styled.button`
    white-space: nowrap;
    padding: 12px 60px;
    color: ${VoiceUpColors.white};
    background: ${VoiceUpColors.gold};
    border: none;
    font-size: ${FONT_SIZES.desktopButton};
    font-weight: ${FONT_WEIGHTS.headingsWeight};
    cursor: pointer;
    transition: 0.25s;

    &:hover {
        background: #d19162;
        box-shadow: 0 0.5em 0.5em -0.4em ${VoiceUpColors.black};
        transform: translateY(-0.25em);
    }

    @media only screen and (max-width: 1024px) {
        font-size: ${FONT_SIZES.mobileButton};
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
    font-size: ${FONT_SIZES.desktopBody};
    font-weight: ${FONT_WEIGHTS.bodyWeight};
    outline: 0;
    padding: 10px;

    @media only screen and (max-width: 1024px) {
        font-size: ${FONT_SIZES.mobileBody};
    }
    
`;

export const Label = styled.label`
    color: ${VoiceUpColors.grey};
    margin-bottom: 10px;
    font-size: ${FONT_SIZES.desktopBody};
    font-weight: ${FONT_WEIGHTS.bodyWeight};

    @media only screen and (max-width: 1024px) {
        font-size: ${FONT_SIZES.mobileBody};
    }
`;

export const Input = styled.input`
    width: 100%;
    border: 1px solid ${({status}) => 
        (status === "required" && "#f2c779") ||
        (status === "minLength" && "#f5aca6") ||
        (status === "maxLength" && "#f5aca6") ||
        (status === "pattern" && "#f5aca6") ||
        VoiceUpColors.grey
    };
    border-radius: 10px;
    font-size: ${FONT_SIZES.desktopBody};
    font-weight: ${FONT_WEIGHTS.bodyWeight};
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

    @media only screen and (max-width: 1024px) {
        font-size: ${FONT_SIZES.mobileBody};
    }
`;

export const Select = styled.select`
    width: 100%;
    border: 1px solid ${({status}) => 
        (status === "validate" && "#f2c779") ||
        VoiceUpColors.grey
    };
    border-radius: 10px;
    font-size: ${FONT_SIZES.desktopBody};
    font-weight: ${FONT_WEIGHTS.bodyWeight};
    background-color: ${VoiceUpColors.white};
    outline: 0;
    padding: 10px;

    @media only screen and (max-width: 1024px) {
        font-size: ${FONT_SIZES.mobileBody};
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
    font-size: ${FONT_SIZES.mobileBody};
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
    overflow: hidden;
    width: 100%;
    height: 0;
    opacity: 0;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: ${FONT_SIZES.desktopBody};
    font-weight: ${FONT_WEIGHTS.subheadingsWeight};
    background-color: ${({isSuccess}) => (isSuccess ?  "#52BE80" : "#FFCCCC")};
    transition: opacity 2s ease, height 1s ease;

    &.show {
        height: 40px;
        padding: 10px;
        opacity: 1;
        border: ${({isSuccess}) => (isSuccess ? `1px solid ${VoiceUpColors.darkGrey}` : "1px solid #FF0000")};
        transition: opacity 2s ease, height 1s ease;
    }

    @media only screen and (max-width: 1024px) {
        font-size: ${FONT_SIZES.mobileBody};
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
    font-size: ${FONT_SIZES.mobileBody};
    font-weight: ${FONT_WEIGHTS.subheadingsWeight};
    color: ${VoiceUpColors.darkGrey};
    padding: 10px;

    @media only screen and (max-width: 1024px) {
        font-size: ${FONT_SIZES.mobileBody};
    }
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
    fill: ${VoiceUpColors.darkGrey};
    font-size: 1.3em;
    min-width: 30px;
    margin-right: 5px;
`;
