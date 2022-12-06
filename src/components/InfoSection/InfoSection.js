import React, { useEffect, useState, useContext, useRef } from "react";
import { LangContext } from '../../App';
import { ScrollContext } from "../../App";
import useWindowSize from "../../hooks/useWindowSize";
import { SectionWrapper, ImgContainer, CardContainer, ImageDiv, Card, TextDiv } from "./InfoSection.style";
import { navbarHeight } from "../../globalVars";

const InfoSection = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const {language} = useContext(LangContext);
    const windowSize = useWindowSize();
    const scrollPos = useContext(ScrollContext);
    const containerRef = useRef(null);

    useEffect(() => {
        if(containerRef !== null && scrollPos !== null) { 
            const containerHeight = containerRef.current.clientHeight;
            // It's the visible portion when element is at the bottom of the page
            const winVisibleChunk = windowSize.innerHeight - navbarHeight - containerHeight;
            const containerTruePos = containerRef.current.offsetTop - navbarHeight;
            console.log("EL POS : " + containerTruePos + " SCR POS : " + scrollPos)
            
            if((containerTruePos - winVisibleChunk) / 2 >= scrollPos) {
                setIsVisible(true)
            }
        }
    }, [containerRef, scrollPos]);
    
    return(
        <SectionWrapper direction={props.data.direction} ref={containerRef}>
            <ImgContainer>
                <ImageDiv imgSRC={props.data.image} className={isVisible ? "active" : ""} direction={props.data.direction}></ImageDiv>
            </ImgContainer>
            <CardContainer>
                <Card className={isVisible ? "active" : ""} direction={props.data.direction}>
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