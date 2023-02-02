import styled, { keyframes } from 'styled-components';
import { VoiceUpColors } from "../colors";
import { ftSizes, elementHeights } from '../globalVars';

const pulse = keyframes`
    from {
        box-shadow: 0 0 0 0 #D9B47D;
    }
`;

// TODO - Not used yet
export const BaseContainer = styled.section`
    width: 100%;
    height: ${({height}) => (height ? height : elementHeights.sectionHeight)}px;
    max-height: 1280px;
    min-height: 300px;
`;

// Section Titles
export const SectionTitle = styled.h1`
    width: 100%;
    margin-bottom: 60px;
    text-transform: uppercase;
    font-size: ${ftSizes.M_ftSizeL};

    @media only screen and (max-width: 1024px) {
        font-size: ${ftSizes.S_ftSizeL};
    }
`;


// For more cool button FX : https://alvarotrigo.com/blog/best-css-button-hover-effects/
export const OutlineBtn = styled.button`
    white-space: nowrap;
    padding: 12px 60px;
    max-width: 250px;
    color: ${VoiceUpColors.white};
    font-size: ${ftSizes.M_ftSizeMD};
    outline: none;
    background: none;
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

export const FilledBtn =  styled.button`
    white-space: nowrap;
    padding: 12px 60px;
    color: ${VoiceUpColors.white};
    background: ${VoiceUpColors.gold};
    border: none;
    font-size: ${ftSizes.M_ftSizeMD};
    cursor: pointer;
    transition: 0.25s;

    &:hover {
        background: #d19162;
        box-shadow: 0 0.5em 0.5em -0.4em ${VoiceUpColors.black};
        transform: translateY(-0.25em);
    }
`;

export const ScrollTop = styled.div`
    position: fixed;
    bottom: 60px;
    right: 60px;
    width: 80px;
    height: 80px;
    background-color: red;
    z-index: 999;
`;

