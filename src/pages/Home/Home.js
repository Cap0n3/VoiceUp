import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import InfoSection from "../../components/InfoSection/InfoSection";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import C2ASection from "../../components/C2ASection/C2ASection";
import ContactSection from "../../components/ContactSection/ContactSection";
import { SliderContainer } from "./Home.style";
import { slides } from "./data/slideImg.data";
import { SingSectionData, PlaySectionData, TalkSectionData } from "./data/infosSec.data";
import useWindowSize from "../../hooks/useWindowSize";

const Home = () => {
    const windowSize = useWindowSize();

    return(
        <>
            <SliderContainer winHeight={windowSize.innerHeight}>
                <ImageSlider slides={slides} transitionTime={300}></ImageSlider>
            </SliderContainer>
            <InfoSection data={SingSectionData}></InfoSection>
            <InfoSection data={PlaySectionData}></InfoSection>
            <InfoSection data={TalkSectionData}></InfoSection>
            <ReviewSection transitionTime={800} nbOfReviews={windowSize.innerWidth > 960 ? 3 : 1}></ReviewSection>
            <C2ASection></C2ASection>
            <ContactSection></ContactSection>
        </>
    )
}

export default Home