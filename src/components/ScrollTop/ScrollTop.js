import { useState, useEffect } from "react";
import { ScrTopBtn, UpArrow } from "./ScrollTop.style";
import useScroll from "../../hooks/useScroll";

const ScrollTop = () => {
    const [showScrollBtn, setScrollBtn] = useState(false);
    const scrollPosition = useScroll();

    /**
     * Scrool back to top of page.
     */
    const handleClick = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        if(scrollPosition > 600) {
            setScrollBtn(true);
        } else {
            setScrollBtn(false);
        }
        
    }, [scrollPosition])

    return(
        <>
            
            <ScrTopBtn className={showScrollBtn ? "active" : ""} onClick={handleClick}><UpArrow /></ScrTopBtn>
            
        </>
       
    );
}

export default ScrollTop;