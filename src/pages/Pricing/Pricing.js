import React from 'react';
import { PricingSection, TableSection, Table, Thead, Tbody, Row, HeadCell, Cell } from './Pricing.style';
import PriceCard from '../../components/PriceCard/PriceCard';
import { WeeklyAdult, BiAdult, OnDemand, ComparisonTable } from './data/Pricing.data';
import Turtle from "../../assets/icons/myIcons/turtle_icon";
import Rocket from "../../assets/icons/myIcons/rocket_icon";
import Gear from "../../assets/icons/misc/gear_icon";

import CompTable from '../../components/CompTable/CompTable';

const Prices = () => {
    return(
        <>
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