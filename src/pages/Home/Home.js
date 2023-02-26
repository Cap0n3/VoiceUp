import React, { useRef } from "react";
import { SectionTitle } from "../../globalStyles/globalCompStyles";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import InfoSection from "../../components/InfoSection/InfoSection";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import C2ASection from "../../components/C2ASection/C2ASection";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import { SliderContainer, ContactSection, FormContainer } from "./Home.style";
import { slides } from "./data/slideImg.data";
import { SingSectionData, PlaySectionData, TalkSectionData } from "./data/infosSec.data";
import useWindowSize from "../../hooks/useWindowSize";
import useAppear from "../../hooks/useAppear";
import SEOBlock from "../../components/SEOBlock/SeoBlock";
import { websiteSEO } from "../../seo/seo.data";

const Home = () => {
    const windowSize = useWindowSize();
    const contactSectionRef = useRef(null);
    const isContactVisible = useAppear(contactSectionRef, 380);

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
            <SEOBlock data={websiteSEO.home} />
            <SliderContainer winHeight={windowSize.innerHeight}>
                <ImageSlider slides={slides} transitionTime={300} />
            </SliderContainer>
            <InfoSection data={SingSectionData} transitionTime={600} />
            <InfoSection data={PlaySectionData} transitionTime={600} />
            <InfoSection data={TalkSectionData} transitionTime={600} />
            <ReviewSection transitionTime={800} nbOfReviews={setNbOfReview(windowSize.innerWidth)} />
            <C2ASection transitionTime={600} />
            <ContactSection winHeight={windowSize.innerHeight} ref={contactSectionRef}>
                <FormContainer isVisible={isContactVisible}>
                    <SectionTitle>Contact</SectionTitle>
                    <ContactForm />
                </FormContainer>
            </ContactSection>
            <Footer />
        </>
    )
}

export default Home