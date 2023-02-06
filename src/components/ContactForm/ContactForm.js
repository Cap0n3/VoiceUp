import { useContext, useState, useRef } from "react";
import {
    Form, 
    InputsContainer, 
    InputWrapper,
    Label,
    Input,
    InputError,
    ErrorIcon,
    WarnIcon,
    Textarea,
    MessageStatusBox ,
    InscriptionNote,
    InfoIcon
} from "../../globalStyles/globalCompStyles";
import { LangContext } from "../../App";
import { FilledBtn } from "../../globalStyles/globalCompStyles";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Recaptcha from "react-google-recaptcha";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FORM_REGEX, EMAILJS_IDS } from "../../globalVars";
import { getInputErrMsg } from "../../helpers/inputsError";

/**
 * IMPORTANT ! Deactivate StrictMode to avoid issues with recaptcha V2 during development stage (captcha rendered just once).
 * See issue here : https://github.com/dozoisch/react-google-recaptcha/issues/250
 */
const ContactForm = () => {
    const {language} = useContext(LangContext);
    const formRef = useRef(null);
    const captchaRef = useRef(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [msgStatus, setMsgStatus] = useState(null);

    const sendEmail = () => {
        emailjs.sendForm(EMAILJS_IDS.serviceID_contact, EMAILJS_IDS.templateID_contact, formRef.current, EMAILJS_IDS.publicKey_emailjs)
            .then((result) => {
                setMsgStatus({status : "success", msg: language === "FR" ? "Message envoyé !" : "Message sent !", responseObject: result});
                reset();
            }, (error) => {
                console.log(error);
                setMsgStatus({status : "error", msg: language === "FR" ? "Une erreur est survenue, le serveur n'est pas joignable !" : "An error occured, server unreachable !", responseObject: error});
            });
    }

    const onSubmit = (data) => {
        const token = captchaRef.current.getValue();
        if(token){
            sendEmail();
            captchaRef.current.reset();
        }
        else {
            setMsgStatus({status : "warn", msg: language === "FR" ? "Merci de remplir le captcha" : "Please fill out the captcha"});
        }
    };

    useEffect(() => {
        if(msgStatus) {
            // Make info, warn and error messages disappear
            setTimeout(() => {
                setMsgStatus(null);
            }, 4000);
        }
    }, [msgStatus]);

    return(
        <>
            <InscriptionNote><InfoIcon />{language === "FR" ? <span>Pour les inscriptions, merci de remplir <NavLink className="inlineLink" to="/inscription">le formulaire ici.</NavLink></span> : <span>To enroll, please <NavLink className="inlineLink" to="/inscription">fill out form here.</NavLink></span>}</InscriptionNote>
            <MessageStatusBox className={msgStatus ? "show" : ""} status={msgStatus && msgStatus.status}>{msgStatus && msgStatus.msg}</MessageStatusBox>
            <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <InputsContainer>
                    <InputWrapper>
                        <Label htmlFor="fname">{(language === "FR") ? "Prénom" : "First Name"}</Label>
                        <Input type="text" name="fname" {...register("firstName", { 
                            required: true, 
                            minLength: 2, 
                            maxLength: 25,
                            pattern: FORM_REGEX.nameRgx
                        })} status={errors.firstName ? errors.firstName.type : null} />
                        {errors.firstName && getInputErrMsg(errors.firstName, language)}
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="lname">{(language === "FR") ? "Nom" : "Last Name"}</Label>
                        <Input type="text" name="lname" {...register("lastName", { 
                            required: true, 
                            minLength: 2, 
                            maxLength: 25,
                            pattern: FORM_REGEX.nameRgx
                        })} status={errors.lastName ? errors.lastName.type : null} />
                        {errors.lastName && getInputErrMsg(errors.lastName, language)}
                    </InputWrapper>             
                </InputsContainer>
                <InputsContainer>
                    <InputWrapper>
                        <Label htmlFor="email">E-mail</Label>
                        <Input type="email" name="email" {...register("email", { 
                            required: true, 
                            minLength: 2, 
                            maxLength: 50,
                            pattern: FORM_REGEX.emailRgx
                        })} status={errors.email ? errors.email.type : null} />
                        {errors.email && getInputErrMsg(errors.email, language)}
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="phone">{(language === "FR") ? "Tél" : "Phone"}</Label>
                        <Input type="tel" name="phone" {...register("phone", { 
                            required: true, 
                            minLength: 2, 
                            maxLength: 25,
                            pattern: FORM_REGEX.phoneRgx
                        })} status={errors.phone ? errors.phone.type : null} />
                        {errors.phone && getInputErrMsg(errors.phone, language)}
                    </InputWrapper> 
                </InputsContainer>
                <InputsContainer>
                    <InputWrapper>
                        <Label htmlFor="message">{(language === "FR") ? "Votre message" : "Message"}</Label>
                        <Textarea name="message" {...register("message", { 
                            required: true, 
                            minLength: 2, 
                            maxLength: 1000,
                            pattern: FORM_REGEX.messageRgx
                        })} status={errors.message ? errors.message.type : null} />
                        {errors.message && getInputErrMsg(errors.message, language)}
                    </InputWrapper>
                </InputsContainer>
                <Recaptcha sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} />
                <InputsContainer style={{marginTop: "30px"}}>
                    <FilledBtn>{(language === "FR") ? "Envoyer" : "Send"}</FilledBtn>
                </InputsContainer>
            </Form>
        </> 
    );
}

export default ContactForm;