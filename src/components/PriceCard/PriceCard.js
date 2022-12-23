import React, { useState } from "react";
import { PCard, CardHeader, CardBodyWrapper, InnerCircle, CircleIcon, PriceTag, ListWrapper, List, ListItem, Sub } from "./PriceCard.style";
import { OutlineBtn } from "../../globalStyle";
import {AiOutlineCheckCircle} from "react-icons/ai";

const PriceCard = ({data}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
	<>
		<PCard onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<CardHeader className={isHovered ? "active" : ""} />
			<InnerCircle>
				<CircleIcon src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/rocket.png" className={isHovered ? "active" : ""} animIcon={data.animIcon} />
			</InnerCircle>
			<CardBodyWrapper>
				<PriceTag>
					<h3>{data.cardNameFR}</h3>
					<h2>{data.priceTag} Chf <Sub>/ Mois</Sub></h2>
				</PriceTag>
				<ListWrapper>
					<List>
						{data.bulletsFR.map((info, index) => 
							<ListItem key={index}><AiOutlineCheckCircle fill="white" style={{marginRight: "10px"}} />{info}</ListItem>
						)}
					</List>
				</ListWrapper>
				<OutlineBtn style={{marginTop: "10px"}}>S'inscrire</OutlineBtn>
			</CardBodyWrapper>
		</PCard>
	</>
	)
}

export default PriceCard;