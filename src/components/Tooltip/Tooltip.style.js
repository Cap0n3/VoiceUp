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
    /* Tooltip placement */
    ${({place, childWidth}) =>
        /* Top center tooltip */
        (place === "top" && `
            left: -${childWidth * 1.5}px;
            bottom: 40px;
        `) ||
        /* HERE !!!! */
        (place === "left" && `
            left: ${childWidth + 20}px;
            top: 0;
            bottom: 0;
            height: 240px;
            margin-top: auto;
            margin-bottom: auto;
        `) ||
        "0"
    }
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