import React from 'react';
import { PricingSection, TableSection } from './Pricing.style';
import PriceCard from '../../components/PriceCard/PriceCard';
import { WeeklyAdult, BiAdult, OnDemand, ComparisonTable, pricingHeaderData } from './data/Pricing.data';
import Header from "../../components/Header/Header";
import CompTable from '../../components/CompTable/CompTable';

const Prices = () => {
    return(
        <>
            <Header data={pricingHeaderData} position={{posX: 0, posY: 50}} />
            <PricingSection>
                <PriceCard data={BiAdult} />
                <PriceCard data={WeeklyAdult} />
                <PriceCard data={OnDemand} />
            </PricingSection>
            <TableSection>
                <CompTable tableData={ComparisonTable} iconColors={["#1B173", "#896FBC", "#D9A47D"]}/>
            </TableSection>
        </>
    )
}

export default Prices;