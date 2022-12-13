import React from "react";

const Philosophy = ({lang}) => {
    const pStyle = {
        display: "inline-block",
        marginBottom: "30px"
    }
    return(
        <>
            <span style={pStyle}>
                Passionnée de musique depuis mon plus jeune âge, j’ai pu approcher et expérimenter plusieurs styles de musique comme le classique, le jazz, la comédie musicale, la soul, la funk, la pop et le rock-punk.
            </span>
            <span style={pStyle}>
                Ouverte d’esprit, j’enseigne le chant sans aucun jugement face aux goûts musicaux de chacun et notamment face à la manière de chanter de chacun. J’accompagne et soutiens les buts des élèves à leur rythme et j’apprécie de travailler dans une ambiance de confiance et de liberté qui sont pour moi les fondements du développement artistique d’un(e) chanteur(euse).
            </span>
            <span style={pStyle}>
                Je valorise par dessus tout l’enseignement d’une technique de chant saine et efficace tout en restant à l’écoute des vœux de chacun. Je saurai donc personnaliser les exercices afin que vous puissiez trouver votre propre voix. Je peux faire aussi bien du coaching vocal pour la scène, que pour le studio (par ex : préparation et suivi lors de l’enregistrement d’un album).
            </span>
        </>
    );
}

export default Philosophy;