import styled from "styled-components";
import { VoiceUpColors } from "../../colors";

const debug = true;
const sectionHeight = 600;

export const FormSection = styled.section`
    display: flex;
    align-items: center;
    height: ${({winHeight}) => (winHeight ? (winHeight - 80) : "600")}px;
    max-height: 1280px;
    min-height: 800px;
    width: 100%;
    padding: 50px 10% 50px 10%;
    background-color: ${VoiceUpColors.lightGrey};
    ${debug ? "border: 1px solid blue;" : ""}
    overflow: hidden;

    @media screen and (max-width: 960px) {
        
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    ${debug ? "border: 1px solid orange;" : ""}
`;

export const Title = styled.h1`

`;

export const Form = styled.form`
    width: 60%;
    padding: 10px;
    
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
        margin-bottom: 10px;
    }

    & > input {
        border-radius: 6px;
        height: 30px;
    }
`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 250px;
    border-radius: 6px;
    resize: none;
    overflow-y: auto;
`;
