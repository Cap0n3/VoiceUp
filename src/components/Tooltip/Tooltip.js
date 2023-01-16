import { useState, useEffect, useRef, useMemo } from "react";
import { TooltipWrapper, TooltipBox } from "./Tooltip.style";

/**
 * Custom basic Tooltip component, it allows you to display a tooltip on top, right, bottom or left position.
 * ## Usage
 * 
 * ```js
 * <Tooltip content="Place tooltip content here" place="right" size={{width: 200, height: 240}} boxStyle={{fontColor: "white", bgColor: "#666"}}>
 *      <p>Hover me, I'm a Tooltip</p>
 * </Tooltip>
 * ```
 * @param   {String}    content     Text to display in tooltip.
 * @param   {String}    place       Position of tooltip. Can be top, right, bottom or left.
 * @param   {Object}    size        Size of tooltip (mandatory). Must indicate desired width and height in an object (see example).
 * @param   {Object}    boxStyle    Basic style of box (font color & background color). Object should be formatted width key 'fontColor' and 'bgColor' (see example).
 * @returns 
 */
const Tooltip = ({children, content, place, size, boxStyle}) => {
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
                <TooltipBox isHovered={isHovered} contentSize={contentSize} toolTipSize={size} place={place} boxStyle={boxStyle ? boxStyle : ""}>
                    {content}
                </TooltipBox>
            }
            
            <div>{children}</div>
            
        </TooltipWrapper>
    );
}

export default Tooltip