import React, { useState } from "react";
import { PCard, CardHeader, CardBodyWrapper, InnerCircle, PriceTag } from "./PriceCard.style";

const PriceCard = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
	<>
		<PCard onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<CardHeader className={isHovered ? "active" : ""} />
			<InnerCircle />
			<CardBodyWrapper>
				<PriceTag>
					<h2>Hebdomadaire</h2>
					<h1>80 CHF</h1>
				</PriceTag>
			</CardBodyWrapper>
		</PCard>
	</>
	)
}

export default PriceCard;