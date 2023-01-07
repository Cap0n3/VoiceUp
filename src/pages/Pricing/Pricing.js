import React from 'react';
import { PricingSection, TableSection, Table } from './Pricing.style';
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
            <TableSection>
                <Table>
                    <thead>
                        <tr>
                            <td></td>
                            <th>Bimensuel</th>
                            <th>Hebdomadaire</th>
                            <th>A la carte</th>
                        </tr>
                    </thead>
                </Table>
            </TableSection>
        </>
    )
}

export default Prices;