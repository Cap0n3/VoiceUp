import Tania1 from "../../../assets/headers/Header_Tania1.jpg"
import ShowerDude from "../../../assets/headers/Header_ShowerDude.jpg"
import GoldMic from "../../../assets/headers/Header_GoldMic.jpg"

// === Slider images & Text === //

export const slides = [
    {
        url: Tania1, 
        imgTitle:"Tania", 
        titleFR:<>Cours <span className="cursiveSpan">de</span> chant</>,
        titleEN:<>Voice <span className="cursiveSpan">Lessons</span></>,
        descriptionFR: "Vous aimez chanter et vous désirez améliorer votre puissance vocale, élargir votre registre, tenir de longues notes et ne plus être enroué·e·x. Vous aspirez simplement à avoir un moment à vous pour chanter et découvrir votre voix.",
        descriptionEN: "You love to sing and want to improve your vocal power, expand your range, hold long notes, and no longer have voice issues or you simply aspire to have a moment to yourself to sing and discover your voice.", 
        buttonFR: "S'inscrire",
        buttonEN: "Book a lesson",
        buttonURL: "/inscription"
    },
    {
        url: ShowerDude, 
        imgTitle:"Shower Dude", 
        titleFR:<>Une <span className="cursiveSpan">forte</span> senteur ?</>,
        titleEN:<>Take <span className="cursiveSpan">a good</span> shower</>, 
        descriptionFR: "Hé bah prend une douche, you smelly cat !",
        descriptionEN: "It feels so good to take a good shower !", 
        buttonFR: "Plus d'infos",
        buttonEN: "More info",
        buttonURL: "/inscription"
    },
    {
        url: GoldMic, imgTitle:"Gold Mic", 
        titleFR:<>Chante <span className="cursiveSpan">maintenant</span></>,
        titleEN:<>30 <span className="cursiveSpan">Day</span> Singer</>,
        descriptionFR: "Viens t'inscrire à l'école du micro d'or !",
        descriptionEN: "The fundamentals of singing have never been this fun and easy completely step-by-step so you know exactly what to do everytime you practice !", 
        buttonFR: "Découvrir",
        buttonEN: "Discover",
        buttonURL: "/inscription"
    }
]