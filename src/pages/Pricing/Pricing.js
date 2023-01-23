import React, { useEffect, useRef } from 'react';
import { PricingSection, TableSection, FaqSection, FaqContainer } from './Pricing.style';
import PriceCard from '../../components/PriceCard/PriceCard';
import { WeeklyAdult, BiAdult, OnDemand, ComparisonTable, pricingHeaderData, QuestionsAnswers } from './data/Pricing.data';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import CompTable from '../../components/CompTable/CompTable';
import CollapseQuestion from '../../components/CollapseQuestion/CollapseQuestion';
import useAppear from '../../hooks/useAppear';

const Prices = () => {
    const priceSectionRef = useRef(null);
    const tableSectionRef = useRef(null);
    const isTableVisible = useAppear(tableSectionRef, 380);

    return(
        <>
            <Header data={pricingHeaderData} position={{posX: 0, posY: 50}} />
            <PricingSection ref={priceSectionRef}>
                <PriceCard data={BiAdult}  />
                <PriceCard data={WeeklyAdult} />
                <PriceCard data={OnDemand} />
            </PricingSection>
            <TableSection ref={tableSectionRef}>
                <CompTable isActive={isTableVisible ? "active" : ""} tableData={ComparisonTable} iconColors={["#1B173", "#896FBC", "#D9A47D"]}/>
            </TableSection>
            <FaqSection>
                <FaqContainer>
                    {
                        QuestionsAnswers.map((data, index) =>
                            <CollapseQuestion key={index} question={data.questionFR} answer={data.answerFR} />
                    )}
                </FaqContainer>
            </FaqSection>
            <Footer />
        </>
    )
}

export default Prices;