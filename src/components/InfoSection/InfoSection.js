import React, { useContext, useRef } from "react";
import { LangContext } from '../../App';
import { SectionWrapper, ImgContainer, CardContainer, ImageDiv, Card, TextDiv } from "./InfoSection.style";
import { navbarHeight } from "../../globalVars";
import useAppear from "../../hooks/useAppear";

const InfoSection = (props) => {
    
    const {language} = useContext(LangContext);
    const containerRef = useRef(null);
    const isVisible = useAppear(containerRef, navbarHeight);
    
    return(
        <SectionWrapper direction={props.data.direction} ref={containerRef}>
            <ImgContainer>
                <ImageDiv imgSRC={props.data.image} className={isVisible ? "active" : ""} title={props.data.imgTitle} direction={props.data.direction} transitionTime={props.transitionTime}></ImageDiv>
            </ImgContainer>
            <CardContainer>
                <Card className={isVisible ? "active" : ""} direction={props.data.direction} transitionTime={props.transitionTime}>
                    <TextDiv>
                        {props.data.icon ? props.data.icon : ""}
                        <h1>{(language === "FR") ? props.data.titleFR : props.data.titleEN}</h1>
                        <p>
                            {(language === "FR") ? props.data.descriptionFR : props.data.descriptionEN}
                        </p>
                    </TextDiv>
                </Card>
            </CardContainer>
        </SectionWrapper>
    );
};

export default InfoSection;