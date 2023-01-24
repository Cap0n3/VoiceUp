import { useContext, useRef } from "react";
import {
    Form, 
    InputContainer, 
    InputsWrapper,
    Label,
    Input,
    InputError,
    ErrorIcon,
    WarnIcon,
    Textarea 
} from "./ContactForm.style";
import { LangContext } from "../../App";
import { FilledBtn } from "../../globalStyle";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";

const ContactForm = () => {
    const {language} = useContext(LangContext);
    const formRef = useRef(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const getErrorMsg = (errObj) => {
        let msgFR="";

        if(errObj.type === "required") {
            msgFR="Champs requis"
            return <InputError status="warn"><WarnIcon />{msgFR}</InputError>;
        }
        else if(errObj.type === "pattern") {
            msgFR="Caractère(s) invalide(s)";
        }
        else if(errObj.type === "minLength") {
            msgFR="Minimum 2 caractères !";
        }
        else if(errObj.type === "maxLength") {
            msgFR="Nombre maximum de caractères atteint !";
        }
        else {
            msgFR="Erreur inconnue ...";
        }
        return <InputError><ErrorIcon /><span>Erreur:</span>{msgFR}</InputError>;
    }

    return(
        <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <InputsWrapper>
                    <Label htmlFor="fname">{(language === "FR") ? "Prénom" : "First Name"}</Label>
                    <Input type="text" name="fname" {...register("firstName", { 
                        required: true, 
                        minLength: 2, 
                        maxLength: 25,
                        pattern: /^[A-Za-z]+$/i
                    })} />
                    {errors.firstName && getErrorMsg(errors.firstName)}
                </InputsWrapper>
                <InputsWrapper>
                    <Label htmlFor="lname">{(language === "FR") ? "Nom" : "Last Name"}</Label>
                    <Input type="text" name="lname" {...register("lastName", { 
                        required: true, 
                        minLength: 2, 
                        maxLength: 25,
                        pattern: /^[A-Za-z]+$/i
                    })}/>
                    {/* {errors.lastName && <InputError><ErrorIcon /><span>Erreur:</span>Vérifier l'entrée</InputError>} */}
                    {errors.lastName && getErrorMsg(errors.lastName)}
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