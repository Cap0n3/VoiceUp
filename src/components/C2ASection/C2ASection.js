import React, { useContext, useRef} from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { LangContext } from '../../App';
import { C2AContainer, ImgDiv, BoxWrapper, TextBox } from "./C2ASection.style";
import { OutlineBtn } from "../../globalStyles/globalCompStyles";
import useParallax from "../../hooks/useParallax";
import useAppear from "../../hooks/useAppear";
import { C2AData } from "../../pages/Home/data/C2ASec.data";

const C2ASection = ({transitionTime}) => {
    const containerRef = useRef(); // Get position of component in page
    const windowSize = useWindowSize();
    const {language} = useContext(LangContext);
    const parallaxOffset = useParallax(containerRef, windowSize.innerHeight);
    const isVisible = useAppear(containerRef);

    return(
        <C2AContainer ref={containerRef}>
            <ImgDiv paralOffset={parallaxOffset} width={windowSize.innerWidth} title="Tania" />
            <BoxWrapper className={isVisible ? "active" : ""} transitionTime={transitionTime}>
                <TextBox>
                    <h2>{(language === "FR") ? C2AData.titleFR : C2AData.titleEN}</h2>
                    <h3>{(language === "FR") ? C2AData.subTitleFR : C2AData.subTitleEN}</h3>
                    <p style={{marginBottom: "40px"}}>{(language === "FR") ? C2AData.descriptionFR : C2AData.descriptionEN}</p>
                    <OutlineBtn to="/inscription" style={{marginLeft: "auto", marginRight: "auto"}}>{(language === "FR") ? C2AData.buttonFR : C2AData.buttonEN}</OutlineBtn>
                </TextBox>
            </BoxWrapper>
        </C2AContainer>
    );
}

export default C2ASection;