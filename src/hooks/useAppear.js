import React, { useState, useEffect, useContext } from "react";
import useWindowSize from "./useWindowSize";
import { ScrollContext } from "../App";

/**
 * Custom hook allowing to indicate whether an element is visible at the bottom of the page page
 * at least a third of its total height. It's very useful to trigger an appearing effect when scolling down. 
 * 
 * @param   {object}    containerRef    Element reference.
 * @param   {*}         navbarHeight    Navbar height used to calculate "true" window height.
 * @returns                             Booleean. Set to true when element is visible by at least a third of its total height at the bottom of the page.
 */
const useAppear = (containerRef, navbarHeight=0) => {
    const [isVisible, setIsVisible] = useState(false);
    const windowSize = useWindowSize();
    const scrollPos = useContext(ScrollContext);

    useEffect(() => {
        if(containerRef !== null && scrollPos !== null) { 
            const halfContainerHeight = containerRef.current.clientHeight / 3;
            const winTrueHeight = windowSize.innerHeight - navbarHeight;
            const containerTruePos = containerRef.current.offsetTop - navbarHeight;
            
            if(containerTruePos <= (scrollPos + (winTrueHeight - halfContainerHeight))) {
                setIsVisible(true);
            }
        }
    }, [containerRef, scrollPos]);

    return isVisible;
}

export default useAppear;