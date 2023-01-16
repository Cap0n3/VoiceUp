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