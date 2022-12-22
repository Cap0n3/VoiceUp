import styled from "styled-components";

const DEBUG = true;

export const PricingSection = styled.section`
    display: flex;
    align-items: center;
    width: 100%;
    ${DEBUG ? "background-color: lightblue;" : ""}
`;

export const PriceCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 600px;
    ${DEBUG ? "background-color: lightgreen;" : ""}
`;