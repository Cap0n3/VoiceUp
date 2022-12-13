import KimHeader from "../../../assets/headers/Header_Kim.jpg";
import TaniaLea from "../../../assets/images/Tania/Tania_Lea.jpg";
import ShowerDude from "../../../assets/images/stock/showerDude_medium.jpg";
import Sadoline from "../../../assets/images/stock/CathrineSadolin.jpg";
import Studio from "../../../assets/images/stock/Studio_Chant_2.jpg";
import GregDanae from "../../../assets/images/students/student_Greg_Danae.jpg";

// HEADER DATA (pic + text)
export const lessonHeaderData = {
    picURL: KimHeader,
    imgTitle: "Kim",
    titleFR: "L'enseignement",
    titleEN: "Teaching style",
    descriptionFR: <>« Les meilleurs professeurs sont ceux qui savent se transformer en ponts, qui invitent leurs étudiants à les franchir et qui, après avoir facilité leur passage, disparaissent avec joie en les encourageant à bâtir leurs propres ponts. » <br /><br />Nikos Kazantzakis</>,
    descriptionEN: <>« The best teachers are those who know how to act as a bridge and invite their students to cross it. After that, they joyfully disappear and encourage them to build their own bridges. »<br /><br />Nikos Kazantzakis</>
}

// INFO SECTION DATA
export const infoPhiloData = {
    // Normal or reverse
    direction : "normal",
    image : TaniaLea,
    imgTitle: "Lea & Tania",
    titleFR : "Philosophie d'enseignement",
    titleEN : "Teaching philosophy",
    descriptionFR : [
        "Passionnée de musique depuis mon plus jeune âge, j’ai pu approcher et expérimenter plusieurs styles de musique comme le classique, le jazz, la comédie musicale, la soul, la funk, la pop et le rock-punk.", 
        "Ouverte d’esprit, j’enseigne le chant sans aucun jugement face aux goûts musicaux de chacun et notamment face à la manière de chanter de chacun. J’accompagne et soutiens les buts des élèves à leur rythme et j’apprécie de travailler dans une ambiance de confiance et de liberté qui sont pour moi les fondements du développement artistique d’un(e) chanteur(euse).",
        "Je valorise par dessus tout l’enseignement d’une technique de chant saine et efficace tout en restant à l’écoute des vœux de chacun. Je saurai donc personnaliser les exercices afin que vous puissiez trouver votre propre voix. Je peux faire aussi bien du coaching vocal pour la scène, que pour le studio (par ex : préparation et suivi lors de l’enregistrement d’un album)."
    ],
    descriptionEN : ["Hello, it's me Mario !", "A lovable character from a video game from the 80's"]
}

export const infoLearningPathData = {
    direction : "reverse",
    image : ShowerDude,
    imgTitle: "Shower Dude",
    titleFR : "Programme",
    titleEN : "Learning path",
    descriptionFR : [
        "Le travail du chanteur débutant ou de l’orateur se concentre essentiellement sur l’apprentissage de la coordination du souffle et du son. En effet, pour chanter, une bonne maîtrise du souffle et du support de ce dernier se révèlent essentiels. Par des exercices et par la pratique, le chanteur apprend comment soutenir le son afin d’avoir une voix stable, puissante et souple (grande tessiture). Ainsi il évite les cassures vocales involontaires et les extinctions de voix.",
        "Pour les élèves plus avancés, une approche en profondeur des différents modes (voix de tête, voix de corps), permet au chanteur d’acquérir une plus grande palette d’expressions, afin de pourvoir chanter comme il l’entend. Du son doux et clair au son fort et rauque, tout lui sera possible. L’accent est aussi porter sur l’interprétation que nous étudierons plus en détail.",
    ],
    descriptionEN : ["Hello, it's me Mario !", "A lovable character from a video game from the 80's"]
}

export const infoTechniqueData = {
    direction : "normal",
    image : Sadoline,
    imgTitle: "Cathrine Sadolin",
    titleFR : "Technique de chant CVT",
    titleEN : "CVT Vocal Technique",
    descriptionFR : [
        "Cathrine Sadolin créa la CVT (Complete Vocal Technique) en 2005 à Copenhague. Ayant suivit une formation de chant classique, elle se trouva dans l’embarras lorsqu’elle voulu chanter dans un groupe de rock. Cet événement l’a poussée à faire des recherches, notamment avec des médecins spécialistes (O.R.L.), pour développer une technique de chant universelle qui puisse aussi bien aider des chanteurs classiques que country, rock, pop, jazz, world etc…",
        "La CVT est une technique de chant efficace et saine pour les cordes vocales, qui une fois comprise dans son ensemble, vous permettra d’être indépendant avec votre travail vocal. Elle vous permet de maîtriser votre voix et d’en comprendre son fonctionnement.",
        "Technique vocale : Respiration, Support, Twang, Prononciation (voyelles), Placements vocaux, Volume, Couleur de voix, Modes Vocaux (par ex: voix de tête, voix de poitrine, etc…) ainsi que la Transition entre eux et les Effets Vocaux. Technique musicale : Improvisation et Interprétation. Technique de scène : Utilisation du Micro et Prestance."
    ],
    descriptionEN : ["Hello, it's me Mario !", "A lovable character from a video game from the 80's"]
}

export const infoLessonsData = {
    direction : "reverse",
    image : Studio,
    imgTitle: "Tania's vocal studio",
    titleFR : "Les cours",
    titleEN : "Lessons",
    descriptionFR : [
        "EN PRÉSENTIEL : Je donne les cours chez moi dans un studio spécialement construit et aménagé pour le chant. Vous avez la possibilité de chanter sur une sono si vous le souhaitez.",
        "EN LIGNE : Je donne les cours en ligne aussi. La qualité du cours dépendra beaucoup de votre connexion internet (rapide) et de votre configuration. Pour faire simple, je vous demanderais d’utiliser un appareil autre que votre ordinateur pour passer la musique ou l’instrumental afin que je puisse bien entendre votre voix. J’utilise Zoom pour les cours en ligne.",
        "Avec le temps et l’expérience, je trouve que les cours en ligne marche tout aussi bien que les cours en présentiel. Vous avez aussi la possibilité de faire une alternance entre les cours en ligne et les cours en présentiel."
    ],
    descriptionEN : ["Hello, it's me Mario !", "A lovable character from a video game from the 80's"]
}

export const infoAuditionData = {
    direction : "normal",
    image : GregDanae,
    imgTitle: "Student Auditions",
    titleFR : "Auditions",
    titleEN : "Auditions",
    descriptionFR : [
        "Depuis plusieurs années déjà, Voice Up collabore avec des professeurs de batterie, guitare et basse afin d’organiser un Concert/Audition en juin, à la julienne (Plan-les-Ouates). Un répertoire entre 13 et 15 chansons, selon un thème qui varie chaque année, est choisi et préparé. C’est un beau moment de partage entre les élèves et les professeurs, car ces derniers font aussi partie du concert.",
        "Les auditions sont des moments importants pour les élèves, car c’est une occasion unique de chanter avec des musiciens, ainsi que de mettre en pratique l’enseignement de l’année devant un publique bienveillant. Plus on pratique la scène, moins elle devient effrayante. Elle permet à l’élève de voir ses points forts, afin de construire sa confiance en soi et de travailler sur les plus faibles, pour être plus à l’aise la prochaine fois. Bien évidemment les auditions ne sont pas obligatoires mais fortement recommandées :)."
    ],
    descriptionEN : ["Hello, it's me Mario !", "A lovable character from a video game from the 80's"]
}