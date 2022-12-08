import { useState, useEffect, useContext } from "react";
import { ScrollContext } from "../../App";

const ScrollTop = () => {
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

    const handleClick = () => {
        console.log(scrollPos)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        // document.body.scrollTo(0, 0);
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