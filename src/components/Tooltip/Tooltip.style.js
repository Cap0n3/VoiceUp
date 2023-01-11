import styled from "styled-components";

export const TooltipWrapper = styled.div`
    position: relative;
`;

export const TooltipBox = styled.div`
    position: absolute;
    padding: 20px 15px 20px 15px;
    background-color: black;
    border-radius: 10px;
    color: white;
    top: -110px;
    left: -${({childWidth}) => (childWidth / 2)}px;
    z-index: 900;

    &:after {
        content: " ";
        position: absolute;
        width: 10px;
        left: 0; 
        right: 0;
        bottom: -5px;
        margin-right: auto;
        margin-left: auto;
        border-top: 5px solid red;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        border-bottom: none;
    }
`;