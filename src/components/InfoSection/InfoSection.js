import React, { useContext, useRef } from "react";
import { LangContext } from '../../App';
import { SectionWrapper, ImgContainer, CardContainer, ImageDiv, Card, TextDiv } from "./InfoSection.style";
import useAppear from "../../hooks/useAppear";

const InfoSection = (props) => {
    const {language} = useContext(LangContext);
    const containerRef = useRef(null);
    const isVisible = useAppear(containerRef);

    const displayDescription = (lang) => {
        if(lang === "FR") {
            return (
                props.data.descriptionFR.map((text, index) => (
                    <p key={index}>{text}</p>  
                ))
            );
        }       
        else if(lang === "EN") {
                return(
                    props.data.descriptionEN.map((text, index) => (
                        <p key={index}>{text}</p>  
                    ))
                );    
        }
        else {
            console.error("Language state is not defined or have a wrong value !")
        }
    }

    return(
        <SectionWrapper direction={props.data.direction} ref={containerRef}>
            <ImgContainer>
                <ImageDiv imgSRC={props.data.image} className={isVisible ? "active" : ""} title={props.data.imgTitle} direction={props.data.direction} transitionTime={props.transitionTime}></ImageDiv>
            </ImgContainer>
            <CardContainer>
                <Card className={isVisible ? "active" : ""} direction={props.data.direction} transitionTime={props.transitionTime}>
                    <TextDiv fontSize={props.fontSize} >
                        {props.data.icon ? props.data.icon : ""}
                        <h2>{(language === "FR") ? props.data.titleFR : props.data.titleEN}</h2>
                        {displayDescription(language)}
                    </TextDiv>
                </Card>
            </CardContainer>
        </SectionWrapper>
    );
};

export default InfoSection;