import React from 'react';
import { PricingSection, TableSection, Table, Thead, Tbody, Row, HeadCell, Cell } from './Pricing.style';
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
                    <Thead>
                        <Row rowHeight="180px">
                            <td className="empty"></td>
                            <HeadCell>Bimensuel</HeadCell>
                            <HeadCell>Hebdomadaire</HeadCell>
                            <HeadCell>A la carte</HeadCell>
                        </Row>
                    </Thead>
                    <Tbody>
                        <Row>
                            <HeadCell>Rattrapages</HeadCell>
                            <Cell>Yep</Cell>
                            <Cell>Yep</Cell>
                            <Cell>Nope</Cell>
                        </Row>
                        <Row alt="true">
                            <HeadCell>Rattrapages</HeadCell>
                            <Cell>Yep</Cell>
                            <Cell>Yep</Cell>
                            <Cell>Nope</Cell>
                        </Row>
                    </Tbody>
                </Table>
            </TableSection>
        </>
    )
}

export default Prices;