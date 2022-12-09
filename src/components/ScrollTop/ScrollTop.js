import { useState, useEffect, useContext } from "react";
import { ScrollContext } from "../../App";
import { ScrTopBtn, UpArrow } from "./ScrollTop.style";

const ScrollTop = ({containerRef}) => {
    const [showScrollBtn, setScrollBtn] = useState(false);
    const scrollPos = useContext(ScrollContext);

    /**
     * Scrool back to top of page.
     * 
     * > **Note :** must give reference of scrollable container and not window.
     */
    const handleClick = () => {
        containerRef.current.scroll({
            top: 0,
            behavior: "smooth"
        });     
    }

    useEffect(() => {
        if(scrollPos > 800) {
            setScrollBtn(true);
        } else {
            setScrollBtn(false);
        }
        
    }, [scrollPos])

    return(
        <>
            
            <ScrTopBtn className={showScrollBtn ? "active" : ""} onClick={handleClick}><UpArrow /></ScrTopBtn>
            
        </>
       
    );
}

export default ScrollTop;