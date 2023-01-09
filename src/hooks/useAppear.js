import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";
import useScroll from "./useScroll";

/**
 * Custom hook allowing to indicate whether an element is visible at the bottom of the page page
 * by a set offset (like 120px or more). It's very useful to trigger an 
 * appearing effect when scolling down.
 * 
 * > **Dependency** : useScroll hook (hook that provides scroll position).
 * 
 * @param   {object}    containerRef    Element reference.
 * @param   {int}       trigOffset      Offset before triggering and return true (default=120).
 * @returns                             Booleean. Set to true when element is visible by at least x pixels at the bottom of the page.
 */
const useAppear = (containerRef, trigOffset=120, navbarHeight=0, ratio=3) => {
    const [isVisible, setIsVisible] = useState(false);
    const windowSize = useWindowSize();
    const scrollPos = useScroll();
    
    useEffect(() => {
        if(containerRef !== null && scrollPos !== null) { 
            // Scoll position at bottom of page
            const bottomScroll = scrollPos + windowSize.innerHeight;
            if(bottomScroll > (containerRef.current.offsetTop + trigOffset)){
                setIsVisible(true);
            }
        }
    }, [containerRef, scrollPos, trigOffset, windowSize]);

    return isVisible;
}

export default useAppear;