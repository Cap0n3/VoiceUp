import styled from "styled-components";
import { ftSizes } from "../../globalVars";

const DEBUG = true;

export const PricingSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    width: 100%;
    padding: 60px 0 60px 0;
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
    padding: 60px 0 60px 0;
    ${DEBUG ? "background-color: lightgreen;" : ""}
`;

// === Table style === //

export const Table = styled.table`
    width: 80%;
    border-collapse: collapse; // Remove borders
`;

export const Thead = styled.thead`
    background-color: red;
`;

export const Tbody = styled.tbody`
    background-color: purple;
`;

export const Row = styled.tr`
    background-color: ${({alt}) => (alt ? "cyan" : "")};
    height: ${({rowHeight}) => (rowHeight ? rowHeight : "80px")};
`;

export const HeadCell = styled.th`
    border-left: ${({cellBorder}) => (cellBorder ? "1px solid lightgrey" :  "none")};
    border-right: ${({cellBorder}) => (cellBorder ? "1px solid lightgrey" :  "none")};
    vertical-align: center;

    & > h2 {
        margin-top: 30px;
        font-size: ${ftSizes.M_ftSizeL_alt};
        text-transform: uppercase;
    }
`;

export const Cell = styled.td`
    border-left: ${({cellBorder}) => (cellBorder ? "1px solid lightgrey" :  "none")};
    border-right: ${({cellBorder}) => (cellBorder ? "1px solid lightgrey" :  "none")};
    text-align: center;
    vertical-align: center;
`;