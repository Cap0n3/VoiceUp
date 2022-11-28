import React, {useEffect, useState, useContext, useRef} from "react";
import { ScreenContext } from "../../contexts/screenContext";
import { ScrollContext } from "../../App";
import { C2AContainer, ImgDiv, BoxWrapper, TextBox } from "./C2ASection.style";
import { Button } from "../../globalStyle";
import useParallax from "../../hooks/useParallax";

const C2ASection = () => {
    const reference = useRef(); // Get position of component in page
    const scrollPos = useContext(ScrollContext);
    const screenSize = useContext(ScreenContext);
    const parallaxOffset = useParallax(reference, scrollPos, screenSize.innerHeight);

    return(
        <C2AContainer ref={reference}>
            <ImgDiv paralOffset={parallaxOffset}></ImgDiv>
            {/* <BoxWrapper>
                <TextBox>
                    <h1>Progressez à votre rythme</h1>
                    <p style={{marginBottom: "40px"}}>Des cours adaptés aux besoins de chacuns, donnés par Tania, une professeures de chat certifiée avec plus de 30 ans d’expérience vocale.</p>
                    <Button style={{marginLeft: "auto", marginRight: "auto"}}>Réservez un cours</Button>
                </TextBox>
            </BoxWrapper> */}
        </C2AContainer>
    );
}

export default C2ASection;