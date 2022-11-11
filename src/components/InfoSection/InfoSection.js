import React, { useEffect, useState, useContext } from "react";
import { SectionWrapper, ImgContainer, CardContainer, ImageDiv, Card, TextDiv } from "./InfoSection.style";

const InfoSection = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        window.addEventListener("load", (event) => {setIsLoaded(true)})
    }, []);

    return(
        <SectionWrapper direction={props.data.direction}>
            <ImgContainer>
                <ImageDiv imgSRC={props.data.image} className={isLoaded ? "active" : ""} direction={props.data.direction}></ImageDiv>
            </ImgContainer>
            <CardContainer>
                <Card className={isLoaded ? "active" : ""} direction={props.data.direction}>
                    <TextDiv>
                        {props.data.icon}
                        <h1>{props.data.titleFR}</h1>
                        <p>
                            {props.data.descriptionFR}
                        </p>
                    </TextDiv>
                </Card>
            </CardContainer>
        </SectionWrapper>
    );
};

export default InfoSection;