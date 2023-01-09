import styled from "styled-components";
import { VoiceUpColors } from "../../colors";
import { ftSizes } from "../../globalVars";

const DEBUG = false;

export const Table = styled.table`
    width: 80%;
    border-collapse: collapse; // Remove borders
`;

export const Thead = styled.thead`
    ${DEBUG ? "background-color: red;" : ""}
`;

export const Tbody = styled.tbody`
    ${DEBUG ? "background-color: purple;" : ""}
`;

export const Row = styled.tr`
    background-color: ${({alt}) => (alt ? VoiceUpColors.lightGrey : "")};
    height: ${({rowHeight}) => (rowHeight ? rowHeight : "80px")};
`;

export const HeadCell = styled.th`
    border-left: ${({cellBorder}) => (cellBorder ? `1px solid ${VoiceUpColors.altGrey}` :  "none")};
    border-right: ${({cellBorder}) => (cellBorder ? `1px solid ${VoiceUpColors.altGrey}` :  "none")};
    text-align: ${({textAlign}) => (textAlign ? textAlign : "center")};
    vertical-align: center;

    & > h2 {
        margin-top: 30px;
        font-size: ${ftSizes.M_ftSizeL_alt};
        text-transform: uppercase;

        @media only screen and (max-width: 1024px) and (min-width: 691px) {
            font-size: ${ftSizes.M_ftSizeMD};
        }

        @media only screen and (max-width: 690px) {
            font-size: ${ftSizes.S_ftSizeSM};
        }
    }

    & > span {
        @media only screen and (max-width: 1024px) and (min-width: 691px) {
            font-size: ${ftSizes.M_ftSizeMD};
        }
        
        @media only screen and (max-width: 690px) {
            font-size: ${ftSizes.XS_ftSizeMD};
        }
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