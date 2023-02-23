import { useState, useEffect, useRef, useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import useWindowSize from "../../hooks/useWindowSize";
import useAppear from "../../hooks/useAppear";
import VideoModal from "../../components/VideoModal/VideoModal";
import { teacherHeaderData, descrParagraphs, vidsInfos } from "./data/about.data";
import { AboutSection, AboutContainer, DescriptionWrapper, SubTitle, VideoSection, VideosWrapper } from "./Teacher.style";
import { LangContext } from "../../App";
import { SectionTitle } from "../../globalStyles/globalCompStyles";
import SEOBlock from "../../components/SEOBlock/SeoBlock";
import { websiteSEO } from "../../seo/seo.data";

const About = () => {
    const {language} = useContext(LangContext);
    const screenSize = useWindowSize();
    const AboutRef = useRef(null);
    const VideoRef = useRef(null);
    const isAboutVisible = useAppear(AboutRef, 300);
    const isVideoVisible = useAppear(VideoRef, 300)
    const [blockDimensions, setblockDimensions] = useState({});
    
    useEffect(() => {
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
        setBlockSize(1.5);
    }, [screenSize.innerWidth])

    /**
	 * Small function to return appropriate JSX depending on language setting.
	 * @param {object} contentList - List of text
	 * @returns 
	 */
	const setContentLang = (contentList) => {
		return contentList.map((para, index) => <p key={index}>{para}</p>)
	}

    return(
        <>
            <SEOBlock data={websiteSEO.about} />
            <Header data={teacherHeaderData} position={{posX: 0, posY: 40}} />
            <AboutSection>
                    <AboutContainer ref={AboutRef} isVisible={isAboutVisible}>
                        <SectionTitle style={{marginBottom: "5px"}}>Tania Guillin</SectionTitle>
                        <SubTitle>{(language === "FR") ? "Technicienne de la voix" : "Vocal coaching"}</SubTitle>
                        <DescriptionWrapper>
                            {setContentLang((language === "FR") ? descrParagraphs.descriptionFR : descrParagraphs.descriptionEN)}
                        </DescriptionWrapper>
                    </AboutContainer>     
            </AboutSection>
            <VideoSection>
                <VideosWrapper ref={VideoRef} isVisible={isVideoVisible}>
                    {
                        vidsInfos.map((data, index) => (
                            <div key={index}>
                                <VideoModal thumbWidth={blockDimensions.compWidth} vidData={data} />
                            </div>
                        ))
                    }
                </VideosWrapper>
            </VideoSection>
            <Footer />
        </>
    );
}

export default About;
