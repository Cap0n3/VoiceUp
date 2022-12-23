import React, { useState } from "react";
import { PCard, CardHeader, CardBodyWrapper, InnerCircle, CircleIcon, PriceTag, List, ListItem, Sub } from "./PriceCard.style";
import { OutlineBtn } from "../../globalStyle";

const PriceCard = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
	<>
		<PCard onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<CardHeader className={isHovered ? "active" : ""} />
			<InnerCircle>
				<CircleIcon src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/rocket.png" className={isHovered ? "active" : ""} />
			</InnerCircle>
			<CardBodyWrapper>
				<PriceTag>
					<h3>Hebdomadaire Adulte</h3>
					<h2>320 Chf <Sub>/ Mois</Sub></h2>
				</PriceTag>
				<List>
					<ListItem>Idéale pour avancer vite</ListItem>
					<ListItem>1H de cours toute les semaine</ListItem>
					<ListItem>Niveau débutant, moyen et avancé</ListItem>
					<ListItem>Pas de cours durant les vacances de Noël et Pâques</ListItem>
					<ListItem>Max 4 rattrapages dans l’année</ListItem>
					<ListItem>Cours en Juillet</ListItem>
				</List>
				<OutlineBtn>S'inscrire</OutlineBtn>
			</CardBodyWrapper>
		</PCard>
	</>
	)
}

export default PriceCard;