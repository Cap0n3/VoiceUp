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
        tooltipSize: {width: 200, height: 110},
        biAdult: false,
        weeklyAdult: true,
        onDemand: false,
    },
    {
        titleFR: "Intermédiaire",
        titleEN: "Intermediate",
        descriptionFR: "Vous chantez déjà depuis plusieurs années mais vous manquez de pratique et de technique.",
        descriptionEN: "You have been singing for several years already but you lack practice and technique.",
        tooltipSize: {width: 200, height: 130},
        biAdult: true,
        weeklyAdult: true,
        onDemand: true,
    },
    {
        titleFR: "Avancés",
        titleEN: "Advanced",
        descriptionFR: "Vous chantez depuis plusieurs années et vous possédez une bonne base technique. Vous avez participé à plusieurs projets, concerts, pièces, enregistrement, etc...",
        descriptionEN: "You have been singing for several years and have a good technical foundation. You have participated in several projects, concerts, plays, recordings, etc…",
        tooltipSize: {width: 200, height: 200},
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
        tooltipSize: {width: 200, height: 110},
        biAdult: false,
        weeklyAdult: true,
        onDemand: false,
    },
    {
        titleFR: "Concert",
        titleEN: "Concert",
        descriptionFR: "Si vous le souhaitez, vous pourrez participer à un concert de fin d’année devant un public !",
        descriptionEN: "If you wish, you will be able to participate in an end-of-year concert in front of an audience !",
        tooltipSize: {width: 200, height: 130},
        biAdult: true,
        weeklyAdult: true,
        onDemand: false,
    },
    {
        titleFR: "Rattrapages",
        titleEN: "Make-up classes",
        descriptionFR: "Vous aurez jusqu’à 4 rattrapages par année si vous manquez des cours.",
        descriptionEN: "You will have up to 4 make-up classes per year if you miss any lessons.",
        tooltipSize: {width: 200, height: 110},
        biAdult: true,
        weeklyAdult: true,
        onDemand: false,
    }
]

// === FAQ section === //
export const QuestionsAnswers = [
    {
        questionFR: "Quels sont les avantages de prendre des cours de chant ?",
        questionEN: "What are the benefits of taking singing lessons ?",
        answerFR: "Les cours de chant aident à améliorer la technique vocale, à augmenter la confiance en soi, à développer l'expression artistique et à réduire le stress. Les cours de chant aident également à améliorer la qualité de la voix et à enseigner des compétences utiles pour la performance sur scène et en studio.",
        answerEN: "Singing lessons help improve vocal technique, increase self-confidence, develop artistic expression, and reduce stress. Singing lessons also help improve the quality of the voice and teach useful skills for performance on stage and in the studio."
    },
    {
        questionFR: "Ai-je besoin d'avoir de l'expérience en chant ou en solfège avant de prendre des cours ?",
        questionEN: "Do I need to have experience in singing or music theory before taking lessons ?",
        answerFR: "Non, il n'est pas nécessaire d'avoir de l'expérience ni en chant, ni en solfège, avant de prendre des cours. Les cours de chant peuvent être adaptés aux besoins et au niveau de chaque étudiant, qu'il s'agisse d'un·x·e débutant·e·x ou d'un·x·e chanteur·euse·x plus expérimenté.",
        answerEN: "No, it is not necessary to have any experience in singing or music theory before taking lessons. Singing lessons can be tailored to the needs and level of each student, whether they are a beginner or a more experienced singer."
    },
    {
        questionFR: "Est-ce que je suis libre de choisir mon répertoire de chanson ?",
        questionEN: "Are you free to choose your song repertoire when taking singing lessons ?",
        answerFR: "Vous êtes libre de choisir votre répertoire de chansons lorsque vous prenez des cours de chant. Je peux vous recommander certaines chansons en fonction de votre niveau de compétence et de vos objectifs, mais de manière général vous apportez les chansons que vous souhaitez apprendre et travailler. Il est important de me communiquer vos préférences et vos objectifs pour que nous puissions travailler ensemble sur un répertoire qui convient à vos besoins et à votre style vocal. Tous les styles de musique actuelle sont les bienvenus, y compris la pop, le rock, le jazz, la chanson française, la variété, la country, la world music, le métal, le blues, l’americana, le rap, la comédie musicale, etc.",
        answerEN: "Yes, you are free to choose your own song repertoire when taking singing lessons. I can recommend some songs based on your skill level and goals, but generally you bring in the songs you want to learn and work on. It's important for you to communicate your preferences and goals so that we can work together on a repertoire that suits your needs and vocal style. All genres of rhythmical music are welcome, including pop, rock, jazz, country, world music, metal, blues, americana, rap, musicals, and more."
    },
    {
        questionFR: "En combien de temps puis-je apprendre à chanter ?",
        questionEN: "How long does it take to learn how to sing ?",
        answerFR: "Le temps nécessaire pour apprendre à chanter dépend de votre niveau de compétence actuel, de la fréquence de vos cours de chant, ainsi que des heures de pratique personnelle que vous pouvez consacrer à votre entraînement vocal. Les débutants peuvent s'attendre à consacrer plusieurs mois à développer une technique vocale de base, mais avec une pratique régulière et efficace comme «la pratique délibéré», des résultats significatifs peuvent être obtenus en quelques semaines. Il est important de noter que l'apprentissage du chant est un processus continu et que même les chanteurs les plus expérimentés continuent d'apprendre et de se perfectionner tout au long de leur vie.",
        answerEN: "The time it takes to learn how to sing depends on your current level of skill, the frequency of your singing lessons, as well as the amount of personal practice you can dedicate to your vocal training. Beginners can expect to spend several months developing basic vocal technique, but with regular and effective practice such as «deliberate practice», significant results can be achieved in a few weeks. It is important to note that learning to sing is a continuous process and even the most experienced singers continue to learn and improve throughout their lives."
    },
    {
        questionFR: "Est-ce que les vacances sont comprises dans le forfait ?",
        questionEN: "Are holidays included in the package ?",
        answerFR: "Oui les vacances de d’octobre, de Noël et de Pâques sont comprises dans le forfait. Les cours débutent en même temps que les écoles à la fin du mois d’août afin de compenser les cours qui n’ont pas lieu durant les vacances. Les mois facturés vont de septembre à juillet  pour les adultes et de septembre à juin pour les jeunes en formation.",
        answerEN: "The October, Christmas, and Easter holidays are included in the package. The courses start at the same time as schools do at the end of August to make up for the lessons that are missed during the holidays. The months billed are from September to July for adults and from September to June for the youth in training."
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
        questionFR: "Les inscriptions sont-elles ouvertes durant toute l'année ?",
        questionEN: "Are registrations open all year round ?",
        answerFR: "Oui bien-sûr ! Vous pouvez vous inscrire à tout moment durant l’année.",
        answerEN: "Yes of course ! You can register at any time during the year."
    },
    {
        questionFR: "À quoi m’engage le contrat ?",
        questionEN: "What am I committing to with the contract ?",
        answerFR: "Vous vous engagez pour un minimum de 3 mois et par la suite vous aura un mois de préavis si vous souhaitez arrêter les cours.",
        answerEN: "You commit to a minimum of 3 months, and after that, you’ll have one month's notice if you want to stop the lessons."
    },
]