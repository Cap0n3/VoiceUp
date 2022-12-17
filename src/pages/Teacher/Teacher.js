import { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import useWindowSize from "../../hooks/useWindowSize";
import useAppear from "../../hooks/useAppear";
import { teacherHeaderData, descrParagraphs } from "./data/teacher.data";
import { AboutSection, AboutImage, DescriptionWrapper } from "./Teacher.style";
import TaniaAbout from "../../assets/images/Tania/TaniaAbout.jpg";
import { navbarHeight } from "../../globalVars";

const Teacher = () => {
    const screenSize = useWindowSize();
    const AboutRef = useRef(null);
    const isVisible = useAppear(AboutRef, navbarHeight);
    const [blockDimensions, setblockDimensions] = useState({});
    
    /**
     * Function to calculate width to height proportion according to given ratio and screen width.
     * The goal of this function is to keep image and description block with locked dimensions
     * and give computed values the to styled components.
     * 
     * @param {*} ratio 
     */
    const setBlockSize = (ratio) => {
        let computedWidth = 0;
        let computedHeight = 0;

        if(screenSize.innerWidth <= 1024){
            computedWidth = screenSize.innerWidth / 1.2;
            computedHeight = computedWidth * ratio;
        } 
        else {
            computedWidth = screenSize.innerWidth / 2.5;
            computedHeight = computedWidth * ratio;
        }
        setblockDimensions({ compWidth: computedWidth, compHeight: computedHeight })
    }

    useEffect(() => {
        setBlockSize(1.5);
    }, [screenSize.innerWidth])

    return(
        <>
            <Header data={teacherHeaderData} position={{posX: 0, posY: 40}} />
            <AboutSection blocksHeight={blockDimensions.compHeight} ref={AboutRef}>
                <AboutImage src={TaniaAbout} className={isVisible ? "active" : ""} width={blockDimensions.compWidth} height={blockDimensions.compHeight} scrWidth={screenSize.innerWidth} />
                <DescriptionWrapper className={isVisible ? "active" : ""} width={blockDimensions.compWidth} height={blockDimensions.compHeight} scrWidth={screenSize.innerWidth}>
                    <h2>Tania Guillin</h2>
                    <sub>Chanteuse professionelle</sub>
                    {descrParagraphs.map((para, index) => 
                        <p key={index}>{para}</p>
                    )}
                </DescriptionWrapper>
            </AboutSection>
        </>
    )
}

export default Teacher;
