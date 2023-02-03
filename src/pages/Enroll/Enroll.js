import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { enrollHeaderData } from "./data/Enroll.data";
import { EnrollSection, EnrollFormContainer } from "./Enroll.style";
import { Form, InputContainer, InputsWrapper, Label, Input, Select } from "../../globalStyles/globalCompStyles";

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

    return(
        <>
            <Header data={enrollHeaderData} position={{posX: 0, posY: 50}} />
            <EnrollSection>
                <EnrollFormContainer>
                    <Form>
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
                                <Label htmlFor="level">Niveau de chant</Label>
                                <Select defaultValue={"default"} name="level">
                                    <option value="default">-</option>
                                    {levelOptions.map((obj, index) => (
                                        <option key={index} value={obj.value}>{obj.choiceFR}</option>
                                    ))};
                                </Select>
                            </InputsWrapper>
                        </InputContainer>
                        <InputContainer>
                            <InputsWrapper>
                                <Label htmlFor="dayOption1">Jour - Option 1</Label>
                                <Select defaultValue={"default"} name="dayOption1">
                                    <option value="default">-</option>
                                    {dayOptions.map((obj, index) => (
                                        <option key={index} value={obj.value}>{obj.choiceFR}</option>
                                    ))};
                                </Select>
                            </InputsWrapper>
                            <InputsWrapper>
                            <Label htmlFor="hourOption1">Heure - Option 1</Label>
                                <Select defaultValue={"default"} name="hourOption1">
                                    <option value="default">-</option>
                                    {hourOptions.map((obj, index) => (
                                        <option key={index} value={obj.value}>{obj.choiceFR}</option>
                                    ))};
                                </Select>
                            </InputsWrapper>
                        </InputContainer>
                    </Form>
                </EnrollFormContainer>
            </EnrollSection>
            <Footer />
        </>
    );

}

export default Enroll;