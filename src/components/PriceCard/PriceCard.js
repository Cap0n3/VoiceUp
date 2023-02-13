import React, { useState, useRef, useContext } from "react";
import { CardContainer, PCard, CardHeader, CardBodyWrapper, InnerCircle, IconWrapper, PriceTag, ListWrapper, List, ListItem, Sub } from "./PriceCard.style";
import { OutlineBtn } from "../../globalStyles/globalCompStyles";
import {AiOutlineCheckCircle} from "react-icons/ai";
import Rocket from "../../assets/icons/myIcons/rocket_icon";
import Turtle from "../../assets/icons/myIcons/turtle_icon";
import Gear from "../../assets/icons/misc/gear_icon";
import useAppear from "../../hooks/useAppear";
import { LangContext } from "../../App";

const PriceCard = ({data}) => {
	const {language} = useContext(LangContext);
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

	/**
	 * Small function to return appropriate JSX depending on language setting.
	 * @param {object} contentList - List of text
	 * @returns 
	 */
	const setContentLang = (contentList) => {
		return contentList.map((info, index) => <ListItem key={index}><AiOutlineCheckCircle fill="white" style={{marginRight: "10px"}} />{info}</ListItem>)
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
					<h3>{(language === "FR") ? data.cardNameFR : data.cardNameEN}</h3>
					<h2>{data.priceTag} Chf <Sub>/ {(language === "FR") ? data.perFR : data.perEN}</Sub></h2>
				</PriceTag>
				<ListWrapper>
					<List>
						{
							setContentLang((language === "FR") ? data.bulletsFR : data.bulletsEN)
						}
					</List>
				</ListWrapper>
				<OutlineBtn to="/inscription" style={{marginTop: "10px"}}>{(language === "FR") ? "S'inscrire" : "Enroll now"}</OutlineBtn>
			</CardBodyWrapper>
		</PCard>
	</CardContainer>
	)
}

export default PriceCard;