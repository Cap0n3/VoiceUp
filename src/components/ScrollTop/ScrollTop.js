import { useState, useEffect, useContext } from "react";
import { ScrollContext } from "../../App";

const ScrollTop = ({containerRef}) => {
    const [showScrollBtn, setScrollBtn] = useState(false);
    const scrollPos = useContext(ScrollContext);

    const btnStyle = {
        position: "fixed",
        bottom: "80px",
        right: "60px",
        width: "60px",
        height: "60px",
        zIndex: "1"
    }

    /**
     * Scrool back to top of page.
     * 
     * > **Note :** must give reference of scrollable container and not window.
     */
    const handleClick = () => {
        console.log(scrollPos)
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
            {
                showScrollBtn && <button style={btnStyle} onClick={handleClick}>^</button>
            }
        </>
       
    );
}

export default ScrollTop;