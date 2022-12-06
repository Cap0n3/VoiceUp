import React from "react";
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

const Home = () => {
    const windowSize = useWindowSize();
    const foo = [SingSectionData, PlaySectionData, TalkSectionData]
    return(
        <>
            <SliderContainer winHeight={windowSize.innerHeight}>
                <ImageSlider slides={slides} transitionTime={300} />
            </SliderContainer>
            {foo.map((data, index) => <InfoSection key={index} data={data}  />)}
            {/* <InfoSection data={SingSectionData} key={1} />
            <InfoSection data={PlaySectionData} key={2} />
            <InfoSection data={TalkSectionData} key={3} /> */}
            <ReviewSection transitionTime={800} nbOfReviews={windowSize.innerWidth > 960 ? 3 : 1} />
            <C2ASection />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Home