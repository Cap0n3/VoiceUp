import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { FONT_SIZES, FONT_WEIGHTS } from "../../globalVars";

const DEBUG = false;

export const TableWrapper = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: ${({tableHeight}) => (tableHeight ? `${tableHeight}px` : "0px")}; // + padding
    ${DEBUG ? "background-color: #7DCAD9;" : ""}
`;

export const Table = styled.table`
    margin-top: 100%;
    width: 80%;
    border-collapse: collapse; // Remove borders
    opacity: 0;
    transition: margin-top 600ms ease, opacity 2000ms ease;
    
    &.active {
        opacity: 1;
        margin-top: 0;
    }
`;

export const Thead = styled.thead`
    ${DEBUG ? "background-color: red;" : ""}
`;

export const Tbody = styled.tbody`
    ${DEBUG ? "background-color: purple;" : ""}
`;

export const Row = styled.tr`
    background-color: ${({alt}) => (alt ? VoiceUpColors.white : "")};
    height: ${({rowHeight}) => (rowHeight ? rowHeight : "80px")};
`;

export const HeadCell = styled.th`
    border-left: ${({cellBorder}) => (cellBorder ? `1px solid ${VoiceUpColors.altGrey}` :  "none")};
    border-right: ${({cellBorder}) => (cellBorder ? `1px solid ${VoiceUpColors.altGrey}` :  "none")};
    text-align: ${({textAlign}) => (textAlign ? textAlign : "center")};
    vertical-align: center;

    & > h2 {
        margin-top: 30px;
        font-size: ${FONT_SIZES.desktopBody};
        font-weight: ${FONT_WEIGHTS.headingsWeight};
        text-transform: uppercase;

        @media only screen and (max-width: 1024px) and (min-width: 691px) {
            font-size: ${FONT_SIZES.mobileBody};
        }

        @media only screen and (max-width: 690px) {
            font-size: ${FONT_SIZES.sm_mobileTableHeadings};
            padding: 10px;
        }
    }

    @media screen and (max-width: 1024px) {
        width: 33%;
    }
`;

export const EmptyCell = styled.td`
    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const IconWrapper = styled.div`
    display: inline-block;
    width: 50px;
    height: 50px;
    ${DEBUG ? "border: 1px solid purple;" : ""}
`;

export const Cell = styled.td`
    border-left: ${({cellBorder}) => (cellBorder ? `1px solid ${VoiceUpColors.altGrey}` :  "none")};
    border-right: ${({cellBorder}) => (cellBorder ? `1px solid ${VoiceUpColors.altGrey}` :  "none")};
    text-align: center;
    vertical-align: center;
`;

export const DivCellsWrapper = styled.div`
    display: flex;
    height: 80px;
    ${DEBUG ? "border: 1px solid cyan;" : ""}
`;

export const MobileDivCell =styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    background-color: ${VoiceUpColors.white};
    border-left: ${({middle}) => (middle ? `solid 1px ${VoiceUpColors.altGrey}` : "")};
    border-right: ${({middle}) => (middle ? `solid 1px ${VoiceUpColors.altGrey}` : "")};
    ${DEBUG ? "border: 1px solid white;" : ""}
`;

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    gap: 15px;
    font-size: ${FONT_SIZES.desktopBody};
    font-weight: ${FONT_WEIGHTS.headingsWeight};
    ${DEBUG ? "border: 1px solid pink;" : ""}


    @media screen and (max-width: 691px) {
        gap: 5px;
        font-size: ${FONT_SIZES.sm_mobileTableHeadings};
    }
`;