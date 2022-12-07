import { useContext } from "react";
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
import { LangContext } from "../../App";
import useWindowSize from "../../hooks/useWindowSize";
import { FilledBtn } from "../../globalStyle";

const ContactSection = () => {
    const windowSize = useWindowSize();
    const {language} = useContext(LangContext);
    
    return(
        <FormSection winHeight={windowSize.innerHeight}>
            <FormContainer>
                <Title>Contact</Title>
                <Form action="" method="get">
                    <InputContainer>
                        <InputsWrapper>
                            <Label htmlFor="fname">{(language === "FR") ? "Prénom" : "First Name"}</Label>
                            <Input type="text" name="fname" />
                        </InputsWrapper>
                        <InputsWrapper>
                            <Label htmlFor="lname">{(language === "FR") ? "Nom" : "Last Name"}</Label>
                            <Input type="text" name="lname" />
                        </InputsWrapper>             
                    </InputContainer>
                    <InputContainer>
                        <InputsWrapper>
                            <Label htmlFor="email">E-mail</Label>
                            <Input type="email" name="email" />
                        </InputsWrapper>
                        <InputsWrapper>
                            <Label htmlFor="phone">{(language === "FR") ? "Tél" : "Phone"}</Label>
                            <Input type="tel" name="phone" />
                        </InputsWrapper> 
                    </InputContainer>
                    <InputContainer>
                        <InputsWrapper>
                            <Label htmlFor="Message">{(language === "FR") ? "Votre message" : "Message"}</Label>
                            <Textarea name="message"></Textarea>
                        </InputsWrapper>
                    </InputContainer>
                    <InputContainer style={{marginTop: "30px"}}>
                        <FilledBtn>{(language === "FR") ? "Envoyer" : "Send"}</FilledBtn>
                    </InputContainer>
                </Form>
            </FormContainer>
        </FormSection>
    );
}

export default ContactSection;