import Tania1 from "../../../assets/headers/Header_Tania1.jpg";
import Vocalist from "../../../assets/headers/Header_Vocalist2.jpg";
import GoldMic from "../../../assets/headers/Header_GoldMic.jpg";

// === Slider images & Text === //

export const slides = [
    {
        url: Tania1, 
        imgTitle:"Tania", 
        titleFR:<>Cours <span className="cursiveSpan">de</span> chant</>,
        titleEN:<>Voice <span className="cursiveSpan">Lessons</span></>,
        descriptionFR: "Vous aimez chanter et vous désirez améliorer votre puissance vocale, élargir votre registre, tenir de longues notes et ne plus être enroué·e·x ou vous aspirez simplement à avoir un moment à vous pour chanter et découvrir votre voix.",
        descriptionEN: "You love to sing and want to improve your vocal power, expand your range, hold long notes, and no longer have voice issues or you simply aspire to have a moment to yourself to sing and discover your voice.", 
        buttonFR: "S'inscrire",
        buttonEN: "Book a lesson",
        buttonURL: "/inscription"
    },
    {
        url: Vocalist, 
        imgTitle:"Getúlio Moraes", 
        titleFR:<>Vocaliste <span className="cursiveSpan">confirmé·e·x</span> ?</>,
        titleEN:<>Confirmed <span className="cursiveSpan">singer</span> ?</>, 
        descriptionFR: "Vous êtes chanteur·euse·x dans un groupe ou auteur/compositeur, vous rêvez de trouver une manière unique d’interpréter vos morceaux en vue de concerts, d’un casting ou de l’enregistrement d’un album.",
        descriptionEN: "You already are a singer in a band or a songwriter, you dream of finding a unique way to interpret your songs in preparation for concerts, auditions or recording an album.", 
        buttonFR: "Plus d'infos",
        buttonEN: "More info",
        buttonURL: "/methode"
    },
    {
        url: GoldMic, imgTitle:"Gold Mic", 
        titleFR:<>Métiers <span className="cursiveSpan"> de la </span>voix</>,
        titleEN:<>Voice <span className="cursiveSpan"> professional</span></>,
        descriptionFR: "Vous êtes comédien·ne·x ou orateur·trice·x de profession (par ex: avocat·e·x, conférencier·ère·x, manageur) et vous aimeriez vous sentir à l’aise face aux autres avec une voix posée et stable. Vous avez besoin d’enregistrer votre voix et avez besoin de conseils.",
        descriptionEN: "You are an actor or a public speaker (such as a lawyer, educator, or manager), and you would like to feel comfortable speaking in front of others with a poised and steady voice. You need to record your voice and require some advice.", 
        buttonFR: "Découvrir",
        buttonEN: "Discover",
        buttonURL: "/methode"
    }
]