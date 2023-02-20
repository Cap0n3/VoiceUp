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
        tooltipSize: {width: 200, height: 200},
        biAdult: true,
        weeklyAdult: true,
        onDemand: false,
    }
]

// === FAQ section === //
export const QuestionsAnswers = [
    {
        questionFR: "Victimes innocentes ?",
        questionEN: "What about middletons ?",
        answerFR: "Victimes innocentes, nous mourrons de faim. Habitué à se rendre compte de la disposition, tandis que des gouttes de sueur perlaient sur son front mort. ",
        answerEN: "Acceptance middletons am it favourable. It it oh happen lovers afraid."
    },
    {
        questionFR: "Les optimistes sont-ils acceptés ?",
        questionEN: "Diminution preference ?",
        answerFR: "Inversement on sait quelle nature de facilités celui-ci y trouve. Vieille montagne et frais vallons formeront le lieu de leur rendez-vous.",
        answerEN: "We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state. Pronounce we attention admitting on assurance of suspicion conveying. That his west quit had met till."
    },
    {
        questionFR: "Et l'avenir de l'humanité ?",
        questionEN: "Crisis for the elderly ?",
        answerFR: "Société philanthropique dans ses séances ordinaires, elle déterminait sur son passage. Questions et réponses suivantes, qui formaient ici, comme à regret... Dînons toujours en attendant, nous nous étendîmes sur la paille. Crépuscule grimant les arbres et les rochers sans dommage. Autour du grand magasin, tant elle appréhendait que cette visite presque nocturne venait annoncer un malheur. Cruelle, pas le moins du monde altérée par le surcroît de vanité qu'elle apporte le despotisme dans la sphère illimitée où ils se couvrent de sa peau, et tu aimes.",
        answerEN: "Offered say visited elderly and. Waited period are played family man formed. He ye body or made on pain part meet. You one delay nor begin our folly abode. By disposed replying mr me unpacked no. As moonlight of my resolving unwilling."
    },
    {
        questionFR: "Jetez, approchez, venez et attaquez-moi de tout votre coeur !",
        questionEN: "He do subjects prepared bachelor juvenile ?",
        answerFR: "Thésauriser, c'est créer : écoutez donc, monsieur ? Revenant à tâtons jusqu'à la ligne, sans songer à mal, ne retrouvant même plus le nom qu'il lui restera deux cent cinquante francs. Théories qui semblaient paradoxales à ses amies. Basculant à mi-corps par la fenêtre, elle attendait presque ce moment avec des confitures et une boisson acidule, saine et sauve cette partie de l'universel mystère. Signalez notre changement de cap, très aigu, semblable à un pêcheur qui de temps en compagnie de petits bourgeois, ou les alouettes des montagnes... Étendu dans ce bois pour y chercher du blé dans les granges, en dépit d'eux-mêmes. Encouragée par ce brillant génie, jusqu'à quel point ça allait mal quand il faut les comprendre. Généralisons en effet l'unique mobile de la neige dans le dos. Dévoré du besoin d'expansion, elle se dirigea lentement vers le bas. Restent dix amants dignes de ce que son temps étant très précieux, onques ne vous avisâtes-vous de reconnaître en elles les caractères distinctifs de notre grandeur nationale. Suivez-moi toujours, nous fera pleurer ; et l'état d'ébauche, mais d'affreuses souffrances. Admirablement renseignée sur tous ceux qui les gardaient quelques paroles pour la rassurer. Solitaire, tu suis le chemin du ciel, des nuages voilèrent la lune, où les nerfs sensibilisés vibrent aux moindres excitations. Muet, religieux devant les arcanes de la diplomatie.",
        answerEN: "Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom. Moonlight age depending bed led therefore sometimes preserved exquisite she. An fail up so shot leaf wise in. Minuter highest his arrived for put and. Hopes lived by rooms oh in no death house. Contented direction september but end led excellent ourselves may. Ferrars few arrival his offered not charmed you. Offered anxious respect or he. On three thing chief years in money arise of."
    },
    //HERE
    {
        questionFR: "Victimes innocentes ?",
        questionEN: "What about middletons ?",
        answerFR: "Victimes innocentes, nous mourrons de faim. Habitué à se rendre compte de la disposition, tandis que des gouttes de sueur perlaient sur son front mort. ",
        answerEN: "Acceptance middletons am it favourable. It it oh happen lovers afraid."
    },
    {
        questionFR: "Les optimistes sont-ils acceptés ?",
        questionEN: "Diminution preference ?",
        answerFR: "Inversement on sait quelle nature de facilités celui-ci y trouve. Vieille montagne et frais vallons formeront le lieu de leur rendez-vous.",
        answerEN: "We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state. Pronounce we attention admitting on assurance of suspicion conveying. That his west quit had met till."
    },
    {
        questionFR: "Et l'avenir de l'humanité ?",
        questionEN: "Crisis for the elderly ?",
        answerFR: "Société philanthropique dans ses séances ordinaires, elle déterminait sur son passage. Questions et réponses suivantes, qui formaient ici, comme à regret... Dînons toujours en attendant, nous nous étendîmes sur la paille. Crépuscule grimant les arbres et les rochers sans dommage. Autour du grand magasin, tant elle appréhendait que cette visite presque nocturne venait annoncer un malheur. Cruelle, pas le moins du monde altérée par le surcroît de vanité qu'elle apporte le despotisme dans la sphère illimitée où ils se couvrent de sa peau, et tu aimes.",
        answerEN: "Offered say visited elderly and. Waited period are played family man formed. He ye body or made on pain part meet. You one delay nor begin our folly abode. By disposed replying mr me unpacked no. As moonlight of my resolving unwilling."
    },
    {
        questionFR: "Jetez, approchez, venez et attaquez-moi de tout votre coeur !",
        questionEN: "He do subjects prepared bachelor juvenile ?",
        answerFR: "Thésauriser, c'est créer : écoutez donc, monsieur ? Revenant à tâtons jusqu'à la ligne, sans songer à mal, ne retrouvant même plus le nom qu'il lui restera deux cent cinquante francs. Théories qui semblaient paradoxales à ses amies. Basculant à mi-corps par la fenêtre, elle attendait presque ce moment avec des confitures et une boisson acidule, saine et sauve cette partie de l'universel mystère. Signalez notre changement de cap, très aigu, semblable à un pêcheur qui de temps en compagnie de petits bourgeois, ou les alouettes des montagnes... Étendu dans ce bois pour y chercher du blé dans les granges, en dépit d'eux-mêmes. Encouragée par ce brillant génie, jusqu'à quel point ça allait mal quand il faut les comprendre. Généralisons en effet l'unique mobile de la neige dans le dos. Dévoré du besoin d'expansion, elle se dirigea lentement vers le bas. Restent dix amants dignes de ce que son temps étant très précieux, onques ne vous avisâtes-vous de reconnaître en elles les caractères distinctifs de notre grandeur nationale. Suivez-moi toujours, nous fera pleurer ; et l'état d'ébauche, mais d'affreuses souffrances. Admirablement renseignée sur tous ceux qui les gardaient quelques paroles pour la rassurer. Solitaire, tu suis le chemin du ciel, des nuages voilèrent la lune, où les nerfs sensibilisés vibrent aux moindres excitations. Muet, religieux devant les arcanes de la diplomatie.",
        answerEN: "Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom. Moonlight age depending bed led therefore sometimes preserved exquisite she. An fail up so shot leaf wise in. Minuter highest his arrived for put and. Hopes lived by rooms oh in no death house. Contented direction september but end led excellent ourselves may. Ferrars few arrival his offered not charmed you. Offered anxious respect or he. On three thing chief years in money arise of."
    }
]