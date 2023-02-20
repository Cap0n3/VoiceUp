import DkBlueHeader from "../../../assets/images/stock/PriceHeaderDkBlue.jpg";
import PurpleHeader from "../../../assets/images/stock/PriceHeaderPurple.jpg";
import GoldHeader from "../../../assets/images/stock/PriceHeaderGold.jpg";
import PricingHeader from "../../../assets/headers/Header_Pricing.jpg";

// === Header === //
export const pricingHeaderData = {
    picURL: PricingHeader,
    imgTitle: "Pricing",
    titleFR: "Les formules",
    titleEN: "Pricing",
}

// === Price Cards === //
export const WeeklyAdult = {
    headerImage: PurpleHeader,
    animIcon: "rocket",
    bckColors: ["#896FBC", "#BDAFDA"],
    cardNameFR: "Hebdomadaire",
    cardNameEN: "Adult Weekly",
    priceTag: 320,
    perFR: "Mois",
    perEN: "Month", 
    // Max 6 bullets
    bulletsFR: ["Idéal pour avancer vite", "1h de cours toutes les semaines", "Niveau débutant, moyen et avancé", "Cours en Juillet", "Cours présentiels ou online"],
    bulletsEN: ["Perfect to learn fast", "1 hours every week", "For beginner, intermediate & avanced", "Lessons in july", "In-person or online lessons"]
}

export const BiAdult = {
    headerImage: DkBlueHeader,
    animIcon: "turtle",
    bckColors: ["#1B1734", "#896FBC"],
    cardNameFR: "Bimensuel",
    cardNameEN: "Adult Bimonthly",
    priceTag: 170,
    perFR: "Mois",
    perEN: "Month", 
    // Max 6 bullets
    bulletsFR: ["Pour les personnes disciplinées", "1h de cours toute les deux semaines", "Niveau moyen et avancé", "Cours en Juillet", "Cours présentiels ou online"],
    bulletsEN: ["For students with a strong self-discipline", "1h every two weeks", "Level intermediate & advanced", "Lessons in july", "In-person or online lessons"]
}

export const OnDemand = {
    headerImage: GoldHeader,
    animIcon: "gear",
    bckColors: ["#D9A47D", "#D39264"],
    cardNameFR: "Cours à la carte",
    cardNameEN: "On demand",
    priceTag: 90,
    perFR: "Heure",
    perEN: "Hour", 
    // Max 6 bullets
    bulletsFR: ["Idéal pour un petit projet", "100% Flexible", "Créez votre planning de cours", "Carte cadeau", "Cours présentiels ou online"],
    bulletsEN: ["Ideal for small project", "100% Flexible", "Create your own lesson planning", "Gift card", "In-person or online lessons"]
}

// === Comparison Table === //
export const ComparisonTable = [
    {
        titleFR: "Débutants",
        titleEN: "Beginner",
        descriptionFR: "Vous êtes un débutant, vous avez peu ou pas d’expérience du chant et de la voix.",
        descriptionEN: "You are a beginner, you have little or no experience in singing and voice.",
        tooltipSize: {width: 200, height: 100},
        biAdult: false,
        weeklyAdult: true,
        onDemand: false,
    },
    {
        titleFR: "Intermédiaire",
        titleEN: "Intermediate",
        descriptionFR: "Vous chantez déjà depuis plusieurs années mais vous manquez de pratique et de technique.",
        descriptionEN: "You have been singing for several years already but you lack practice and technique.",
        tooltipSize: {width: 200, height: 100},
        biAdult: true,
        weeklyAdult: true,
        onDemand: true,
    },
    {
        titleFR: "Avancés",
        titleEN: "Advanced",
        descriptionFR: "Vous chantez depuis plusieurs années et vous possédez une bonne base technique. Vous avez participé à plusieurs projets, concerts, pièces, enregistrement, etc...",
        descriptionEN: "You have been singing for several years and have a good technical foundation. You have participated in several projects, concerts, plays, recordings, etc…",
        tooltipSize: {width: 200, height: 180},
        biAdult: true,
        weeklyAdult: true,
        onDemand: true,
    },
    {
        titleFR: "Cours en ligne",
        titleEN: "Online lessons",
        descriptionFR: "Des cours donnés en ligne grâce à l’application Zoom.",
        descriptionEN: "Online lessons with Zoom app.",
        tooltipSize: {width: 200, height: 100},
        biAdult: true,
        weeklyAdult: true,
        onDemand: true,
    },
    {
        titleFR: "Progrès rapide",
        titleEN: "Fast progress",
        descriptionFR: "Des progrès rapides sont garantis si l’élève travaille régulièrement en dehors des leçons.",
        descriptionEN: "Rapid progress is guaranteed if the student works regularly at home.",
        tooltipSize: {width: 200, height: 100},
        biAdult: false,
        weeklyAdult: true,
        onDemand: false,
    },
    {
        titleFR: "Concert",
        titleEN: "Concert",
        descriptionFR: "Si vous le souhaitez, vous pourrez participer à un concert de fin d’année devant un public !",
        descriptionEN: "If you wish, you will be able to participate in an end-of-year concert in front of an audience !",
        tooltipSize: {width: 200, height: 100},
        biAdult: true,
        weeklyAdult: true,
        onDemand: false,
    },
    {
        titleFR: "Rattrapages",
        titleEN: "Make-up classes",
        descriptionFR: "Vous aurez jusqu’à 4 rattrapages par année si vous manquez des cours.",
        descriptionEN: "You will have up to 4 make-up classes per year if you miss any lessons.",
        tooltipSize: {width: 200, height: 100},
        biAdult: true,
        weeklyAdult: true,
        onDemand: false,
    }
]

// === FAQ section === //
export const QuestionsAnswers = [
    {
        questionFR: "Est-ce que je dois connaitre le solfège ou la théorie musicale pour suivre les cours de chant ?",
        questionEN: "Do I need to know music theory or solfeggio to take singing lessons ?",
        answerFR: "Non, il n’est pas nécessaire d’avoir fait du solfège ou de la théorie musicale avant de faire des cours de chant. Nous travaillerons avec les paroles et développerons votre capacité à relever les morceaux par l’écoute. Si nécessaire nous travaillerons sur le placement rythmique et les sensation des sous-divisions du temps dans le corps durant les sessions.",
        answerEN: "No, it is not necessary to have prior knowledge of music theory or solfeggio to take singing lessons. We’ll work with lyrics and develop your ability to learn songs by ear. If needed, we work on rhythm placement and the sensation of subdivisions of time in the body during sessions."
    },
    {
        questionFR: "Est-ce que je suis libre de choisir mon répertoire de chanson ?",
        questionEN: "Am I free to choose my own song repertoire ?",
        answerFR: "Tous les styles de musique actuelle sont les bienvenus (pop, rock, jazz, chanson française, variété, country, world music, métal, blues, americana, hip-hop, rap, etc…). Vous serez libre de choisir votre propre répertoire de chansons. Vous apporterez en cours ce que vous désirez travailler et je vous guiderai afin que vous puissiez développer votre voix selon vos goûts musicaux.",
        answerEN: "All contemporary music styles are welcome (pop, rock, jazz, French chanson, variety, country, world music, metal, blues, Americana, hip-hop, rap, etc.). You’ll be free to choose your own song repertoire. You’ll simply bring what you want to work on, and I’ll guide you to develop your voice according to your musical tastes."
    },
    {
        questionFR: "Est-ce que les vacances sont comprises dans le forfait ?",
        questionEN: "Are holidays included in the package ?",
        answerFR: "Oui les vacances de Noël et de Pâques sont comprises dans le forfait. Les cours débutent en même temps que les écoles à la fin du mois d’août afin de compenser les cours qui n’ont pas lieu durant les vacances. Les mois facturés vont de septembre à juillet (inclus) pour les adultes.",
        answerEN: "Yes, Christmas and Easter holidays are included in the package. Lessons start at the end of August, along with the schools, to compensate for the lessons that do not take place during the holidays. The billing cycle goes from September to July (inclusive) for adults."
    },
    {
        questionFR: "Si je manque un cours comment ça se passe ?",
        questionEN: "What happens if I miss a lesson ?",
        answerFR: "Si votre absence à été communiquée au moins 24h avant l’heure du cours, il pourra être rattrapé pour autant que vous n’avez pas excédé le nombre de rattrapage total admis dans l’année (4 rattrapages) . Dans le cas contraire le cours sera perdu, même en cas de maladie. Il relève de la responsabilité de l’élève de programmer les rattrapages avec la professeure. Le cours manqué devra être rattrapé dans les 6 mois suivant la date de la première annulation.",
        answerEN: "If you communicate your absence at least 24 hours before the lesson, it can be made up. Otherwise, the lesson will be lost, even in case of illness. It is then the responsibility of the student to schedule make-up lessons with the teacher. The missed lesson must be made up within 6 months from the date of the first cancellation."
    },
    {
        questionFR: "Est-ce que je peux venir en cours si je suis malade ?",
        questionEN: "Can I attend lessons if I am sick ?",
        answerFR: "Non, surtout au début de la maladie afin de ne pas me retransmettre les microbes et aussi pour votre santé vocale. Il n’est pas conseiller de chanter lorsqu’on a de la fièvre, une laryngite ou toutes infections dans la gorge.",
        answerEN: "No, especially at the beginning of the illness to avoid transmitting germs to me and also for your vocal health. It is not advisable to sing when you have a fever, laryngitis, or any infections in the throat."
    },
    {
        questionFR: "Comment puis-je avoir une place dans vos cours ?",
        questionEN: "How can I get a spot in your classes ?",
        answerFR: "Je suis souvent complète. Le meilleur moment pour avoir une place est en juin, n’attendez pas le mois d’août ou de septembre pour être sûr-e-x d’avoir une place pour la rentrée. J’ai un système de liste d’attente valable 6 mois. N’hésitez pas à me relancer, la persévérance et la motivation marche bien. Il y a des désistements durant l’année aussi donc n’hésitez pas à m’envoyer une demande.",
        answerEN: "I am often fully booked. The best time to get a spot is in June; don't wait until August or September to be sure to have a spot for the start of the school year. I have a waiting list system valid for 6 months. Don't hesitate to follow up with me; perseverance and motivation work well. There are also cancellations during the year, so feel free to send me a request."
    },
    {
        questionFR: "Les inscriptions sont-elles ouvertes durant toute l'année ?",
        questionEN: "Are registrations open all year round ?",
        answerFR: "Oui bien-sûr ! Vous pouvez vous inscrire à tout moment durant l’année. ",
        answerEN: "Yes of course ! You can register at any time during the year."
    },
    {
        questionFR: "À quoi m’engage le contrat ?",
        questionEN: "What am I committing to with the contract ?",
        answerFR: "Vous vous engagez pour un minimum de 3 mois et par la suite vous aura un mois de préavis si vous souhaitez arrêter les cours.",
        answerEN: "You commit to a minimum of 3 months, and after that, you’ll have one month's notice if you want to stop the lessons."
    },
    {
        questionFR: "En combien de temps puis-je apprendre à chanter ?",
        questionEN: "How long does it take to learn how to sing ?",
        answerFR: "La fameuse règle des 10’000 heures de pratique est un bon indice. Il s’agit du nombre d’heures moyen nécessaire pour attendre une bonne maîtrise d’un instrument ou du chant (ou de n’importe quelle autre forme d’art). Ce n’est pas une règle exacte mais ces heures doivent être prises en compte. Pour faire simple, le temps que vous prendrez pour pratiquer en dehors des cours détermineras la rapidité de votre avancée.",
        answerEN: "The famous 10,000 hours rule of practice is a good indicator. It represents the average number of hours needed to achieve a good mastery of an instrument, singing, or any other form of art. It is not an exact rule, but these hours should be taken into account. To put it simply, the time you spend practicing outside of lessons will determine the speed of your progress."
    },
]