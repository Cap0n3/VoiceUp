import React from 'react';
import { ContactSection, FormContainer } from "./Contact.style";
import ContactForm from '../../components/ContactForm/ContactForm';
import useWindowSize from '../../hooks/useWindowSize';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { contactHeaderData } from './data/Contact.data';

const Contact = () => {
    const windowSize = useWindowSize();

    return(
        <>
            <Header data={contactHeaderData} position={{posX: 0, posY: 50}} />
            <ContactSection winHeight={windowSize.innerHeight}>
                <FormContainer>
                    <ContactForm />
                </FormContainer>
            </ContactSection>
            <Footer />
        </>
    )
}

export default Contact