import styled from "styled-components";
import { ftSizes } from "../../globalVars";

const DEBUG = false;

export const ConditionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
    ${DEBUG ? "border: 1px solid red;" : ""}
`;

export const ConditionTitle = styled.h1`
    width: 80%;
    margin: 60px 0 60px 0;
    text-transform: uppercase;
    font-size: ${ftSizes.M_ftSizeL};
    ${DEBUG ? "background-color: lightgreen;" : ""}

    @media only screen and (max-width: 1024px) {
        font-size: ${ftSizes.S_ftSizeL};
    }
`;

export const ConditionBlock = styled.div`
    width: 80%;
    margin-bottom:30px;
    ${DEBUG ? "background-color: lightblue;" : ""}

    & > h2 {
        margin-bottom: 10px;
        font-weight: 500;
        font-size: ${ftSizes.M_ftSizeL_alt};
        text-transform: uppercase;
    }

    & > p {
        font-weight: 300;
        font-size: ${ftSizes.M_ftSizeMD};
        
        &.deepBottom {
            margin-bottom: 15px;
        }
    }

    &.noBottom {
       margin-bottom: 0; 
    }
    
    @media only screen and (max-width: 1024px) {
        & > h2 {
            font-size: ${ftSizes.S_ftSizeMD};
        }

        & > p {
            font-size: ${ftSizes.S_ftSizeSM};
        }
    }

`;