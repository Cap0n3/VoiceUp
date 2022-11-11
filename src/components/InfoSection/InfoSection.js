import React, { useEffect, useState, useContext } from "react";
import { LangContext } from '../../App';
import { SectionWrapper, ImgContainer, CardContainer, ImageDiv, Card, TextDiv } from "./InfoSection.style";

const InfoSection = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const {language} = useContext(LangContext)

    useEffect(() => {
        window.addEventListener("load", (event) => {setIsLoaded(true)})
    }, []);

    /**
     * When user go to another page, isLoaded becomes false again. Turn it back to true to trigger animation
     * of InfoSections.
     */
    useEffect(() => {
        setIsLoaded(true);
    }, [isLoaded]);

    return(
        <SectionWrapper direction={props.data.direction}>
            <ImgContainer>
                <ImageDiv imgSRC={props.data.image} className={isLoaded ? "active" : ""} direction={props.data.direction}></ImageDiv>
            </ImgContainer>
            <CardContainer>
                <Card className={isLoaded ? "active" : ""} direction={props.data.direction}>
                    <TextDiv>
                        {props.data.icon}
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