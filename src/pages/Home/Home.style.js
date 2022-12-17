import styled from "styled-components";
import { elementHeights } from "../../globalVars";

export const SliderContainer = styled.div`
    width: 100%;
    height: ${({winHeight}) => (winHeight ? (winHeight - elementHeights.navbarHeight) : elementHeights.sectionHeight)}px;
    max-height: 1280px;
    min-height: 300px;

    @media only screen and (max-width: 1024px) {
        height: ${({winHeight}) => (winHeight ? (winHeight - elementHeights.mobileNavbarHeight) : elementHeights.sectionHeight)}px;
    }
`;