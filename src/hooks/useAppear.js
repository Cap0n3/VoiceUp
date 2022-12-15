import React, { useState, useEffect, useContext } from "react";
import useWindowSize from "./useWindowSize";
import { ScrollContext } from "../App";

import { Route, Routes, useLocation } from "react-router-dom";

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
    let scrollPos = useContext(ScrollContext);
    const location = useLocation();

    useEffect(() => {
        /* On route change, re-init to 0 scroll value of context. I shouldn't be doing that but context sends updated 
        scroll position too slowly. Because of that, condition below is evaluated to true on route change and show
        appear FX based on previous position when user clicked link (even if page is scrolled back to 0 on page change).
        */ 
        scrollPos = 0;
    }, [location])

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