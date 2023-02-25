import { useState, useEffect } from "react";

/**
 * Hook to get current scroll position of page.
 *  
 * @returns     Float that represents current position. 
 */
const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset || document.documentElement.scrollTop;;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
}

export default useScroll;