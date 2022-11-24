import React, {useEffect, useState, useContext, useRef} from "react";
import { ScreenContext } from "../../contexts/screenContext";
import { ScrollContext } from "../../App";
import { C2AContainer, ImgDiv, BoxWrapper, TextBox } from "./C2ASection.style";
import { Button } from "../../globalStyle";

const C2ASection = () => {
    const reference = useRef(); // Get position of component in page
    const screenSize = useContext(ScreenContext); // Get height of screen
    const scrollPos = useContext(ScrollContext); // Get scroll position
    const [elementPosition, setElementPos] = useState(null);

    // Determine when component is visible and when it's not anymore
    useEffect(() => {
        if(elementPosition !== null) {
            const elementStartPos = elementPosition // When element is visible
            const elementEndPos = elementPosition + screenSize.innerHeight + 600 // When element is not visible
            // console.log(scrollPos + " : " + elementPosition)
            if (scrollPos > elementStartPos && scrollPos < elementEndPos) {
                console.log("Element is visible !")
            }
            else if (scrollPos > elementEndPos) {
                console.log("Element is not visible !")
            }
        }
    }, [scrollPos])
    
    useEffect(() => {
        // Set raw position of component in page
        const rawElPosition = reference.current.offsetTop;
        // Determine exact start position of component 
        setElementPos(rawElPosition - screenSize.innerHeight)
    }, [screenSize])

    return(
        <C2AContainer ref={reference}>
            <ImgDiv></ImgDiv>
            <BoxWrapper>
                <TextBox>
                    <h1>Progressez à votre rythme</h1>
                    <p style={{marginBottom: "40px"}}>Des cours adaptés aux besoins de chacuns, donnés par Tania, une professeures de chat certifiée avec plus de 30 ans d’expérience vocale.</p>
                    <Button style={{marginLeft: "auto", marginRight: "auto"}}>Réservez un cours</Button>
                </TextBox>
            </BoxWrapper>
        </C2AContainer>
    );
}

export default C2ASection;