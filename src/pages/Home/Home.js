import React from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import InfoSection from '../../components/InfoSection/InfoSection';
import { SliderContainer } from './Home.style';
import { slides } from "./SlidesImg";

const Home = () => {
    return(
        <>
            <SliderContainer>
                <ImageSlider slides={slides} transitionTime={300}></ImageSlider>
            </SliderContainer>
            <InfoSection data="" direction="normal"></InfoSection>
        </>
    )
}

export default Home