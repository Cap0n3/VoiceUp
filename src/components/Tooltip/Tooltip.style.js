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
    width: ${({size}) => size.width}px;
    border-radius: 10px;
    color: white;
    /* Tooltip placement */
    ${({place, childWidth, size}) =>
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
            height: ${size.height}px;
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
        ${({place, size}) => 
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
                top: ${(size.height / 2) - 5}px;
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