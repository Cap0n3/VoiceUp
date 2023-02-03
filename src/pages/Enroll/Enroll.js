import { useRef, useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { LangContext } from "../../App";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { enrollHeaderData } from "./data/Enroll.data";
import { EnrollSection, EnrollFormContainer } from "./Enroll.style";
import { Form, InputsContainer, InputWrapper, Label, Input, Select, Textarea, FilledBtn } from "../../globalStyles/globalCompStyles";
import Recaptcha from "react-google-recaptcha";
import { FORM_REGEX } from "../../globalVars";

const levelOptions = [
    {value:"beginner", choiceFR:"Débutant", choiceEN: "Beginner"},
    {value:"intermediary", choiceFR:"Intermédiaire", choiceEN: "Intermediary"},
    {value:"advanced", choiceFR:"Avancé", choiceEN: "Advanced"},
    {value:"semiPro", choiceFR:"Semi-pro", choiceEN: "Semi-pro"},
    {value:"pro", choiceFR:"Professionnel", choiceEN: "Professionnal"}
];

const dayOptions = [
    {value:"monday", choiceFR:"Lundi", choiceEN: "Monday"},
    {value:"tuesday", choiceFR:"Intermédiaire", choiceEN: "Tuesday"},
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

    const onSubmit = (data) => {
        // const token = captchaRef.current.getValue();
        // console.log(token);
        // if(token){
        //     sendEmail();
        //     captchaRef.current.reset();
        // }
        // else {
        //     setMsgStatus({status : "warn", msg: language === "FR" ? "Merci de remplir le captcha" : "Please fill out the captcha"});
        // }
        console.log(data);
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
                                })} status={errors.firstName ? errors.firstName.type : null}/>
                            </InputWrapper>
                            <InputWrapper>
                                <Label htmlFor="lname">{(language === "FR") ? "Nom *" : "Last Name *"}</Label>
                                <Input type="text" name="lname" {...register("lastName", { 
                                    required: true, 
                                    minLength: 2, 
                                    maxLength: 25,
                                    pattern: FORM_REGEX.nameRgx
                                })} status={errors.lastName ? errors.lastName.type : null}/>
                            </InputWrapper>
                        </InputsContainer>
                        <InputsContainer>
                            <InputWrapper>
                                <Label htmlFor="email">E-mail *</Label>
                                <Input type="email" name="email" {...register("email", { 
                                    required: true, 
                                    minLength: 2, 
                                    maxLength: 25,
                                    pattern: FORM_REGEX.emailRgx
                                })} status={errors.email ? errors.email.type : null}/>
                            </InputWrapper>
                            <InputWrapper>
                                <Label htmlFor="phone">{(language === "FR") ? "Tél *" : "Phone *"}</Label>
                                <Input type="tel" name="phone" {...register("phone", { 
                                    required: true, 
                                    minLength: 2, 
                                    maxLength: 25,
                                    pattern: FORM_REGEX.phoneRgx
                                })} status={errors.phone ? errors.phone.type : null}/>
                            </InputWrapper>
                        </InputsContainer>
                        <InputsContainer>
                            <InputWrapper>
                                <Label htmlFor="level">{(language === "FR") ? "Niveau de chant *" : "Singing level *"}</Label>
                                <Select defaultValue={"default"} name="level">
                                    <option value="default">-</option>
                                    {levelOptions.map((obj, index) => (
                                        <option key={index} value={obj.value}>{language === "FR" ? obj.choiceFR : obj.choiceEN}</option>
                                    ))};
                                </Select>
                            </InputWrapper>
                        </InputsContainer>
                        <InputsContainer>
                            <InputWrapper>
                                <Label htmlFor="dayOption1">{(language === "FR") ? "Jour - Option 1 *" : "Day - Option 1 *"}</Label>
                                <Select defaultValue={"default"} name="dayOption1">
                                    <option value="default">-</option>
                                    {dayOptions.map((obj, index) => (
                                        <option key={index} value={obj.value}>{language === "FR" ? obj.choiceFR : obj.choiceEN}</option>
                                    ))};
                                </Select>
                            </InputWrapper>
                            <InputWrapper>
                            <Label htmlFor="hourOption1">{(language === "FR") ? "Heure - Option 1 *" : "Time - Option 1 *"}</Label>
                                <Select defaultValue={"default"} name="hourOption1">
                                    <option value="default">-</option>
                                    {hourOptions.map((obj, index) => (
                                        <option key={index} value={obj.value}>{language === "FR" ? obj.choiceFR : obj.choiceEN}</option>
                                    ))};
                                </Select>
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