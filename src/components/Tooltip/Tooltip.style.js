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
    width: ${({toolTipSize}) => (toolTipSize.width)}px;
    border-radius: 10px;
    color: white;
    /* Tooltip placement */
    ${({place, contentSize, toolTipSize}) =>
        /* Tooltip positions */
        (place === "top" && `
            bottom: ${contentSize.height + 15}px;
            width: ${toolTipSize.width}px;
            left: ${(contentSize.width / 2) - (toolTipSize.width / 2)}px;
        `) ||
        (place === "right" &&`
            left: ${contentSize.width + 20}px;
            top: 0;
            bottom: 0;
            height: ${toolTipSize.height}px;
            margin-top: auto;
            margin-bottom: auto;
        `) ||
        (place === "bottom" &&`
            top: ${contentSize.height + 15}px;
            width: ${toolTipSize.width}px;
            left: ${(contentSize.width / 2) - (toolTipSize.width / 2)}px;    
        `) ||
        (place === "left" && `
            right: ${contentSize.width + 20}px;
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
            /* Arrow position */
            (place === "top" && `
                bottom: -10px;
                left: 90px;
                border-top: 10px solid black;
                border-right: 10px solid transparent;
                border-left: 10px solid transparent;
                border-bottom: none;
            `) ||
            (place === "right" &&`
                top: ${(toolTipSize.height / 2) - 5}px;
                left: -15px;
                border-top: 10px solid black;
                border-right: 10px solid transparent;
                border-left: 10px solid transparent;
                border-bottom: none;
                transform: rotate(0.25turn);
            `)
            ||
            (place === "bottom" &&`
                top: -10px;
                left: 90px; 
                border-top: 10px solid black;
                border-right: 10px solid transparent;
                border-left: 10px solid transparent;
                border-bottom: none;
                transform: rotate(0.5turn);
            `) ||
            (place === "left" && `
                top: ${(toolTipSize.height / 2) - 5}px;
                right: -15px;
                border-top: 10px solid black;
                border-right: 10px solid transparent;
                border-left: 10px solid transparent;
                border-bottom: none;
                transform: rotate(-0.25turn);
            `) ||
            "0"
        }
    }
`