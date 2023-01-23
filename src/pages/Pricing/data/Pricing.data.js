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
    priceTag: 360,
    perFR: "Mois", 
    // Max 6 bullets
    bulletsFR: ["Idéal pour avancer vite", "1h de cours toutes les semaines", "Niveau débutant, moyen et avancé", "4 rattrapages dans l’année", "Cours en Juillet"]
}

export const BiAdult = {
    headerImage: DkBlueHeader,
    animIcon: "turtle",
    bckColors: ["#1B1734", "#896FBC"],
    cardNameFR: "Bimensuel",
    cardNameEN: "Adult Bimonthly",
    priceTag: 200,
    perFR: "Mois",
    // Max 6 bullets
    bulletsFR: ["Pour les personnes disciplinées", "1h de cours toute les deux semaines", "Niveau moyen et avancé", "4 rattrapages dans l’année", "Cours en Juillet"]
}

export const OnDemand = {
    headerImage: GoldHeader,
    animIcon: "gear",
    bckColors: ["#D9A47D", "#D39264"],
    cardNameFR: "Cours à la carte",
    cardNameEN: "On demand",
    priceTag: 100,
    perFR: "Heure",
    // Max 6 bullets
    bulletsFR: ["Cours d’essai", "Idéal pour un petit projet", "100% Flexible", "Créez votre planning de cours"]
}

// === Comparison Table === //
export const ComparisonTable = [
    {
        titleFR: "Débutant",
        titleEN: "Beginner",
        descriptionFR: "Niveau débutants et faux-débutant blabla",
        descriptionEN: "Beginner and such",
        tooltipSize: {width: 200, height: 200},
        biAdult: false,
        weeklyAdult: true,
        onDemand: true,
    },
    {
        titleFR: "Intermédiaire",
        titleEN: "Intermediate",
        descriptionFR: "Niveau intermédiaire blabla",
        descriptionEN: "Intermediary and such blabla",
        tooltipSize: {width: 200, height: 200},
        biAdult: true,
        weeklyAdult: true,
        onDemand: true,
    },
    {
        titleFR: "Avancés",
        titleEN: "Advanced",
        descriptionFR: "Niveau avancés et blabla",
        descriptionEN: "Advanced level blabla",
        tooltipSize: {width: 200, height: 200},
        biAdult: true,
        weeklyAdult: true,
        onDemand: true,
    },
    {
        titleFR: "Cours en ligne",
        titleEN: "Lorum ipsum",
        descriptionFR: "Cours par Zoom blabla",
        descriptionEN: "Online lessons on Zoom and blabla",
        tooltipSize: {width: 200, height: 200},
        biAdult: true,
        weeklyAdult: true,
        onDemand: true,
    },
    {
        titleFR: "Progrès rapide",
        titleEN: "Lorum ipsum",
        descriptionFR: "Avec un cours par semaine blabla",
        descriptionEN: "With one lesson a week, blabla",
        tooltipSize: {width: 200, height: 200},
        biAdult: false,
        weeklyAdult: true,
        onDemand: false,
    },
    {
        titleFR: "Audition",
        titleEN: "Audition",
        descriptionFR: "Concert de fin d'année, blabla",
        descriptionEN: "End of the year concert blabla",
        tooltipSize: {width: 200, height: 200},
        biAdult: true,
        weeklyAdult: true,
        onDemand: false,
    },
    {
        titleFR: "Rattrapages",
        titleEN: "Lorum ipsum",
        descriptionFR: "Maximum 4 rattrapages par année de cours",
        descriptionEN: "Maximum 4 blablabla",
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