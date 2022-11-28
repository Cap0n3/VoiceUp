import React, { useContext, useRef} from "react";
import { ScreenContext } from "../../contexts/screenContext";
import { ScrollContext } from "../../App";
import { LangContext } from '../../App';
import { C2AContainer, ImgDiv, BoxWrapper, TextBox } from "./C2ASection.style";
import { Button } from "../../globalStyle";
import useParallax from "../../hooks/useParallax";
import { C2AData } from "../../pages/Home/data/C2ASec.data";

const C2ASection = () => {
    const reference = useRef(); // Get position of component in page
    const scrollPos = useContext(ScrollContext);
    const screenSize = useContext(ScreenContext);
    const {language} = useContext(LangContext);
    const parallaxOffset = useParallax(reference, scrollPos, screenSize.innerHeight);

    return(
        <C2AContainer ref={reference}>
            <ImgDiv paralOffset={parallaxOffset}></ImgDiv>
            <BoxWrapper>
                <TextBox>
                    <h1>{(language === "FR") ? C2AData.titleFR : C2AData.titleEN}</h1>
                    <h2>{(language === "FR") ? C2AData.subTitleFR : C2AData.subTitleEN}</h2>
                    <p style={{marginBottom: "40px"}}>{(language === "FR") ? C2AData.descriptionFR : C2AData.descriptionEN}</p>
                    <Button style={{marginLeft: "auto", marginRight: "auto"}}>{(language === "FR") ? C2AData.buttonFR : C2AData.buttonEN}</Button>
                </TextBox>
            </BoxWrapper>
        </C2AContainer>
    );
}

export default C2ASection;