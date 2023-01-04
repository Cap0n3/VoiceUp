import React from 'react';
import { PricingSection } from './Pricing.style';
import PriceCard from '../../components/PriceCard/PriceCard';
import { WeeklyAdult, BiAdult, OnDemand } from './data/Pricing.data';

const Prices = () => {
    return(
        <>
            <PricingSection>
                <PriceCard data={BiAdult} />
                <PriceCard data={WeeklyAdult} />
                <PriceCard data={OnDemand} />
            </PricingSection>
        </>
    )
}

export default Prices;