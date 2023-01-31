import React, {useRef} from 'react';
import { ContactSection, FormContainer } from "./Contact.style";
import ContactForm from '../../components/ContactForm/ContactForm';
import useWindowSize from '../../hooks/useWindowSize';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
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
            <Footer />
        </>
    )
}

export default Contact