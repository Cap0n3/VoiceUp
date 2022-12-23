import React from 'react';
import { PricingSection } from './Pricing.style';
import PriceCard from '../../components/PriceCard/PriceCard';
import { WeeklyAdult } from './data/Pricing.data';

const Prices = () => {
    return(
        <>
            <PricingSection>
                <PriceCard data={WeeklyAdult} />
            </PricingSection>
        </>
    )
}

export default Prices