import { useState, useEffect, useRef, useMemo } from "react";
import { TooltipWrapper, TooltipBox } from "./Tooltip.style";

const Tooltip = ({children, content, place, size}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [childWidth, setChildWidth] = useState(0);
    const childRef = useRef(null);

    /* Get child width to help center tooltip */
    useEffect(() => {
        if(childRef.current !== null) {
            setChildWidth(childRef.current.clientWidth);
        }
    }, [childRef])

    return(
        <TooltipWrapper ref={childRef} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            
            {
                isHovered && 
                <TooltipBox isHovered={isHovered} childWidth={childWidth} size={size} place={place}> 
                    {content}
                </TooltipBox>
            }
            
            <div>{children}</div>
            
        </TooltipWrapper>
    );
}

export default Tooltip