import EnrollHeader from "../../../assets/headers/Header_enroll.jpg";

// HEADER DATA (pic + text)
export const enrollHeaderData = {
    picURL: EnrollHeader,
    imgTitle: "Inscriptions",
    titleFR: "Inscription",
    titleEN: "Enroll"
}

// TEXT

export const enrollParagraphsFR = [
    "Avant de vous lancer dans cette merveilleuse aventure avec moi, vous avez la possibilité de prendre un ou deux cours d’essai afin que vous puissiez voir si ma méthode d’enseignement vous convient.",
    "Le formulaire ci-dessous ne vous engage en rien c’est simplement une demande pour un premier cours. Merci de remplir tout les champs du formulaire (*).",
]

export const enrollParagraphsEN = [
    "Before embarking on this wonderful adventure with me, you have the option of taking one or two trial lessons so that you can see if my teaching method is suitable for you.",
    "Le formulaire ci-dessous ne vous engage en rien c’est simplement une demande pour un premier cours. Please fill out all fields in the form (*).",
]

// FORM SELECT BOX choices
export const levelOptions = [
    {value:"débutant", choiceFR:"Débutant", choiceEN: "Beginner"},
    {value:"intermédiaire", choiceFR:"Intermédiaire", choiceEN: "Intermediary"},
    {value:"avancé", choiceFR:"Avancé", choiceEN: "Advanced"},
    {value:"semi-pro", choiceFR:"Semi-pro", choiceEN: "Semi-pro"},
    {value:"professionnel", choiceFR:"Professionnel", choiceEN: "Professionnal"}
];

export const dayOptions = [
    {value:"lundi", choiceFR:"Lundi", choiceEN: "Monday"},
    {value:"mardi", choiceFR:"Mardi", choiceEN: "Tuesday"},
    {value:"mercredi", choiceFR:"Mercredi", choiceEN: "Wednesday"},
    {value:"jeudi", choiceFR:"Jeudi", choiceEN: "thursday"},
    {value:"vendredi", choiceFR:"Vendredi", choiceEN: "Friday"}
];

export const hourOptions = [
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

export const formMessages = {
    successFR: "Votre demande d'inscription a bien été envoyée !",
    successEN: "Enrollment inquiry successfully sent !",
    errorFR: "Le serveur ne répond pas ! Réessayer dans quelques minutes ...",
    errorEN: "Server is not responding ! Try again in a couple of minutes."
}