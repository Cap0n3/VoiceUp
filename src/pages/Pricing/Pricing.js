import React, { useRef, useContext } from 'react';
import { PricingSection, TableSection, TableContainer, FaqSection, FaqContainer } from './Pricing.style';
import PriceCard from '../../components/PriceCard/PriceCard';
import { WeeklyAdult, BiAdult, OnDemand, ComparisonTable, pricingHeaderData, QuestionsAnswers } from './data/Pricing.data';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CompTable from "../../components/CompTable/CompTable";
import CollapseQuestion from "../../components/CollapseQuestion/CollapseQuestion";
import useAppear from "../../hooks/useAppear";
import { LangContext } from "../../App";
import useAnchor from "../../hooks/useAnchor";
import { useLocation } from "react-router-dom";
import { ELEMENT_HEIGHTS } from '../../globalVars';
import useWindowSize from '../../hooks/useWindowSize';

const Prices = () => {
    const {language} = useContext(LangContext);
    const windowSize = useWindowSize();
    const priceSectionRef = useRef(null);
    const tableSectionRef = useRef(null);
    const faqSectionRef = useRef(null);
    const isTableVisible = useAppear(tableSectionRef, 380);
    const isFaqVisible = useAppear(faqSectionRef, 380);
    const location = useLocation(null);
    useAnchor(faqSectionRef, location, "#faq", (windowSize.innerWidth <= 1024 ? ELEMENT_HEIGHTS.mobileNavbarHeight : ELEMENT_HEIGHTS.navbarHeight));

    return(
        <>
            <Header data={pricingHeaderData} position={{posX: 0, posY: 50}} />
            <PricingSection ref={priceSectionRef}>
                <PriceCard data={BiAdult}  />
                <PriceCard data={WeeklyAdult} />
                <PriceCard data={OnDemand} />
            </PricingSection>
            <TableSection ref={tableSectionRef}>
                <TableContainer isVisible={isTableVisible}>
                    <CompTable tableData={ComparisonTable} iconColors={["#1B173", "#896FBC", "#D9A47D"]}/>
                </TableContainer>
            </TableSection>
            <FaqSection ref={faqSectionRef}>
                <FaqContainer isVisible={isFaqVisible}>
                    {
                        QuestionsAnswers.map((data, index) =>
                            <CollapseQuestion key={index} question={(language === "FR") ? data.questionFR : data.questionEN} answer={(language === "FR") ? data.answerFR : data.answerEN} />
                    )}
                </FaqContainer>
            </FaqSection>
            <Footer />
        </>
    )
}

export default Prices;