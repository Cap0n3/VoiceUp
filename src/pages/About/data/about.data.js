import TaniaHeader from "../../../assets/headers/Header_Tania2.jpg";
import BadShore from "../../../assets/VidThumbnail/BadShore.jpg";
import SlideOver from "../../../assets/VidThumbnail/SlideOverMe.jpg";
import Love from "../../../assets/VidThumbnail/LoveSailedLive.jpg";
import NotASaint from "../../../assets/VidThumbnail/NotASaint.jpg";

// HEADER DATA (pic + text)
export const teacherHeaderData = {
    picURL: TaniaHeader,
    imgTitle: "Tania",
    titleFR: "",
    titleEN: "",
}

// Teacher description data
export const descrParagraphs = {
    descriptionFR: [
        "Tania Guillin possède plus de 30 ans d'expérience dans le chant. Sa passion pour le chant commence dès l'âge de 6 ans lorsqu'elle rejoint la chorale “la Maitrise” au Conservatoire populaire de Genève. Pendant une décennie, elle participe à divers opéras, comédies musicales et concerts avec orchestre symphonique au Grand-Théâtre.",
        "En 2001, elle obtient sa maturité en option musique avant de continuer ses études de chant classique, solfège et harmonie au Conservatoire populaire de Genève.",
        "En 2006, elle sort diplômée de l'ETM, une école privée de musique, après trois ans et demi d'études (ancien cursus professionnel). Pendant sa formation, elle découvre le monde de la musique actuelle et participe à de nombreux concerts et enregistrements en studio, notamment avec son groupe de pop-rock Solartones (groupe signé sur le label Idole Musique). Pour financer sa formation, Tania travaille dans un magasin de disques et devient manager en 2009.",
        "Entre 2006 et 2010, grâce à la structure FBI, elle encadre et anime des ateliers d’écriture de chansons pour enfants et adolescents, qu’elle accompagne en suite en studio et sur scène.",
        "En 2011, elle suit une formation intensive de quatre mois au Complete Vocal Institute à Copenhague, où elle découvre la méthode Complete Vocal Technique. Cette technique révolutionne sa manière de chanter et d'enseigner.",
        "En 2012, elle crée sa propre structure, Voice Up, et commence à enseigner le chant à plein temps.",
        "En 2014, Tania gagne le concours de chant transfrontalier Seynod Voice, remportant ainsi l'enregistrement d'un album de 12 titres. Pendant deux ans, elle tourne avec son projet solo Tania Silversen.",
        "En 2022, elle devient experte aux examens de chant et anime des ateliers de coaching vocal au collège de Saussure pour les élèves en option musique.",
        "En 2023, après trois ans d'études, elle est diplômée du Complete Vocal Institute et est maintenant reconnue comme professeure attitrée de la Complete Vocal Technique.",
        "En dehors de l'enseignement, Tania est une musicienne active de la scène locale. Depuis 2016, elle joue en tant que guitariste-chanteuse avec son groupe de composition rock, Killing Volts. Ils ont à leur actif deux albums et plusieurs clips vidéo, et ont joué dans de nombreux festivals et salles à l’international. Tania chante également avec les Piscoppopers, une revue queer déjantée de reprises pop réarrangées."
    ],
    descriptionEN: [
        "Tania Guillin has over 30 years of experience in singing. Her passion for singing began at the age of 6 when she joined “la Maitrise” choir at the Geneva Conservatory. For a decade, she participated in various operas at the Grand-Théâtre, musicals, and concerts with symphonic orchestras.",
        "In 2001, she obtained her maturité degree with a music option before continuing her studies in classical singing, music theory, and harmony at the Geneva Conservatory.",
        "In 2006, she graduated from ETM, a private music school, after three and a half years of study (former professional curriculum). During her training, she discovered the world of rhythmical music and participated in numerous concerts and studio recordings, notably with her pop-rock group Solartones (signed on the label Idole Musique). To finance her education, Tania worked in a record store and became a manager in 2009.",
        "Between 2006 and 2010, through the FBI structure, she supervised and led songwriting workshops for children and teenagers, whom she then accompanied in the studio and on stage.",
        "In 2011, she completed an intensive four-month training course at the Complete Vocal Institute in Copenhagen, where she discovered the Complete Vocal Technique method. This technique revolutionized her way of singing and teaching.",
        "In 2012, she created her own structure, Voice Up, and began teaching singing full-time.",
        "In 2014, Tania won the cross-border singing competition Seynod Voice, winning the recording of a 12-track album. For two years, she toured with her solo project Tania Silversen.",
        "In 2022, she became an expert in singing exams and led vocal coaching workshops at the de Saussure College in Geneva, for students in the music option.",
        "In 2023, after three years of study, she graduated from the “Complete Vocal Institute” and is now recognized as an authorized teacher in the Complete Vocal Technique.",
        "Outside of teaching, Tania is an active musician in the local music scene. Since 2016, she has played as a guitarist-singer with her rock composition group, Killing Volts. They have two albums and several music videos to their credit, and have played in numerous festivals and venues internationally. Tania also sings with the Piscoppopers, a quirky queer pop covers review."
    ]
    
}

// Videos data
export const vidsInfos = [
    {
        thumbnail: BadShore,
        title: "Bad Shore - Tania Silversen", // Not in modal (removed for now)
        /* Get embed link in youtube iframe */
        embed: "https://www.youtube.com/embed/X9YZBhwcUZ0",
        descriptionFR: "Extrait du premier album “Now I Know”, Tania Silversen, LB Records 2016.",
        descriptionEN: "From the debut album “Now I Know”, Tania Silversen, LB Records 2016."
    },
    {
        thumbnail: SlideOver,
        title: "Slide Over Me (Live) - Tania Silversen",
        /* Get embed link in youtube iframe */
        embed: "https://www.youtube.com/embed/WuBVXnvzdzA",
        descriptionFR: "Tania Silversen live à l'Alhambra de Genève en juillet 2017.",
        descriptionEN: "Tania Silversen live at Alhambra (Geneva) in july 2017."
    },
    {
        thumbnail: Love,
        title: "Love Sailed (Live TV) - Killing Volts",
        /* Get embed link in youtube iframe */
        embed: "https://www.youtube.com/embed/47q9FcRujgU",
        descriptionFR: "Chanson de Killing Volts “Love Sailed” interprétée en live dans l'émission Mégaphone sur Léman Bleu.",
        descriptionEN: "Killing Volts song “Love Sailed” performed live in Mégaphone (Léman Bleu)."
    },
    {
        thumbnail: NotASaint,
        title: "Not A Saint - Killing Volts",
        /* Get embed link in youtube iframe */
        embed: "https://www.youtube.com/embed/tCGe_CVif2E",
        descriptionFR: "Extrait du premier album de Killing Volts « Symptomatique Dilemma » (2021)",
        descriptionEN: "Taken from Killing Volts First album “Symptomatic Dilemma” (2021)."
    }
]
