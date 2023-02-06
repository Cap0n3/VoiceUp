import { useRef, useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { LangContext } from "../../App";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { enrollHeaderData } from "./data/Enroll.data";
import { EnrollSection, EnrollFormContainer } from "./Enroll.style";
import { Form, InputsContainer, InputWrapper, Label, Input, Select, Textarea, MessageStatusBox, FilledBtn } from "../../globalStyles/globalCompStyles";
import Recaptcha from "react-google-recaptcha";
import { FORM_REGEX } from "../../globalVars";
import { getInputErrMsg } from "../../helpers/inputsError";

const levelOptions = [
    {value:"beginner", choiceFR:"Débutant", choiceEN: "Beginner"},
    {value:"intermediary", choiceFR:"Intermédiaire", choiceEN: "Intermediary"},
    {value:"advanced", choiceFR:"Avancé", choiceEN: "Advanced"},
    {value:"semiPro", choiceFR:"Semi-pro", choiceEN: "Semi-pro"},
    {value:"pro", choiceFR:"Professionnel", choiceEN: "Professionnal"}
];

const dayOptions = [
    {value:"monday", choiceFR:"Lundi", choiceEN: "Monday"},
    {value:"tuesday", choiceFR:"Mardi", choiceEN: "Tuesday"},
    {value:"wednesday", choiceFR:"Mercredi", choiceEN: "Wednesday"},
    {value:"thursday", choiceFR:"Jeudi", choiceEN: "thursday"},
    {value:"friday", choiceFR:"Vendredi", choiceEN: "Friday"}
];

const hourOptions = [
    {value:"11am", choiceFR:"11:00", choiceEN: "11AM"},
    {value:"noon", choiceFR:"12:00", choiceEN: "Noon"},
    {value:"1pm", choiceFR:"13:00", choiceEN: "1PM"},
    {value:"2pm", choiceFR:"14:00", choiceEN: "2PM"},
    {value:"3pm", choiceFR:"15:00", choiceEN: "3PM"},
    {value:"4pm", choiceFR:"16:00", choiceEN: "4PM"},
    {value:"5pm", choiceFR:"17:00", choiceEN: "5PM"},
    {value:"6pm", choiceFR:"18:00", choiceEN: "6PM"},
    {value:"7pm", choiceFR:"19:00", choiceEN: "7PM"},
];

const Enroll = () => {
    const {language} = useContext(LangContext);
    const formRef = useRef(null);
    const captchaRef = useRef(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [msgStatus, setMsgStatus] = useState(null);

    const sendEmail = () => {
        emailjs.sendForm('service_q8gv1tb', 'template_n3xc4fl', formRef.current, 'rGeZyDR1JuIAHpM0N')
            .then((result) => {
                setMsgStatus({status : "success", msg: language === "FR" ? "Message envoyé !" : "Message sent !", responseObject: result});
                reset();
            }, (error) => {
                console.log(error);
                setMsgStatus({status : "error", msg: language === "FR" ? "Une erreur est survenue, le serveur n'est pas joignable !" : "An error occured, server unreachable !", responseObject: error});
            });
    }

    const validateSelect = (value) => {
        return value !== "default";
    }

    const onSubmit = (data) => {
        const token = captchaRef.current.getValue();
        //console.log(token);
        if(token){
            //sendEmail();
            console.log(data);
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
            <Header data={enrollHeaderData} position={{posX: 0, posY: 50}} />
            <EnrollSection>
                <EnrollFormContainer>
                    <MessageStatusBox className={msgStatus ? "show" : ""} status={msgStatus && msgStatus.status}>{msgStatus && msgStatus.msg}</MessageStatusBox>
                    <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                        <InputsContainer>
                            <InputWrapper>
                                <Label htmlFor="fname">{(language === "FR") ? "Prénom *" : "First Name *"}</Label>
                                <Input type="text" name="fname" {...register("firstName", { 
                                    required: true, 
                                    minLength: 2, 
                                    maxLength: 25,
                                    pattern: FORM_REGEX.nameRgx
                                })} status={errors.firstName ? errors.firstName.type : null}/>
                                {errors.firstName && getInputErrMsg(errors.firstName, language)}
                            </InputWrapper>
                            <InputWrapper>
                                <Label htmlFor="lname">{(language === "FR") ? "Nom *" : "Last Name *"}</Label>
                                <Input type="text" name="lname" {...register("lastName", { 
                                    required: true, 
                                    minLength: 2, 
                                    maxLength: 25,
                                    pattern: FORM_REGEX.nameRgx
                                })} status={errors.lastName ? errors.lastName.type : null}/>
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
                                })} status={errors.email ? errors.email.type : null}/>
                                {errors.email && getInputErrMsg(errors.email, language)}
                            </InputWrapper>
                            <InputWrapper>
                                <Label htmlFor="phone">{(language === "FR") ? "Tél *" : "Phone *"}</Label>
                                <Input type="tel" name="phone" {...register("phone", { 
                                    required: true, 
                                    minLength: 2, 
                                    maxLength: 25,
                                    pattern: FORM_REGEX.phoneRgx
                                })} status={errors.phone ? errors.phone.type : null}/>
                                {errors.phone && getInputErrMsg(errors.phone, language)}
                            </InputWrapper>
                        </InputsContainer>
                        <InputsContainer>
                            <InputWrapper>
                                <Label htmlFor="level">{(language === "FR") ? "Niveau de chant *" : "Singing level *"}</Label>
                                <Select defaultValue={"default"} name="level" {...register("level", {
                                    required: true,
                                    validate: validateSelect
                                })}>
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
                                <Label htmlFor="dayOption1">{(language === "FR") ? "Jour - Option 1 *" : "Day - Option 1 *"}</Label>
                                <Select defaultValue={"default"} name="dayOption1" {...register("dayOption1", {
                                    required: true,
                                    validate: validateSelect
                                })}>
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
                                })}>
                                    <option value="default">-</option>
                                    {hourOptions.map((obj, index) => (
                                        <option key={index} value={obj.value}>{language === "FR" ? obj.choiceFR : obj.choiceEN}</option>
                                    ))};
                                </Select>
                                {errors.hourOption1 && getInputErrMsg(errors.hourOption1, language)}
                            </InputWrapper>
                        </InputsContainer>
                        <InputsContainer>
                            <InputWrapper>
                                    <Label htmlFor="dayOption2">{(language === "FR") ? "Jour - Option 2 *" : "Day - Option 2 *"}</Label>
                                    <Select defaultValue={"default"} name="dayOption2">
                                        <option value="default">-</option>
                                        {dayOptions.map((obj, index) => (
                                            <option key={index} value={obj.value}>{language === "FR" ? obj.choiceFR : obj.choiceEN}</option>
                                        ))};
                                    </Select>
                            </InputWrapper>
                            <InputWrapper>
                            <Label htmlFor="hourOption2">{(language === "FR") ? "Heure - Option 2 *" : "Time - Option 2 *"}</Label>
                                <Select defaultValue={"default"} name="hourOption2">
                                    <option value="default">-</option>
                                    {hourOptions.map((obj, index) => (
                                        <option key={index} value={obj.value}>{language === "FR" ? obj.choiceFR : obj.choiceEN}</option>
                                    ))};
                                </Select>
                            </InputWrapper>
                        </InputsContainer>
                        <InputsContainer>
                            <InputWrapper>
                                    <Label htmlFor="dayOption3">{(language === "FR") ? "Jour - Option 3 *" : "Day - Option 3 *"}</Label>
                                    <Select defaultValue={"default"} name="dayOption3">
                                        <option value="default">-</option>
                                        {dayOptions.map((obj, index) => (
                                            <option key={index} value={obj.value}>{language === "FR" ? obj.choiceFR : obj.choiceEN}</option>
                                        ))};
                                    </Select>
                            </InputWrapper>
                            <InputWrapper>
                            <Label htmlFor="hourOption3">{(language === "FR") ? "Heure - Option 3 *" : "Time - Option 3 *"}</Label>
                                <Select defaultValue={"default"} name="hourOption3">
                                    <option value="default">-</option>
                                    {hourOptions.map((obj, index) => (
                                        <option key={index} value={obj.value}>{language === "FR" ? obj.choiceFR : obj.choiceEN}</option>
                                    ))};
                                </Select>
                            </InputWrapper>
                        </InputsContainer>
                        <InputsContainer>
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
                            <FilledBtn>{(language === "FR") ? "Envoyer" : "Send"}</FilledBtn>
                        </InputsContainer>
                    </Form>
                </EnrollFormContainer>
            </EnrollSection>
            <Footer />
        </>
    );

}

export default Enroll;