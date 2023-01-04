import React, { useState } from "react";
import { PCard, CardHeader, CardBodyWrapper, InnerCircle, IconWrapper, PriceTag, ListWrapper, List, ListItem, Sub } from "./PriceCard.style";
import { OutlineBtn } from "../../globalStyle";
import {AiOutlineCheckCircle} from "react-icons/ai";
import Rocket from "../../assets/icons/myIcons/rocket_icon";
import Turtle from "../../assets/icons/myIcons/turtle_icon";
import { VoiceUpColors } from "../../colors";

const PriceCard = ({data}) => {
	const [isHovered, setIsHovered] = useState(false);
	
	const chooseIcon = (anim) => {
		if(anim === "rocket") {
			return <Rocket fill="red" />;
		}
		else if(anim === "turtle") {
			return <Turtle fill="red" />;
		}
	}

	return (
	<>
		<PCard onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} colors={data.bckColors}>
			<CardHeader className={isHovered ? "active" : ""} headerImg={data.headerImage} />
			<InnerCircle>
				<IconWrapper className={isHovered ? "active" : ""} animIcon={data.animIcon}>
					{chooseIcon(data.animIcon)}
				</IconWrapper>
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