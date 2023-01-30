import { useContext, useState, useRef } from "react";
import {
    Form, 
    InputContainer, 
    InputsWrapper,
    Label,
    Input,
    InputError,
    ErrorIcon,
    WarnIcon,
    Textarea,
    ConfirmMsgBox 
} from "./ContactForm.style";
import { LangContext } from "../../App";
import { FilledBtn } from "../../globalStyle";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Recaptcha from "react-google-recaptcha";
import { useEffect } from "react";

const ContactForm = () => {
    const {language} = useContext(LangContext);
    const formRef = useRef(null);
    const captchaRef = useRef(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [msgStatus, setMsgStatus] = useState(null);

    // SEND EMAIL
    const sendEmail = () => {
        emailjs.sendForm('service_q8gv1tb', 'emplate_n3xc4fl', formRef.current, 'rGeZyDR1JuIAHpM0N')
            .then((result) => {
                console.log(result);
                setMsgStatus({status : "success", msg: "Message envoyé !", responseObject: result});
            }, (error) => {
                console.log(error);
                setMsgStatus({status : "error", msg: "Une erreur est survenue, merci de contacter le webmaster", responseObject: error});
            });
    }

    const onSubmit = (data) => {
        const token = captchaRef.current.getValue();
        console.log(token);
        if(token){
            sendEmail();
            captchaRef.current.reset();
        }
        else {
            setMsgStatus({status : "warn", msg: "Le captcha n'a pas été rempli"});
        }
    };

    const getInputErrMsg = (errObj) => {
        let msgFR="";
        
        console.log(errObj)
        
        if(errObj.type === "required") {
            msgFR="Champs requis"
            return <InputError status="warn"><WarnIcon />{msgFR}</InputError>;
        }
        else if(errObj.type === "pattern") {
            msgFR="Format non valide";
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
        return <InputError><ErrorIcon />{msgFR}</InputError>;
    }

    useEffect(() => {
        if(msgStatus) {
            // Make message disappear
            setTimeout(() => {
                setMsgStatus(null);
            }, 4000);
        }
    }, [msgStatus]);

    return(
        <>
            <ConfirmMsgBox className={msgStatus ? "show" : ""} status={msgStatus && msgStatus.status}>{msgStatus && msgStatus.msg}</ConfirmMsgBox>
            <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <InputsWrapper>
                        <Label htmlFor="fname">{(language === "FR") ? "Prénom" : "First Name"}</Label>
                        <Input type="text" name="fname" {...register("firstName", { 
                            required: true, 
                            minLength: 2, 
                            maxLength: 25,
                            pattern: /^[A-Za-zàéèäöüçÀÉÈÇ'^`-\s]+$/i
                        })} status={errors.firstName ? errors.firstName.type : null} />
                        {errors.firstName && getInputErrMsg(errors.firstName)}
                    </InputsWrapper>
                    <InputsWrapper>
                        <Label htmlFor="lname">{(language === "FR") ? "Nom" : "Last Name"}</Label>
                        <Input type="text" name="lname" {...register("lastName", { 
                            required: true, 
                            minLength: 2, 
                            maxLength: 25,
                            pattern: /^[A-Za-za-zàéèäöüçÀÉÈÇ'^`-\s]+$/i
                        })} status={errors.lastName ? errors.lastName.type : null} />
                        {errors.lastName && getInputErrMsg(errors.lastName)}
                    </InputsWrapper>             
                </InputContainer>
                <InputContainer>
                    <InputsWrapper>
                        <Label htmlFor="email">E-mail</Label>
                        <Input type="email" name="email" {...register("email", { 
                            required: true, 
                            minLength: 2, 
                            maxLength: 25,
                            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+$/
                        })} status={errors.email ? errors.email.type : null} />
                        {errors.email && getInputErrMsg(errors.email)}
                    </InputsWrapper>
                    <InputsWrapper>
                        <Label htmlFor="phone">{(language === "FR") ? "Tél" : "Phone"}</Label>
                        <Input type="tel" name="phone" {...register("phone", { 
                            required: true, 
                            minLength: 2, 
                            maxLength: 25,
                            pattern: /^(\+(41|33)|00\s?(41|33)|0\d{1,2})(\s?\(0\))?(\s)?(\d{1,2})(\s)?(\d{2,3})(\s)?(\d{2})(\s)?(\d{2})(\s)?(\d{2})?$/
                        })} status={errors.phone ? errors.phone.type : null} />
                        {errors.phone && getInputErrMsg(errors.phone)}
                    </InputsWrapper> 
                </InputContainer>
                <InputContainer>
                    <InputsWrapper>
                        <Label htmlFor="Message">{(language === "FR") ? "Votre message" : "Message"}</Label>
                        <Textarea name="message" {...register("message", { 
                            required: true, 
                            minLength: 2, 
                            maxLength: 1000,
                            pattern: /^[a-zA-Z0-9àéèäöüç°ÀÉÈÇ.():;!#$%&'*+/=?^_`~-\s]+$/i
                        })} status={errors.message ? errors.message.type : null}></Textarea>
                        {errors.message && getInputErrMsg(errors.message)}
                    </InputsWrapper>
                </InputContainer>
                <Recaptcha sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} />
                <InputContainer style={{marginTop: "30px"}}>
                    <FilledBtn>{(language === "FR") ? "Envoyer" : "Send"}</FilledBtn>
                </InputContainer>
            </Form>
        </> 
    );
}

export default ContactForm;