import styled from "styled-components";
import { elementHeights } from "../../globalVars";

const DEBUG = false;

export const PricingSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    width: 100%;
    height: ${elementHeights.sectionHeight + 100}px;
    overflow: hidden;
    /* padding: 60px 0 60px 0; */
    ${DEBUG ? "background-color: lightblue;" : ""}

    @media only screen and (max-width: 1280px) {
        gap: 10px;
    }

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 30px;
    }
`;

export const TableSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: ${elementHeights.sectionHeight}px;
    padding: 60px 0 60px 0;
    overflow: hidden;
    ${DEBUG ? "background-color: lightgreen;" : ""}
`;
