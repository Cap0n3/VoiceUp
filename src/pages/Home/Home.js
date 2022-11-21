import React, {useContext} from "react";
import { ScreenContext } from "../../contexts/screenContext";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import InfoSection from "../../components/InfoSection/InfoSection";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import { SliderContainer } from "./Home.style";
import { slides } from "./SlidesImg";
import { SingSectionData, PlaySectionData, TalkSectionData } from "./data.home";

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
        </>
    )
}

export default Home