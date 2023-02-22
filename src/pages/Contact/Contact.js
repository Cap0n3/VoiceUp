import React, { useRef, useContext } from 'react';
import { 
    ContactSection, 
    FormContainer, 
    MapsSection, 
    MapsContainer, 
    TextContainer,
    SubTitle,
    DirectionWrapper,
    DirectionList,
    ParkingWrapper
} from "./Contact.style";
import ContactForm from "../../components/ContactForm/ContactForm";
import useWindowSize from "../../hooks/useWindowSize";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Maps from "../../components/Maps/Maps";
import { contactHeaderData, howToCome } from "./data/Contact.data";
import useAppear from "../../hooks/useAppear";
import { useLocation } from "react-router-dom";
import useAnchor from "../../hooks/useAnchor";
import { ELEMENT_HEIGHTS } from "../../globalVars";
import { LangContext } from '../../App';

const Contact = () => {
    const {language} = useContext(LangContext);
    const windowSize = useWindowSize();
    const contactSectionRef = useRef(null);
    const isContactVisible = useAppear(contactSectionRef, 280);
    const sectionRef = useRef(null); // For anchor
    let location = useLocation(null); // For anchor
    useAnchor(sectionRef, location, "#map", (windowSize.innerWidth <= 1024 ? ELEMENT_HEIGHTS.mobileNavbarHeight : ELEMENT_HEIGHTS.navbarHeight)); // For anchor

    return(
        <>
            <Header data={contactHeaderData} position={{posX: 0, posY: 50}} />
            <ContactSection winHeight={windowSize.innerHeight} ref={contactSectionRef}>
                <FormContainer isVisible={isContactVisible}>
                    <ContactForm />
                </FormContainer>
            </ContactSection>
            <MapsSection ref={sectionRef} winHeight={windowSize.innerHeight}>
                <TextContainer>
                    <h2>{(language === "FR") ? howToCome.titleFR : howToCome.titleEN}</h2>
                    <DirectionWrapper>
                        <SubTitle>{(language === "FR") ? howToCome.subTitle1FR: howToCome.subTitle1EN}</SubTitle>
                        <DirectionList>
                            <li>CEVA arrêt Lancy – Bachet Gare</li>
                            <li>Prendre bus 42 arrêt Curé-Baud</li>
                            <li>Marcher 5 minutes</li>
                        </DirectionList>
                        <p>{(language === "FR") ? "ou": "or"}</p>
                        <DirectionList>
                            <li>Tram 12 ou 15 - Arrêt Palette</li>
                            <li>Marcher 10 minutes</li>
                        </DirectionList>
                        <p>{(language === "FR") ? "ou": "or"}</p>
                        <DirectionList>
                            <li>Bus 22 ou 42 arrêt Curé-Baud</li>
                            <li>Marcher 5 minutes</li>
                        </DirectionList>
                    </DirectionWrapper>
                    <ParkingWrapper>
                        <SubTitle>{(language === "FR") ? howToCome.subTitle2FR: howToCome.subTitle2EN}</SubTitle>
                        <p>{(language === "FR") ? howToCome.parkParaFR: howToCome.parkParaEN}</p>
                    </ParkingWrapper>
                </TextContainer>
                <MapsContainer>
                    <Maps />
                </MapsContainer>
            </MapsSection>
            <Footer />
        </>
    )
}

export default Contact;