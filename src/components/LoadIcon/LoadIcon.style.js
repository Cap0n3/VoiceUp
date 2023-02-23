import styled, { keyframes } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const DEBUG = false;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const LoadIconWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 42px;
    ${DEBUG ? "border: 1px solid red;" : ""}

    @media only screen and (max-width: 1024px) {
        justify-content: center;
    }
`;

export const LoadingIcon = styled(AiOutlineLoading3Quarters)`
    fill: #8B008B;
    font-size: 1.6em;
    animation: ${rotate} 2s linear infinite;
`;