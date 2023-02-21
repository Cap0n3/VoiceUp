import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { FONT_SIZES } from "../../globalVars";

const DEBUG = true;

const mobileFontSize = "0.65em"

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
        font-size: ${FONT_SIZES.M_ftSizeL_alt};
        text-transform: uppercase;

        @media only screen and (max-width: 1024px) and (min-width: 691px) {
            font-size: ${FONT_SIZES.M_ftSizeMD};
        }

        @media only screen and (max-width: 690px) {
            font-size: ${mobileFontSize};
            padding: 10px;
        }
    }

    & > span {
        font-weight: 500;

        @media only screen and (max-width: 1024px) and (min-width: 691px) {
            font-size: ${FONT_SIZES.M_ftSizeMD};
        }

        @media only screen and (max-width: 690px) {
            font-size: ${FONT_SIZES.XS_ftSizeMD};
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

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const DivCellsWrapper = styled.div`
    display: none;

    @media screen and (max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0;
        height: 80px;
        width: 100%;
        ${DEBUG ? "border: 1px solid cyan;" : ""}
    }
`;

export const MobileDivCell =styled.div`
    display: none;

    @media screen and (max-width: 1024px) {
        display: flex;
        ${DEBUG ? "border: 1px solid white;" : ""}

    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    gap: 15px;
    ${DEBUG ? "border: 1px solid pink;" : ""}


    @media screen and (max-width: 691px) {
        gap: 5px;
        
        & > span {
            font-size: ${mobileFontSize};
        }
    }
`;