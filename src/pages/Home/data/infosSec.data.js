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
    titleEN : "Singing",
    // Each list element is a <p>
    descriptionFR : ["Une bonne technique de chant vous permet de pouvoir chanter tout ce que vous désirez. Elle vous permet d’atteindre toutes les notes aiguës et graves de votre tessiture, de tenir de longues notes ou de faire de longs phrasés, d’avoir le volume désiré et d’éviter la fatigue vocale. Tout le monde peut apprendre à chanter ! Une fois qu’on comprend les mécanismes naturels de la voix, comment les utiliser et comment les développer, on peut apprendre toutes les techniques nécessaires pour devenir un·e·x  bon·ne·x chanteur·euse·x."],
    descriptionEN : ["A good singing technique allows you to sing anything you want. It enables you to have a large vocal range (high and low notes), hold long notes or long phrases, achieve the desired volume, and avoid hoarsness. Anyone can learn to sing ! Once you understand the natural mechanisms of the voice, how to use them and how to develop them, you can learn all the necessary techniques to become a good singer."]
}

export const PlaySectionData = {
    // Normal or reverse
    direction : "reverse",
    icon : <GuitarIcon />,
    image : Lea,
    imgTitle: "Lea",
    titleFR : "Créer",
    titleEN : "Create",
    // Each list element is a <p>
    descriptionFR : ["L’enregistrement d’un album est toujours une étape importante dans la vie d’un·e·x chanteur·euse·x. Il permet de concrétiser un projet, un objectif ou un rêve. Un accompagnement  préparatoire à l’enregistrement vous permettra de le réaliser dans les meilleures conditions possibles. Un coaching sur la prononciation anglaise/française, sur l’interprétation du texte, l’intention et l’émotion à travers la voix, la justesse, sur les dynamiques et volumes, vous permettra de trouver une manière unique d’interpréter vos morceaux. Ces sessions vous préparent aussi pour des castings, la scène et des compétitions de chant."],
    descriptionEN : ["Recording an album is a steping stone in the career of a singer. It allows you to achieve a project, an objective or a dream. To be well prepared for a recording will enable you to have the best outcome and record under the best possible conditions. The coaching will focus mainly on English/French pronunciation, interpreting the text, conveying intention and emotion through the voice, beeing in picht, dynamics and volume. This training will allow you to find a unique way of interpreting your songs. These sessions also prepare you for auditions, stage performances, and singing competitions."]
}

export const TalkSectionData = {
    // Normal or reverse
    direction : "normal",
    icon : <MasksIcon />,
    image : Val,
    imgTitle: "Valérie",
    titleFR : "Parler",
    titleEN : "Speaking",
    // Each list element is a <p>
    descriptionFR : ["Notre voix est l’expression de notre personne. Que vous soyez comédien, voix-off ou orateur de profession (avocat, conférencier, manager, professeur, etc...), savoir maîtriser sa voix lorsque vous vous exprimez devant une personne ou un groupe, permet de véhiculer le bon message. Un travail  en profondeur sur le rythme, les accentuations, l’intonation, la hauteur et le volume feront de vous un orateur volubile et charismatique. Apprenez à adapter votre voix selon la situation donnée."],
    descriptionEN : ["Our voice is the expression of our person. Whether you're an actor, voice-over artist, or a professional speaker (lawyer, speaker, manager, teacher, etc...), knowing how to control your voice when expressing yourself to a person or a group enables you to convey the right message. In-depth work on rhythm, accentuation, intonation, pitch, and volume will make you a voluble and charismatic speaker. You will learn to adapt your voice in any situation."]
}
