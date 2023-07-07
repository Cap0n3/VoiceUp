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
    ParkingWrapper,
    AddressSection,
    InfoBlockWrapper,
    InfoBlock
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
import { LangContext } from "../../App";
import SEOBlock from "../../components/SEOBlock/SeoBlock";
import { websiteSEO } from "../../seo/seo.data";

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
            <SEOBlock data={websiteSEO.contact} />
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
                            <li>Bus 2, 3, 7, 10, 19, Tram 14 - Arrêt Jonction</li>
                            <li>Traverser le pont de Saint-Georges</li>
                            <li>Marcher 10 minutes le long du quai des Vernets</li>
                        </DirectionList>
                        <p>{(language === "FR") ? "ou": "or"}</p>
                        <DirectionList>
                            <li>Bus 11 ou D - Arrêt Queue-d'Arve</li>
                            <li>Marcher 5 minutes</li>
                        </DirectionList>
                        <p>{(language === "FR") ? "ou": "or"}</p>
                        <DirectionList>
                            <li>Tram 15 ou 17 - Arrêt Industrielle</li>
                            <li>Bus 11 - Arrêt Queue-d'Arve</li>
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
            <AddressSection>
                <InfoBlockWrapper>
                    <InfoBlock>
                        <h4>{(language === "FR") ? howToCome.AddressTitleFR: howToCome.AddressTitleEN} :</h4>
                        <p>{howToCome.Address}</p>
                    </InfoBlock>
                    <InfoBlock>
                        <h4>{(language === "FR") ? howToCome.HoursTitleFR: howToCome.HoursTitleEN} :</h4>
                        <p>{(language === "FR") ? howToCome.HoursFR: howToCome.HoursEN}</p>
                    </InfoBlock>
                </InfoBlockWrapper>
            </AddressSection>
            <Footer />
        </>
    )
}

export default Contact;