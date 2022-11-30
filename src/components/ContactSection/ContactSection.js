import { 
    FormSection,
    FormContainer, 
    Title, 
    Form, 
    InputContainer, 
    InputsWrapper,
    Label,
    Input, 
    Textarea 
} from "./ContactSection.style";
import useWindowSize from "../../hooks/useWindowSize";
import { FilledBtn } from "../../globalStyle";

const ContactSection = () => {
    const windowSize = useWindowSize();

    return(
        <FormSection winHeight={windowSize.innerHeight}>
            <FormContainer>
                <Title>Contact</Title>
                <Form action="" method="get">
                    <InputContainer>
                        <InputsWrapper>
                            <Label htmlFor="fname">Prénom</Label>
                            <Input type="text" name="fname" />
                        </InputsWrapper>
                        <InputsWrapper>
                            <Label htmlFor="lname">Nom</Label>
                            <Input type="text" name="lname" />
                        </InputsWrapper>             
                    </InputContainer>
                    <InputContainer>
                        <InputsWrapper>
                            <Label htmlFor="email">E-mail</Label>
                            <Input type="email" name="email" />
                        </InputsWrapper>
                        <InputsWrapper>
                            <Label htmlFor="phone">Tél</Label>
                            <Input type="tel" name="phone" />
                        </InputsWrapper> 
                    </InputContainer>
                    <InputContainer>
                        <InputsWrapper>
                            <Label htmlFor="Message">Votre message</Label>
                            <Textarea name="message"></Textarea>
                        </InputsWrapper>
                    </InputContainer>
                    <InputContainer style={{marginTop: "30px"}}>
                        <FilledBtn>Envoyer</FilledBtn>
                    </InputContainer>
                </Form>
            </FormContainer>
        </FormSection>
    );
}

export default ContactSection;