import React, { useContext, useRef, useEffect } from "react";
import { LangContext } from '../../App';
import { SectionWrapper, ImgContainer, CardContainer, ImageDiv, Card, TextDiv } from "./InfoSection.style";
import { navbarHeight } from "../../globalVars";
import useAppear from "../../hooks/useAppear";

const InfoSection = (props) => {
    const {language} = useContext(LangContext);
    const containerRef = useRef(null);
    const isVisible = useAppear(containerRef, navbarHeight);

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
                        <h1>{(language === "FR") ? props.data.titleFR : props.data.titleEN}</h1>
                        {displayDescription(language)}
                    </TextDiv>
                </Card>
            </CardContainer>
        </SectionWrapper>
    );
};

export default InfoSection;