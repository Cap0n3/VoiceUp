import TaniaHeader from "../../../assets/headers/Header_Tania2.jpg";
import BadShore from "../../../assets/VidThumbnail/BadShore.jpg";
import SlideOver from "../../../assets/VidThumbnail/SlideOverMe.jpg";
import LowTV from "../../../assets/VidThumbnail/LowTV.jpg";
import MyName from "../../../assets/VidThumbnail/MyName.jpg";

// HEADER DATA (pic + text)
export const teacherHeaderData = {
    picURL: TaniaHeader,
    imgTitle: "Tania",
    titleFR: "À propos",
    titleEN: "About",
}

// Teacher description data
export const descrParagraphs = [
    "Tania Guillin a plus de 30 ans d’expérience dans le chant. Elle commença à chanter très jeune dès l’âge de 6 ans dans la chorale du Conservatoire populaire de Genève grâce à laquelle elle pu participer à de nombreux opéras aux Grand-Théâtre ainsi qu’à des comédies musicales et concerts avec orchestre symphonique. Passionnée par le chant, elle continua ses études de chant classique au conservatoire durant 7 ans en parallèle à la maturité artistique musique.",
    "Après avoir obtenue la maturité, elle suivit durant 3 ans et demi les cours de la section professionnelle de l’ETM et fut diplômée en 2004 (équivalent à un diplôme de HEM), où elle découvrit le monde de la musique actuelle. Durant cette formation elle participa à de nombreux concerts et enregistrements en studios, notamment en parallèle avec son groupe de pop-rock « Solartones » (groupe signé avec deux albums et un EP). Entre 2006 et 2010 elle encadra et anima des ateliers d’écriture de chansons, qu’elle coacha ensuite en studio et sur scène.",
    "En 2011, elle suivit une formation intensive au Complete Vocal Institute à Copenhague ou elle apprit la méthode de la « Complete Vocal Technique ». Une technique qui, selon elle, révolutionnera sa manière d’enseigner et de chanter. D’ailleurs ce fut l’année où elle commença à enseigner la chant avec sa structure Voice Up.",
    "En 2014 elle fut la gagnante d’un concours de chant transfrontalier lors duquel elle gagna l’enregistrement d’un album d’une valeur de 35’000 euros. Suite auquel elle tourna avec son projet solo Tania Silversen durant deux ans.",
    "Elle enseigne maintenant le chant à Genève et depuis 2020 elle suit la formation de 3 ans afin de devenir une professeure attitrée de la technique CVT. Tania est aussi une musicienne active de la scène locale. Elle joue en tant que guitariste et chanteuse avec son groupe de power rock « Killing Volts ». Ils partirent notamment en tournée en Russie en 2018."
]

// Videos data
export const vidsInfos = [
    {
        thumbnail: BadShore,
        title: "Bad Shore - Tania Silversen", // Not in modal (removed for now)
        /* Get embed link in youtube iframe */
        embed: "https://www.youtube.com/embed/X9YZBhwcUZ0",
        description: "Do tempor velit qui exercitation commodo amet proident ut Lorem."
    },
    {
        thumbnail: SlideOver,
        title: "Slide Over Me (Live) - Tania Silversen",
        /* Get embed link in youtube iframe */
        embed: "https://www.youtube.com/embed/WuBVXnvzdzA",
        description: "Sunt incididunt mollit irure nulla ipsum laborum mollit. Duis elit in labore dolor exercitation sint officia enim ipsum. Adipisicing id adipisicing fugiat excepteur. Aliqua adipisicing velit anim excepteur aute officia elit Lorem sunt reprehenderit. Proident voluptate in elit consequat ullamco eiusmod aliqua voluptate quis qui."
    },
    {
        thumbnail: LowTV,
        title: "Low (Live TV) - Killing Volts",
        /* Get embed link in youtube iframe */
        embed: "https://www.youtube.com/embed/qE5aqAhDoOU",
        description: "Ut in laborum eiusmod duis Lorem est excepteur excepteur veniam in officia. Nisi duis do id exercitation cillum magna sint labore adipisicing deserunt fugiat culpa dolore nostrud. Do sunt eiusmod occaecat aute aute ea dolor labore esse officia proident. Fugiat esse et ipsum ut fugiat ad amet excepteur non occaecat cillum Lorem reprehenderit mollit. Velit irure duis quis ut do. Eu officia pariatur ex non eu sint excepteur consequat dolor reprehenderit sint. Aute nostrud ipsum qui laborum in exercitation cillum sit do occaecat. Enim sint labore anim laborum est ullamco excepteur eiusmod laborum mollit consequat dolore. Magna amet ut consectetur aliqua deserunt deserunt eiusmod enim adipisicing proident consectetur magna esse. Ut et cupidatat laborum nostrud consectetur ullamco consectetur tempor tempor dolor. Culpa amet sint ad ut ut voluptate sunt exercitation ullamco eu veniam voluptate. Lorem qui quis est ipsum nisi id occaecat in dolore. Magna dolor minim amet aute mollit nostrud aliquip commodo aliquip ut. Occaecat et anim laborum minim nostrud dolore minim."
    },
    {
        thumbnail: MyName,
        title: "My Name - Solartones",
        /* Get embed link in youtube iframe */
        embed: "https://www.youtube.com/embed/gA_u0RBfmh8",
        description: "Veniam sint dolore cillum velit sint ipsum ea voluptate magna ad aliquip laborum consequat. Elit dolor dolor laboris consectetur voluptate qui occaecat commodo incididunt. Officia minim sunt incididunt aliquip eu velit sunt ad in eiusmod cillum."
    }
]
