import React, { useRef } from 'react';
import { PricingSection, TableSection } from './Pricing.style';
import PriceCard from '../../components/PriceCard/PriceCard';
import { WeeklyAdult, BiAdult, OnDemand, ComparisonTable, pricingHeaderData } from './data/Pricing.data';
import Header from "../../components/Header/Header";
import CompTable from '../../components/CompTable/CompTable';
import { elementHeights } from "../../globalVars";
import useAppear from '../../hooks/useAppear';

const Prices = () => {
    const containerRef = useRef(null);
    const isVisible = useAppear(containerRef, elementHeights.navbarHeight, 2);

    return(
        <>
            <Header data={pricingHeaderData} position={{posX: 0, posY: 50}} />
            <PricingSection ref={containerRef}>
                <PriceCard data={BiAdult}  isActive={isVisible} />
                <PriceCard data={WeeklyAdult} isActive={isVisible} />
                <PriceCard data={OnDemand} isActive={isVisible} />
            </PricingSection>
            <TableSection>
                <CompTable tableData={ComparisonTable} iconColors={["#1B173", "#896FBC", "#D9A47D"]}/>
            </TableSection>
        </>
    )
}

export default Prices;