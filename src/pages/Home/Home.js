import React, { useRef } from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import InfoSection from "../../components/InfoSection/InfoSection";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import C2ASection from "../../components/C2ASection/C2ASection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import { SliderContainer } from "./Home.style";
import { slides } from "./data/slideImg.data";
import { SingSectionData, PlaySectionData, TalkSectionData } from "./data/infosSec.data";
import useWindowSize from "../../hooks/useWindowSize";
import useAppear from "../../hooks/useAppear";

const Home = () => {
    const windowSize = useWindowSize();
    const firstSection = useRef(null);
    const secondSection = useRef(null);
    const thirdSection = useRef(null);
    const foo = useAppear(secondSection);
    console.log(secondSection)
    return(
        <>
            <SliderContainer winHeight={windowSize.innerHeight}>
                <ImageSlider slides={slides} transitionTime={300} />
            </SliderContainer>
            <InfoSection data={SingSectionData} ref={firstSection} />
            <InfoSection data={PlaySectionData} ref={secondSection} />
            <InfoSection data={TalkSectionData} ref={thirdSection} />
            <ReviewSection transitionTime={800} nbOfReviews={windowSize.innerWidth > 960 ? 3 : 1} />
            <C2ASection />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Home