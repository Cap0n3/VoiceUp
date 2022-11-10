import React, { useEffect, useState, useContext } from "react";
import { SectionWrapper, ImgContainer, TextContainer, ImageDiv, TextDiv } from "./InfoSection.style";

const InfoSection = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        window.addEventListener("load", (event) => {setIsLoaded(true)})
    }, []);

    return(
        <SectionWrapper direction={props.direction}>
            <ImgContainer>
                <ImageDiv className={isLoaded ? "active" : ""}></ImageDiv>
            </ImgContainer>
            <TextContainer>
                <TextDiv className={isLoaded ? "active" : ""}>
                    <h1>Chantez</h1>
                </TextDiv>
            </TextContainer>
        </SectionWrapper>
    );
};

export default InfoSection;