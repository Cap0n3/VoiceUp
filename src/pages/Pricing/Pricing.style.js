import styled from "styled-components";

const DEBUG = true;

export const PricingSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 60px 0 60px 0;
    ${DEBUG ? "background-color: lightblue;" : ""}
`;