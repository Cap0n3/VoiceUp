import React, {useRef} from 'react';
import { 
    ContactSection, 
    FormContainer, 
    MapsSection, 
    MapsContainer, 
    TextContainer, 
    DirectionList 
} from "./Contact.style";
import ContactForm from '../../components/ContactForm/ContactForm';
import useWindowSize from '../../hooks/useWindowSize';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Maps from "../../components/Maps/Maps";
import { contactHeaderData } from './data/Contact.data';
import useAppear from '../../hooks/useAppear';

const Contact = () => {   
    const windowSize = useWindowSize();
    const contactSectionRef = useRef(null);
    const isContactVisible = useAppear(contactSectionRef, 280);

    return(
        <>
            <Header data={contactHeaderData} position={{posX: 0, posY: 50}} />
            <ContactSection winHeight={windowSize.innerHeight} ref={contactSectionRef}>
                <FormContainer isVisible={isContactVisible}>
                    <ContactForm />
                </FormContainer>
            </ContactSection>
            <MapsSection>
                <TextContainer>
                    <h2>Comment venir ?</h2>
                    <h4>Transports en commun</h4>
                    <DirectionList>
                        <li>CEVA arrêt Lancy – Bachet Gare</li>
                        <li>Prendre bus 42 arrêt Curé-Baud</li>
                        <li>Marcher 5 minutes</li>
                    </DirectionList>
                    <p>ou</p>
                    <DirectionList>
                        <li>Tram 12 ou 15 - Arrêt Palette</li>
                        <li>Marcher 10 minutes</li>
                    </DirectionList>
                    <p>ou</p>
                    <DirectionList>
                        <li>Bus 22 ou 42 arrêt Curé-Baud</li>
                        <li>Marcher 5 minutes</li>
                    </DirectionList>
                    <h4>En voiture</h4>
                    <p>La maison est à 5 minutes de la sortie « Lancy/Carouge » de l’autoroute de contournement.</p>
                    <p>Facilité de parking devant la maison.</p>
                </TextContainer>
                <MapsContainer>
                    <Maps />
                </MapsContainer>
            </MapsSection>
            <Footer />
        </>
    )
}

export default Contact