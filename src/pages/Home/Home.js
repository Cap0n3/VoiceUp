import React, { useEffect, useContext } from "react";
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

import { FooContext } from "../../App";

const Home = () => {
    const windowSize = useWindowSize();

    const foo = useContext(FooContext);

    useEffect(() => {
        console.log(foo.current.scrollTop)
    })

    /**
     * Set number of reviews in page depending on screen width
     * @param   {int}   scrWidth    Screen width 
     * @returns                     Number of review to be displayed                 
     */
    const setNbOfReview = (scrWidth) => {
        if(scrWidth > 1280){
            return 3;
        }
        else if(scrWidth > 1024 && scrWidth < 1280) {
            return 2;
        }
        else if(scrWidth < 1025) {
            return 1;
        } 
        else {
            console.error("Number of reviews was not set for review component !")
            return 3;
        }      
    }   

    return(
        <>
            <SliderContainer winHeight={windowSize.innerHeight}>
                <ImageSlider slides={slides} transitionTime={300} />
            </SliderContainer>
            <InfoSection data={SingSectionData} transitionTime={600} />
            <InfoSection data={PlaySectionData} transitionTime={600} />
            <InfoSection data={TalkSectionData} transitionTime={600} />
            <ReviewSection transitionTime={800} nbOfReviews={setNbOfReview(windowSize.innerWidth)} />
            <C2ASection transitionTime={600} />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Home