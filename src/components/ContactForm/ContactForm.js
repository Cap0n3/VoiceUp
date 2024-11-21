import { useContext, useState, useRef, useEffect } from "react";
import {
    Form, 
    InputsContainer, 
    InputWrapper,
    Label,
    Input,
    Textarea,
    MessageStatusBox ,
    InscriptionNote,
    InfoIcon
} from "../../globalStyles/globalCompStyles";
import { LangContext } from "../../App";
import { FilledBtn } from "../../globalStyles/globalCompStyles";
import { useForm } from "react-hook-form";
import Recaptcha from "react-google-recaptcha";
import { NavLink } from "react-router-dom";
import { FORM_REGEX, EMAILJS_IDS } from "../../globalVars";
import { getInputErrMsg } from "../../helpers/inputsError";
import useSend from "../../hooks/useSend";
import LoadIcon from "../LoadIcon/LoadIcon";

const formMessages = {
    successFR: "Votre message a bien été envoyé !",
    successEN: "Message successfully sent !",
    errorFR: "Le serveur ne répond pas ! Réessayer dans quelques minutes ...",
    errorEN: "Server is not responding ! Try again in a couple of minutes."
}

/**
 * IMPORTANT ! Deactivate StrictMode to avoid issues with recaptcha V2 during development stage (captcha rendered just once).
 * See issue here : https://github.com/dozoisch/react-google-recaptcha/issues/250
 */
const ContactForm = () => {
    const {language} = useContext(LangContext);
    const formRef = useRef(null);
    const captchaRef = useRef(null);
    const [captchaFilled, setCaptchaFilled] = useState(true);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [send] = useSend(
        EMAILJS_IDS.serviceID_contact,
        EMAILJS_IDS.templateID_contact,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        process.env.REACT_APP_EMAILJS_PRIVATE_KEY,
        formRef,
        (language === "FR") ? formMessages.successFR : formMessages.successEN,
        (language === "FR") ? formMessages.errorFR : formMessages.errorEN
    )
    
    const onSubmit = (data, e) => {
        const token = captchaRef.current.getValue();
        
        if(token){
            send.sendEmail(e);
            //send.mockSend("success", 2000, e); // For testing
            // Reset captcha & form
            setCaptchaFilled(true);
            captchaRef.current.reset();
        }
        else {
            // Captcha was not filled
            setCaptchaFilled(false);
        }
    };

    /**
     * Clear form if sending was a success.
     */
    useEffect(() => {
        if(send.serverResponse) {
            if(send.serverResponse.status === "success") {
                reset();
            }
        }    
    }, [send.serverResponse, reset])

    return(
        <>
            <InscriptionNote><InfoIcon />{language === "FR" ? <span>Pour les inscriptions, merci de remplir <NavLink className="inlineLink" to="/inscription">le formulaire ici.</NavLink></span> : <span>To enroll, please <NavLink className="inlineLink" to="/inscription">fill out the form here.</NavLink></span>}</InscriptionNote>
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
                            maxLength: 10000,
                            pattern: FORM_REGEX.messageRgx
                        })} status={errors.message ? errors.message.type : null} />
                        {errors.message && getInputErrMsg(errors.message, language)}
                    </InputWrapper>
                </InputsContainer>
                <Recaptcha sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} />
                {!captchaFilled && getInputErrMsg({type: "captcha"}, language)}
                <InputsContainer style={{marginTop: "30px"}}>
                    <InputWrapper>
                        <FilledBtn>{(language === "FR") ? "Envoyer" : "Send"}</FilledBtn>   
                    </InputWrapper>
                    <InputWrapper>
                        {send.isWaitingServerResp && <LoadIcon />}
                    </InputWrapper>
                </InputsContainer>
            </Form>
            <MessageStatusBox className={send.serverResponse ? "show" : ""} isSuccess={send.isSendSuccess}>{send.serverResponse && send.serverResponse.msg}</MessageStatusBox>
        </> 
    );
}

export default ContactForm;