import React from 'react';
import { PricingSection } from './Pricing.style';
import PriceCard from '../../components/PriceCard/PriceCard';
import { WeeklyAdult, BiAdult } from './data/Pricing.data';

const Prices = () => {
    return(
        <>
            <PricingSection>
                <PriceCard data={WeeklyAdult} />
                <PriceCard data={BiAdult} />
            </PricingSection>
        </>
    )
}

export default Prices