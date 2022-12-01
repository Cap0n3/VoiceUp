import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import * as globVars from "../../globalVars";

const debug = false;

export const FormSection = styled.section`
    display: flex;
    align-items: center;
    height: ${({winHeight}) => (winHeight ? (winHeight - globVars.navbarHeight) : 800)}px;
    max-height: 1280px;
    min-height: 800px;
    width: 100%;
    padding: 50px 10% 50px 10%;
    background-color: ${VoiceUpColors.lightGrey};
    ${debug ? "border: 1px solid blue;" : ""}
    overflow: hidden;
`;

export const FormContainer = styled.div`
    width: 100%;
    padding: 10px;
    ${debug ? "border: 1px solid orange;" : ""}
`;

export const Title = styled.h1`
    font-size: 1.4em;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 50px;
    color: ${VoiceUpColors.black};
    
    @media screen and (max-width: 960px) {
        margin-bottom: 15px;
    }
`;

export const Form = styled.form`
    width: 60%;
    
    
    ${debug ? "border: 1px solid green;" : ""}

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    gap: 40px;
    width: 100%;
    margin-bottom: 20px;
    ${debug ? "border: 1px solid red;" : ""}

    @media screen and (max-width: 960px) {
        flex-direction: column;
        gap: 15px;
    }
`;

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    ${debug ? "border: 1px solid yellow;" : ""}

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
    font-size: 1em;
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
    font-size: 1em;
    outline: 0;
    padding: 10px;
`;