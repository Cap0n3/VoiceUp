import styled from "styled-components";

const DEBUG = false;

export const PricingSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
    padding: 60px 0 60px 0;
    ${DEBUG ? "background-color: lightblue;" : ""}
`;