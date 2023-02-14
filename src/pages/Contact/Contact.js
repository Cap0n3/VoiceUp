import React, {useRef} from 'react';
import { ContactSection, FormContainer } from "./Contact.style";
import ContactForm from '../../components/ContactForm/ContactForm';
import useWindowSize from '../../hooks/useWindowSize';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { contactHeaderData } from './data/Contact.data';
import useAppear from '../../hooks/useAppear';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '600px',
    height: '600px'
};

const center = {
    lat: 46.17629295000025,
    lng: 6.113382306933318
};

const Contact = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAm8s7tSJrPGJPTTs5f5zRrDtP2QXCgxOM",
    });
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
            {!isLoaded ? <p>LOADING ...</p> : 
            <GoogleMap zoom={15} center={center} mapContainerStyle={containerStyle}>
                <Marker position={center} />
            </GoogleMap>}
            <Footer />
        </>
    )
}

export default Contact