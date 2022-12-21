import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { conditionsHeaderData } from './data/conditions.data';
import { ConditionWrapper, ConditionBlock, ConditionTitle } from './Conditions.style';

const Conditions = () => {
    return(
        <>
            <Header data={conditionsHeaderData} position={{posX: 0, posY: 50}} />
            <ConditionWrapper>
                <ConditionTitle style={{marginTop: "0"}}>Conditions</ConditionTitle>
                <ConditionBlock>
                    <h2>Formule mensuelle ou bimensuelle adulte</h2>
                    <p>L’élève s’engage pour un minimum de trois mois de cours. Par la suite, un délai d’un mois est demandé pour résilier le contrat. Les cours sont dispensés depuis la rentrée scolaire (dernière semaine d’août) jusqu’à la fin du mois de juillet de l’année suivante. Vous pouvez commencer ou arrêter les cours n’importe quand durant l’année scolaire en cours. Les vacances scolaires de Noël et de Pâques ainsi que les congés officiels sont inclus dans le forfait, aucun cours ne sera donné durant ces périodes et le montant mensuel de la formule concerné est dû dans son entièreté. Les tarifs sont fixes pas de remboursement afin de solder rattrapage/absence/vacances.</p>
                </ConditionBlock>
                <ConditionBlock>
                    <h2>Formule mensuelle ado et jeunes</h2>
                    <p>L’élève s’engage pour un minimum de trois mois de cours. Par la suite, un délai d’un mois est demandé pour résilier le contrat. Les cours sont dispensés depuis la rentrée scolaire (dernière semaine d’août) jusqu’à la fin du mois de juin. Vous pouvez commencer ou arrêter les cours n’importe quand durant l’année scolaire en cours. Pour la formule Jeune vous pouvez continuer les cours au mois de juillet. Toutes les vacances scolaires sont incluses dans le forfait ainsi que les congés officiels, aucun cours ne sera donné durant ces périodes et le montant mensuel de la formule concerné est dû dans son entièreté. Les tarifs sont fixes pas de remboursement afin de solder rattrapage/absence/vacances.</p>
                </ConditionBlock>
                <ConditionBlock>
                    <h2>Paiement</h2>
                    <p className="deepBottom">Le paiement pour la formule mensuelle ou bimensuelle s’effectue au plus tard chaque 28 du mois précédant par virement bancaire. Par ex: le paiement du mois de mai est dû dans son intégralité le 28 avril. Aucun cours ne sera donné sans le paiement fait à l’avance. En cas de non-paiement , les séances sont suspendues sans droit de rattrapage.</p>
                    <p style={{fontStyle: "italic"}}>Les cours perdus par l’élèves par faute des vacances seront en partie compensés par le fait qu’un 5ème cours dans le mois peut avoir lieu durant l’année de cours et ne sera jamais facturé (Exemple : un mois de septembre avec 5 lundis).</p>
                </ConditionBlock>
                <ConditionBlock className="noBottom">
                    <h2>Formule à la carte</h2>
                    <p>Pour la formule à la carte le paiement se fait toujours en liquide au début du cours ou par versement bancaire en amont du cours. Attention : si l’élève ne se présente pas avec la somme due sur lui le cours ne sera pas dispensé. Pas de crédit !</p>
                </ConditionBlock>
                <ConditionTitle>Annulation, Vacances, Rattrapage, Résiliation</ConditionTitle>
                <ConditionBlock>
                    <h2>Annulation</h2>
                    <p>En cas de maladie ou d’un empêchement, l’élève doit l’annoncer à la professeure par mail, sms ou téléphone, au minimum 24h à l’avance, sinon il ne bénéficiera pas d’un cours de rattrapage.</p>
                </ConditionBlock>
                <ConditionBlock>
                    <h2>Rattrapage</h2>
                    <p className="deepBottom">Si le délais d’annulation de 24h a été respecté, l’élève pourra fixer oralement au cours suivant ou par message (mail/sms), un autre rendez-vous avec la professeure.</p>
                    <p>Le délais de rattrapage d’un cours est de 6 mois à compter de la 1ère date d’annulation et il tient de la responsabilité de l’élève à rattraper le/s cour/s dans ce délais. Un maximum de 4 cours pourront être rattrapé par année scolaire.</p>
                </ConditionBlock>
                <ConditionBlock>
                    <h2>Vacances</h2>
                    <p>Si l’élève désire prendre des vacances ou un congé en dehors des vacances scolaires de Noël ou de Pâques, il se doit de payer le mois comme convenu et l’élève pourra ensuite rattraper le(s) cours manqué(s) en convenance avec la professeure.</p>
                </ConditionBlock>
                <ConditionBlock className="noBottom">
                    <h2>Résiliation</h2>
                    <p>La résiliation se fait par écrit (mail/sms) en respectant un délai minimum de un mois, à compter de la date de la notification.</p>
                </ConditionBlock>
            </ConditionWrapper>
            <Footer />
        </>
    )
}

export default Conditions;