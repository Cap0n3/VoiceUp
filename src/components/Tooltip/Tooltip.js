import { useState, useEffect, useRef } from "react";
import { TooltipWrapper, TooltipBox } from "./Tooltip.style";

const Tooltip = ({children, content}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [childWidth, setChildWidth] = useState(0);
    const childRef = useRef(null);
    const contentRef = useRef(null);

    /* Get child width to help center tooltip */
    useEffect(() => {
        if(childRef.current !== null) {
            console.log(childRef.current.clientWidth)
            setChildWidth(childRef.current.clientWidth);
        }
    }, [childRef])
    
    return(
        <TooltipWrapper onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            
            { isHovered && 
                <TooltipBox childWidth={childWidth} ref={contentRef}>{content}</TooltipBox>
            }
            <div ref={childRef}>{children}</div>
            
        </TooltipWrapper>
    );
}

export default Tooltip