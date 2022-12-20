import GuitarIcon from "../../../assets/icons/misc/guitar_icon.js";
import MasksIcon from "../../../assets/icons/misc/masks_icon.js";
import MicIcon from "../../../assets/icons/misc/mic_icon.js";
import Vinz from "../../../assets/images/students/student_Vincent1.jpg";
import Lea from "../../../assets/images/students/student_Lea1.jpg";
import Val from "../../../assets/images/students/student_Val1.jpg";

// === Infos section data === //

export const SingSectionData = {
    // Normal or reverse
    direction : "normal",
    icon : <MicIcon />,
    image : Vinz,
    imgTitle: "Vincent",
    titleFR : "Chanter",
    titleEN : "Sing",
    // Each list element is a <p>
    descriptionFR : ["Vous aimez chanter et vous désirez améliorer votre soutien, votre puissance vocale ou élargir votre registre vocal. Ou vous aspirez simplement à avoir un moment à vous pour chanter et vous exprimer."],
    descriptionEN : ["Some text in english and some more jibberish to descibe a big bowl of nothing to advertise a total void."]
}

export const PlaySectionData = {
    // Normal or reverse
    direction : "reverse",
    icon : <GuitarIcon />,
    image : Lea,
    imgTitle: "Lea",
    titleFR : "Jouer",
    titleEN : "Play",
    // Each list element is a <p>
    descriptionFR : ["Vous êtes chanteur ou chanteuse dans un groupe ou auteur/compositeur, vous rêvez de trouver une manière personnelle d’interpréter vos morceaux en vu de concerts, de castings ou de l’enregistrement d’un album."],
    descriptionEN : ["Some other text in english and some more jibberish to descibe a big bowl of nothing to advertise a total void."]
}

export const TalkSectionData = {
    // Normal or reverse
    direction : "normal",
    icon : <MasksIcon />,
    image : Val,
    imgTitle: "Valérie",
    titleFR : "Parler",
    titleEN : "Talk",
    // Each list element is a <p>
    descriptionFR : ["Vous êtes comédien ou orateur de profession (avocat, conférencier, manager ou professeur) vous aimeriez vous sentir à l’aise face à votre public et poser votre voix."],
    descriptionEN : ["Some other text about 'talking' in english and some more jibberish to descibe a big bowl of nothing to advertise a total void."]
}
