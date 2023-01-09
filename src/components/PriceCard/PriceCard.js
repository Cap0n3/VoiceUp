import React, { useState, useRef } from "react";
import { CardContainer, PCard, CardHeader, CardBodyWrapper, InnerCircle, IconWrapper, PriceTag, ListWrapper, List, ListItem, Sub } from "./PriceCard.style";
import { OutlineBtn } from "../../globalStyle";
import {AiOutlineCheckCircle} from "react-icons/ai";
import Rocket from "../../assets/icons/myIcons/rocket_icon";
import Turtle from "../../assets/icons/myIcons/turtle_icon";
import Gear from "../../assets/icons/misc/gear_icon";
import useAppear from "../../hooks/useAppear";

const PriceCard = ({data}) => {
	const [isHovered, setIsHovered] = useState(false);
	const cardRef = useRef(null);
	const isVisible = useAppear(cardRef, 250);
	
	/**
	 * Choose icon according to choice
	 */
	const chooseIcon = (anim, colors) => {
		if(anim === "rocket") {
			return <Rocket fill={colors[0]} />;
		}
		else if(anim === "turtle") {
			return <Turtle size="35%" fill={colors[0]} />;
		}
		else if(anim === "gear") {
			return <Gear size="30%" fill={colors[0]} />;
		}
	}

	return (
	<CardContainer ref={cardRef}>
		<PCard onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} colors={data.bckColors} className={isVisible ? "active" : ""}>
			<CardHeader className={isHovered ? "active" : ""} headerImg={data.headerImage} />
			<InnerCircle>
				<IconWrapper className={isHovered ? "active" : ""} animIcon={data.animIcon}>
					{chooseIcon(data.animIcon, data.bckColors)}
				</IconWrapper>
			</InnerCircle>
			<CardBodyWrapper>
				<PriceTag>
					<h3>{data.cardNameFR}</h3>
					<h2>{data.priceTag} Chf <Sub>/ {data.perFR}</Sub></h2>
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
	</CardContainer>
	)
}

export default PriceCard;