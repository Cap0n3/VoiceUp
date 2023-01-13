import { useState, useEffect, useRef, useMemo } from "react";
import { TooltipWrapper, TooltipBox } from "./Tooltip.style";

const Tooltip = ({children, content, place, size}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [contentSize, setContentSize] = useState(null);
    const childRef = useRef(null);

    /* Get child width to help center tooltip */
    useEffect(() => {
        if(childRef.current !== null) {
            setContentSize({width: childRef.current.clientWidth, height: childRef.current.clientHeight})
        }
    }, [childRef])

    return(
        <TooltipWrapper ref={childRef} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            
            {
                isHovered && 
                <TooltipBox isHovered={isHovered} contentSize={contentSize} toolTipSize={size} place={place}> 
                    {content}
                </TooltipBox>
            }
            
            <div>{children}</div>
            
        </TooltipWrapper>
    );
}

export default Tooltip