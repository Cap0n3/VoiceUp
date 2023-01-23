import { useContext } from "react";
import {
    Form, 
    InputContainer, 
    InputsWrapper,
    Label,
    Input, 
    Textarea 
} from "./ContactForm.style";
import { LangContext } from "../../App";
import { FilledBtn } from "../../globalStyle";

const ContactForm = () => {
    const {language} = useContext(LangContext);
    
    return(
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
    );
}

export default ContactForm;