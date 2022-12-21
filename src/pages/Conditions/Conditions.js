import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { conditionsHeaderData } from './data/conditions.data';

const Conditions = () => {
    return(
        <>
            <Header data={conditionsHeaderData} position={{posX: 0, posY: 50}} />
            <h1>Conditions</h1>
            <h2>Formule mensuelle ou bimensuelle adulte</h2>
            <p>L’élève s’engage pour un minimum de trois mois de cours. Par la suite, un délai d’un mois est demandé pour résilier le contrat. Les cours sont dispensés depuis la rentrée scolaire (dernière semaine d’août) jusqu’à la fin du mois de juillet de l’année suivante. Vous pouvez commencer ou arrêter les cours n’importe quand durant l’année scolaire en cours. Les vacances scolaires de Noël et de Pâques ainsi que les congés officiels sont inclus dans le forfait, aucun cours ne sera donné durant ces périodes et le montant mensuel de la formule concerné est dû dans son entièreté. Les tarifs sont fixes pas de remboursement afin de solder rattrapage/absence/vacances.</p>
            <Footer />
        </>
    )
}

export default Conditions;