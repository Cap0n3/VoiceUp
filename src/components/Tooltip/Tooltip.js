import { useState, useEffect, useRef } from "react";
import { TooltipWrapper, TooltipBox } from "./Tooltip.style";

const Tooltip = ({children}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [childWidth, setChildWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);
    const childRef = useRef(null);
    const contentRef = useRef(null);

    /* Get child width to help center tooltip */
    useEffect(() => {
        if(childRef !== null) {
            setChildWidth(childRef.current.clientWidth);
        }
    }, [childRef])

    /* Get tooltip content width to help center tooltip arrow */
    useEffect(() => {
        console.log(contentRef)
        if(contentRef !== null) {
            // setContentWidth(contentRef.current.clientWidth);
        }
    }, [contentRef])
    
    return(
        <TooltipWrapper onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            
            { isHovered && 
                <TooltipBox childWidth={childWidth} ref={contentRef}>is HOVERED !</TooltipBox>
            }
            <div ref={childRef}>{children}</div>
            
        </TooltipWrapper>
    );
}

export default Tooltip