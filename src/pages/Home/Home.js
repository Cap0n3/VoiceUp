import React from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import InfoSection from '../../components/InfoSection/InfoSection';
import { SliderContainer } from './Home.style';
import { slides } from "./SlidesImg";
import { SingSectionData, PlaySectionData, TalkSectionData } from './data.home';

const Home = () => {
    return(
        <>
            <SliderContainer>
                <ImageSlider slides={slides} transitionTime={300}></ImageSlider>
            </SliderContainer>
            <InfoSection data={SingSectionData}></InfoSection>
            <InfoSection data={PlaySectionData}></InfoSection>
            <InfoSection data={TalkSectionData}></InfoSection>
        </>
    )
}

export default Home