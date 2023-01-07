import React from 'react';
import { PricingSection, TableSection, Table, Thead, Tbody, Row, HeadCell, Cell } from './Pricing.style';
import PriceCard from '../../components/PriceCard/PriceCard';
import { WeeklyAdult, BiAdult, OnDemand } from './data/Pricing.data';
import Turtle from "../../assets/icons/myIcons/turtle_icon";
import Rocket from "../../assets/icons/myIcons/rocket_icon";
import Gear from "../../assets/icons/misc/gear_icon";

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
                            <HeadCell>
                                <Turtle size="30"/>
                                <h2>Bimensuel</h2>
                            </HeadCell>
                            <HeadCell cellBorder="true">
                                <Rocket size="25" />
                                <h2>Hebdomadaire</h2>
                            </HeadCell>
                            <HeadCell>
                                <Gear size="25" />
                                <h2>à la carte</h2>
                            </HeadCell>
                        </Row>
                    </Thead>
                    <Tbody>
                        <Row>
                            <HeadCell>Rattrapages</HeadCell>
                            <Cell>Yep</Cell>
                            <Cell cellBorder="true">Yep</Cell>
                            <Cell>Nope</Cell>
                        </Row>
                        <Row alt="true">
                            <HeadCell>Rattrapages</HeadCell>
                            <Cell>Yep</Cell>
                            <Cell cellBorder="true">Yep</Cell>
                            <Cell>Nope</Cell>
                        </Row>
                    </Tbody>
                </Table>
            </TableSection>
        </>
    )
}

export default Prices;