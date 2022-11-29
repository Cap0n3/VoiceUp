import { 
    FormSection,
    FormContainer, 
    Title, 
    Form, 
    InputContainer, 
    InputsWrapper, 
    Textarea 
} from "./ContactSection.style";
import useWindowSize from "../../hooks/useWindowSize";

const ContactSection = () => {
    const windowSize = useWindowSize();

    return(
        <FormSection winHeight={windowSize.innerHeight}>
            <FormContainer>
                <Title>Contact</Title>
                <Form action="" method="get">
                    <InputContainer>
                        <InputsWrapper>
                            <label htmlFor="fname">Prénom</label>
                            <input type="text" name="fname" />
                        </InputsWrapper>
                        <InputsWrapper>
                            <label htmlFor="lname">Nom</label>
                            <input type="text" name="lname" />
                        </InputsWrapper>             
                    </InputContainer>
                    <InputContainer>
                        <InputsWrapper>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" />
                        </InputsWrapper>
                        <InputsWrapper>
                            <label htmlFor="phone">Tél</label>
                            <input type="tel" name="phone" />
                        </InputsWrapper> 
                    </InputContainer>
                    <InputContainer>
                        <Textarea></Textarea>
                    </InputContainer>
                    <InputContainer>
                        <button>Envoyer</button>
                    </InputContainer>
                </Form>
            </FormContainer>
        </FormSection>
    );
}

export default ContactSection;