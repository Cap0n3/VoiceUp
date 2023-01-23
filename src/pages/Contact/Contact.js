import React from 'react';
import { ContactSection, FormContainer } from "./Contact.style";
import ContactForm from '../../components/ContactForm/ContactForm';
import useWindowSize from '../../hooks/useWindowSize';

const Contact = () => {
    const windowSize = useWindowSize();

    return(
        <ContactSection winHeight={windowSize.innerHeight}>
            <FormContainer>
                <ContactForm />
            </FormContainer>
        </ContactSection>
    )
}

export default Contact