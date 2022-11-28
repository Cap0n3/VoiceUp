import React, {useContext} from "react";
import { ScreenContext } from "../../contexts/screenContext";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import InfoSection from "../../components/InfoSection/InfoSection";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import C2ASection from "../../components/C2ASection/C2ASection";
import { SliderContainer } from "./Home.style";
import { slides } from "./slideImg.data";
import { SingSectionData, PlaySectionData, TalkSectionData } from "./infosSec.data";

const Home = () => {
    const screenSize = useContext(ScreenContext);

    return(
        <>
            <SliderContainer>
                <ImageSlider slides={slides} transitionTime={300}></ImageSlider>
            </SliderContainer>
            <InfoSection data={SingSectionData}></InfoSection>
            <InfoSection data={PlaySectionData}></InfoSection>
            <InfoSection data={TalkSectionData}></InfoSection>
            <ReviewSection transitionTime={800} nbOfReviews={screenSize.innerWidth > 960 ? 3 : 1}></ReviewSection>
            <C2ASection></C2ASection>
            <div style={{width: "100%", height: "1200px", backgroundColor: "#666"}}></div>
        </>
    )
}

export default Home