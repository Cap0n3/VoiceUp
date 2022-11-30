import styled from "styled-components";
import * as globVars from "../../globalVars";

export const SliderContainer = styled.div`
    width: 100%;
    height: ${({winHeight}) => (winHeight ? (winHeight - globVars.navbarHeight) : globVars.sectionHeight)}px;
    max-height: 1280px;
    min-height: 300px;

    @media screen and (max-width: 960px) {
        height: ${({winHeight}) => (winHeight ? (winHeight - globVars.mobileNavbarHeight) : globVars.sectionHeight)}px;
    }
`;