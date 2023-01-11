import styled from "styled-components";

export const TooltipWrapper = styled.div`
    position: relative;
`;

export const TooltipBox = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    padding: 15px;
    width: 200px;
    border-radius: 10px;
    color: white;
    bottom: 40px;
    /* Top center tooltip */
    left: -${({childWidth}) => (childWidth * 1.5)}px;
    z-index: 900;

    &:after {
        content: " ";
        position: absolute;
        display: block;
        left: 90px; 
        bottom: -10px;
        border-top: 10px solid black;
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
        border-bottom: none;
    }
`;