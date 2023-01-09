import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";
import useScroll from "./useScroll";

/**
 * Custom hook allowing to indicate whether an element is visible at the bottom of the page page
 * at least a third of its total height (ration is customizable). It's very useful to trigger an 
 * appearing effect when scolling down.
 * 
 * > **Dependency** : useScroll hook (hook that provides scroll position).
 * 
 * @param   {object}    containerRef    Element reference.
 * @param   {int}       navbarHeight    Navbar height used to calculate "true" window height.
 * @param   {int}       ratio           Ratio of element visibility, when it's reached it returns true (default value 3, a third of container height).
 * @returns                             Booleean. Set to true when element is visible by at least a third of its total height at the bottom of the page.
 */
const useAppear = (containerRef, navbarHeight=0, ratio=3) => {
    const [isVisible, setIsVisible] = useState(false);
    const windowSize = useWindowSize();
    const scrollPos = useScroll();
    

    useEffect(() => {
        if(containerRef !== null && scrollPos !== null) { 
            const halfContainerHeight = containerRef.current.clientHeight / ratio;
            const winTrueHeight = windowSize.innerHeight - navbarHeight;
            const containerTruePos = containerRef.current.offsetTop - navbarHeight;
            
            if(containerTruePos <= (scrollPos + (winTrueHeight - halfContainerHeight))) {
                setIsVisible(true);
            }
        }
    }, [containerRef, scrollPos, navbarHeight, ratio, windowSize]);

    return isVisible;
}

export default useAppear;