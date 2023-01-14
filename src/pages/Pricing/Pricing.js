import React, { useRef } from 'react';
import { PricingSection, TableSection } from './Pricing.style';
import PriceCard from '../../components/PriceCard/PriceCard';
import { WeeklyAdult, BiAdult, OnDemand, ComparisonTable, pricingHeaderData } from './data/Pricing.data';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import CompTable from '../../components/CompTable/CompTable';
import useAppear from '../../hooks/useAppear';
import Tooltip from "../../components/Tooltip/Tooltip";

const Prices = () => {
    const priceSectionRef = useRef(null);
    const tableSectionRef = useRef(null);
    const isTableVisible = useAppear(tableSectionRef, 380);

    return(
        <>
            <Header data={pricingHeaderData} position={{posX: 0, posY: 50}} />
            <PricingSection ref={priceSectionRef}>
                <PriceCard data={BiAdult}  />
                <PriceCard data={WeeklyAdult} />
                <PriceCard data={OnDemand} />
            </PricingSection>
            <TableSection ref={tableSectionRef}>
                <CompTable isActive={isTableVisible ? "active" : ""} tableData={ComparisonTable} iconColors={["#1B173", "#896FBC", "#D9A47D"]}/>
            </TableSection>
            <div style={{width: "100%", height: "150px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Tooltip content="Cillum consequat fugiat ullamco labore consectetur nostrud exercitation et reprehenderit consectetur tempor. Reprehenderit adipisicing cupidatat veniam deserunt Lorem eiusmod eu est laborum do." place="right" size={{width: 200, height: 240}} boxStyle={{fontColor: "white", bgColor: "#666"}}>
                    <p style={{fontSize: "3em", border: "1px solid black"}}>Tooltip</p>
                </Tooltip>
            </div>
            <Footer />
        </>
    )
}

export default Prices;