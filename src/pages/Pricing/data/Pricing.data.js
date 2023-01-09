import DkBlueHeader from "../../../assets/images/stock/PriceHeaderDkBlue.jpg";
import PurpleHeader from "../../../assets/images/stock/PriceHeaderPurple.jpg";
import GoldHeader from "../../../assets/images/stock/PriceHeaderGold.jpg";

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
        biAdult: false,
        weeklyAdult: true,
        onDemand: true,
    },
    {
        titleFR: "Intermédiaire",
        titleEN: "Intermediate",
        biAdult: true,
        weeklyAdult: true,
        onDemand: true,
    },
    {
        titleFR: "Avancés",
        titleEN: "Advanced",
        biAdult: true,
        weeklyAdult: true,
        onDemand: true,
    }
]