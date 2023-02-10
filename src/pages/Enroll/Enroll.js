import { useRef, useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LoadIcon from "../../components/LoadIcon/LoadIcon";
import { LangContext } from "../../App";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { enrollHeaderData } from "./data/Enroll.data";
import { EnrollSection, EnrollFormContainer, LoadIconWrapper } from "./Enroll.style";
import { 
    Form, 
    InputsContainer, 
    InputWrapper, 
    Label, 
    Input, 
    Select, 
    Textarea, 
    MessageStatusBox, 
    FilledBtn
} from "../../globalStyles/globalCompStyles";
import Recaptcha from "react-google-recaptcha";
import { FORM_REGEX, EMAILJS_IDS } from "../../globalVars";
import { getInputErrMsg } from "../../helpers/inputsError";
import useSend from "../../hooks/useSend";


const levelOptions = [
    {value:"débutant", choiceFR:"Débutant", choiceEN: "Beginner"},
    {value:"intermédiaire", choiceFR:"Intermédiaire", choiceEN: "Intermediary"},
    {value:"avancé", choiceFR:"Avancé", choiceEN: "Advanced"},
    {value:"semi-pro", choiceFR:"Semi-pro", choiceEN: "Semi-pro"},
    {value:"professionnel", choiceFR:"Professionnel", choiceEN: "Professionnal"}
];

const dayOptions = [
    {value:"lundi", choiceFR:"Lundi", choiceEN: "Monday"},
    {value:"mardi", choiceFR:"Mardi", choiceEN: "Tuesday"},
    {value:"mercredi", choiceFR:"Mercredi", choiceEN: "Wednesday"},
    {value:"jeudi", choiceFR:"Jeudi", choiceEN: "thursday"},
    {value:"vendredi", choiceFR:"Vendredi", choiceEN: "Friday"}
];

const hourOptions = [
    {value:"11:00", choiceFR:"11:00", choiceEN: "11AM"},
    {value:"12:00", choiceFR:"12:00", choiceEN: "12AM"},
    {value:"13:00", choiceFR:"13:00", choiceEN: "1PM"},
    {value:"14:00", choiceFR:"14:00", choiceEN: "2PM"},
    {value:"15:00", choiceFR:"15:00", choiceEN: "3PM"},
    {value:"16:00", choiceFR:"16:00", choiceEN: "4PM"},
    {value:"17:00", choiceFR:"17:00", choiceEN: "5PM"},
    {value:"18:00", choiceFR:"18:00", choiceEN: "6PM"},
    {value:"19:00", choiceFR:"19:00", choiceEN: "7PM"},
];

const formMessages = {
    successFR: "Votre inscription a bien été envoyée !",
    successEN: "Successfully sent !",
    errorFR: "Le serveur ne répond pas ! Réessayer dans quelques minutes ...",
    errorEN: "Server is not responding ! Try again in a couple of minutes."
}

const Enroll = () => {
    const {language} = useContext(LangContext);
    const formRef = useRef(null);
    const captchaRef = useRef(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [send] = useSend(
        EMAILJS_IDS.serviceID_enroll,
        EMAILJS_IDS.templateID_enroll,
        EMAILJS_IDS.publicKey_emailjs,
        formRef,
        (language === "FR") ? formMessages.successFR : formMessages.successEN,
        (language === "FR") ? formMessages.errorFR : formMessages.errorEN
    )

    const validateSelect = (value) => {
        return value !== "default";
    }

    const onSubmit = (data, e) => {
        //const token = captchaRef.current.getValue();
        const token = true;
        if(token){
            //sendEmail(e);
            send.mockSend("success", 2000);
            captchaRef.current.reset();
        }
        else {
            // Captcha was not filled
            //setIsStatusBoxVisible(true);
            //setMsgStatus({status : "warn", msg: language === "FR" ? "Merci de remplir le captcha" : "Please fill out the captcha"});
        }
    };

    return(
        <>
            <Header data={enrollHeaderData} position={{posX: 0, posY: 50}} />
            <EnrollSection>
                <EnrollFormContainer>
                    <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                        <InputsContainer>
                            <InputWrapper>
                                <Label htmlFor="fname">{(language === "FR") ? "Prénom *" : "First Name *"}</Label>
                                <Input type="text" name="fname" {...register("firstName", { 
                                    required: true, 
                                    minLength: 2, 
                                    maxLength: 25,
                                    pattern: FORM_REGEX.nameRgx
                                })} status={errors.firstName ? errors.firstName.type : null} />
                                {errors.firstName && getInputErrMsg(errors.firstName, language)}
                            </InputWrapper>
                            <InputWrapper>
                                <Label htmlFor="lname">{(language === "FR") ? "Nom *" : "Last Name *"}</Label>
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
                                <Label htmlFor="email">E-mail *</Label>
                                <Input type="email" name="email" {...register("email", { 
                                    required: true, 
                                    minLength: 2, 
                                    maxLength: 50,
                                    pattern: FORM_REGEX.emailRgx
                                })} status={errors.email ? errors.email.type : null} />
                                {errors.email && getInputErrMsg(errors.email, language)}
                            </InputWrapper>
                            <InputWrapper>
                                <Label htmlFor="phone">{(language === "FR") ? "Tél *" : "Phone *"}</Label>
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
                            {/* SELECT BOX - LEVEL */}
                            <InputWrapper>
                                <Label htmlFor="level">{(language === "FR") ? "Niveau de chant *" : "Singing level *"}</Label>
                                <Select defaultValue={"default"} name="level" {...register("level", {
                                        required: true,
                                        validate: validateSelect
                                    })} status={errors.level ? errors.level.type : null}>
                                    <option value="default">-</option>
                                    {levelOptions.map((obj, index) => (
                                        <option key={index} value={obj.value}>{language === "FR" ? obj.choiceFR : obj.choiceEN}</option>
                                    ))};
                                </Select>
                                {errors.level && getInputErrMsg(errors.level, language)}
                            </InputWrapper>
                        </InputsContainer>
                        <InputsContainer>
                            <InputWrapper>
                                {/* SELECT BOX - DAY OPTION 1 */}
                                <Label htmlFor="dayOption1">{(language === "FR") ? "Jour - Option 1 *" : "Day - Option 1 *"}</Label>
                                <Select defaultValue={"default"} name="dayOption1" {...register("dayOption1", {
                                        required: true,
                                        validate: validateSelect
                                    })} status={errors.dayOption1 ? errors.dayOption1.type : null}>
                                    <option value="default">-</option>
                                    {dayOptions.map((obj, index) => (
                                        <option key={index} value={obj.value}>{language === "FR" ? obj.choiceFR : obj.choiceEN}</option>
                                    ))};
                                </Select>
                                {errors.dayOption1 && getInputErrMsg(errors.dayOption1, language)}
                            </InputWrapper>
                            <InputWrapper>
                            <Label htmlFor="hourOption1">{(language === "FR") ? "Heure - Option 1 *" : "Time - Option 1 *"}</Label>
                                <Select defaultValue={"default"} name="hourOption1" {...register("hourOption1", {
                                        required: true,
                                        validate: validateSelect
                                    })} status={errors.hourOption1 ? errors.hourOption1.type : null}>
                                    <option value="default">-</option>
                                    {hourOptions.map((obj, index) => (
                                        <option key={index} value={obj.value}>{language === "FR" ? obj.choiceFR : obj.choiceEN}</option>
                                    ))};
                                </Select>
                                {errors.hourOption1 && getInputErrMsg(errors.hourOption1, language)}
                            </InputWrapper>
                        </InputsContainer>
                        <InputsContainer>
                            {/* SELECT BOX - DAY OPTION 2 */}
                            <InputWrapper>
                                    <Label htmlFor="dayOption2">{(language === "FR") ? "Jour - Option 2 *" : "Day - Option 2 *"}</Label>
                                    <Select defaultValue={"default"} name="dayOption2" {...register("dayOption2", {
                                            required: true,
                                            validate: validateSelect
                                        })} status={errors.dayOption2 ? errors.dayOption2.type : null}>
                                        <option value="default">-</option>
                                        {dayOptions.map((obj, index) => (
                                            <option key={index} value={obj.value}>{language === "FR" ? obj.choiceFR : obj.choiceEN}</option>
                                        ))};
                                    </Select>
                                    {errors.dayOption2 && getInputErrMsg(errors.dayOption2, language)}
                            </InputWrapper>
                            <InputWrapper>
                            <Label htmlFor="hourOption2">{(language === "FR") ? "Heure - Option 2 *" : "Time - Option 2 *"}</Label>
                                <Select defaultValue={"default"} name="hourOption2" {...register("hourOption2", {
                                    required: true,
                                    validate: validateSelect
                                })} status={errors.hourOption2 ? errors.hourOption2.type : null}>
                                    <option value="default">-</option>
                                    {hourOptions.map((obj, index) => (
                                        <option key={index} value={obj.value}>{language === "FR" ? obj.choiceFR : obj.choiceEN}</option>
                                    ))};
                                </Select>
                                {errors.hourOption2 && getInputErrMsg(errors.hourOption2, language)}
                            </InputWrapper>
                        </InputsContainer>
                        <InputsContainer>
                            {/* SELECT BOX - DAY OPTION 3*/}
                            <InputWrapper>
                                    <Label htmlFor="dayOption3">{(language === "FR") ? "Jour - Option 3 *" : "Day - Option 3 *"}</Label>
                                    <Select defaultValue={"default"} name="dayOption3" {...register("dayOption3", {
                                            required: true,
                                            validate: validateSelect
                                        })} status={errors.dayOption3 ? errors.dayOption3.type : null}>
                                        <option value="default">-</option>
                                        {dayOptions.map((obj, index) => (
                                            <option key={index} value={obj.value}>{language === "FR" ? obj.choiceFR : obj.choiceEN}</option>
                                        ))};
                                    </Select>
                                    {errors.dayOption3 && getInputErrMsg(errors.dayOption3, language)}
                            </InputWrapper>
                            <InputWrapper>
                            <Label htmlFor="hourOption3">{(language === "FR") ? "Heure - Option 3 *" : "Time - Option 3 *"}</Label>
                                <Select defaultValue={"default"} name="hourOption3" {...register("hourOption3", {
                                        required: true,
                                        validate: validateSelect
                                    })} status={errors.hourOption3 ? errors.hourOption3.type : null}>
                                    <option value="default">-</option>
                                    {hourOptions.map((obj, index) => (
                                        <option key={index} value={obj.value}>{language === "FR" ? obj.choiceFR : obj.choiceEN}</option>
                                    ))};
                                </Select>
                                {errors.hourOption3 && getInputErrMsg(errors.hourOption3, language)}
                            </InputWrapper>
                        </InputsContainer>
                        <InputsContainer>
                            {/* TEXT BOX */}
                            <InputWrapper>
                                <Label htmlFor="message">Message *</Label>
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
                            <InputWrapper>
                                <FilledBtn>{(language === "FR") ? "Envoyer" : "Send"}</FilledBtn>   
                            </InputWrapper>
                            <InputWrapper>
                                { send.isWaitingServerResp && <LoadIcon /> }
                            </InputWrapper>
                        </InputsContainer>
                    </Form>
                    <MessageStatusBox className={send.serverResponse ? "show" : ""} status={send.serverResponse && send.serverResponse.status}>{send.serverResponse && send.serverResponse.msg}</MessageStatusBox>
                </EnrollFormContainer>
            </EnrollSection>
            <Footer />
        </>
    );
}

export default Enroll;