import styled from "styled-components";

export const TooltipWrapper = styled.div`
    position: relative;
`;

export const TooltipBox = styled.div`
    position: absolute;
    display: ${({isHovered}) => (isHovered ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    background-color: black;
    padding: 15px;
    width: ${({toolTipSize}) => toolTipSize.width}px;
    border-radius: 10px;
    color: white;
    /* Tooltip placement */
    ${({place, contentSize, toolTipSize}) =>
        /* Top center tooltip */
        (place === "top" && `
            width: ${toolTipSize.width}px;
            left: ${(contentSize.width / 2) - (toolTipSize.width / 2)}px;
            bottom: ${contentSize.height + 15}px;
        `) ||
        /* HERE !!!! */
        (place === "left" && `
            left: ${contentSize.width + 20}px;
            top: 0;
            bottom: 0;
            height: ${toolTipSize.height}px;
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
        ${({place, toolTipSize}) => 
            (place === "top" && `
                left: 90px; 
                bottom: -10px;
                border-top: 10px solid black;
                border-right: 10px solid transparent;
                border-left: 10px solid transparent;
                border-bottom: none;
            `) ||
            (place === "left" && `
                left: -15px;
                top: ${(toolTipSize.height / 2) - 5}px;
                border-top: 10px solid black;
                border-right: 10px solid transparent;
                border-left: 10px solid transparent;
                border-bottom: none;
                transform: rotate(0.25turn);
            `) ||
            "0"
        }
    }
`