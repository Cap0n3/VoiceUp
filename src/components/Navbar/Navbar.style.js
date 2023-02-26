import { VoiceUpColors } from "../../colors";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { FONT_SIZES, ELEMENT_HEIGHTS } from "../../globalVars";

// To see all borders (design debug)
var DEBUG = false;

export const Nav = styled.nav `
    display: flex;
    justify-content: center;
    align-items: center;
    ${'' /* flex-grow: 1; */}
    position: fixed;
    top: 0px;
    width: 100%;
    height: ${ELEMENT_HEIGHTS.navbarHeight}px;
    z-index: 999;
    background: ${VoiceUpColors.white};

    /* Small screen */
    @media only screen and (max-width: 1024px) {
        height: ${ELEMENT_HEIGHTS.mobileNavbarHeight}px;
    }  
`;

export const NavbarWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    height: 100%;

    /* Small screen */
    @media only screen and (max-width: 1024px) {
        flex-direction: row-reverse;
    }
`;

export const LogoLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 60px;
    width: 17%;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    ${(DEBUG) ? "background: purple;" : ""}

    /* 13" screen */
    @media only screen and (min-width: 1025px) and (max-width: 1248px) {
        width: 12%;
        padding: 0;
        justify-content: flex-end;
    } 
`;

export const NavIcon = styled.img`
    margin-right: 0.5rem;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100%;
    align-items: center;
    height: 100%;
    ${(DEBUG) ? "background: lightgreen;" : ""}
    
    /* Small screen */
    @media only screen and (max-width: 1024px) {
        justify-content: center;
        width: 20%;
        min-width: 10px;
    } 
`;

export const NavMenu = styled.ul`
    display: flex;
    gap: 3%;
    width: 100%;
    align-items: center;
    list-style: none;
    text-align: center;
    ${(DEBUG) ? "background: lightblue;" : ""}
    
    /* 13" screen */
    @media only screen and (min-width: 1025px) and (max-width: 1248px) {
        gap: 1%;
    }

    /* Small screen */
    @media only screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        gap: 0px;
        position: absolute;
        width: 100%;
        height: calc(100vh - ${ELEMENT_HEIGHTS.mobileNavbarHeight}px);
        top: ${ELEMENT_HEIGHTS.mobileNavbarHeight}px;
        ${'' /* Cannot go right otherwise it extend screen */}
        left: ${({click}) => (click ? 0 : "-100%")};
        opacity: 1;
        transition: all 0.5s ease;
        background: ${VoiceUpColors.white};
        z-index: 999;
    }
`;

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${ELEMENT_HEIGHTS.navbarHeight}px;
    width: 120px;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    ${(DEBUG) ? "background: pink;" : ""}
    
    &:hover {
        height: ${ELEMENT_HEIGHTS.navbarHeight}px;
        border-bottom: 3px solid ${VoiceUpColors.gold};
    };

    /* 13" screen */
    @media only screen and (min-width: 1025px) and (max-width: 1248px) {
        width: 14%;
    }

    /* Small screen */
    @media only screen and (max-width: 1024px) {
        height: 90px;
    }
`;

export const NavLinks = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${FONT_SIZES.desktopNavbar};
    font-weight: 400;
    width: 100px;
    height: ${ELEMENT_HEIGHTS.navbarHeight - 15}px;
    ${(DEBUG) ? "background: brown;" : ""}

    &.active {
        color: ${VoiceUpColors.gold};
    }
`;

export const LangSwitch = styled.li`
    display: flex;
    align-items: center;
    height: ${ELEMENT_HEIGHTS.navbarHeight}px;
    cursor: pointer;
    font-size: ${FONT_SIZES.desktopLangSwitch};
    color: ${VoiceUpColors.grey};
    ${(DEBUG) ? "background: pink;" : ""}
    margin-left: auto;
    margin-right: 30px;
    padding: 0.5rem 1rem;

    /* 13" screen */
    @media only screen and (min-width: 1025px) and (max-width: 1248px) {
        padding: 0.5rem .4rem;
        margin-left: 1%;
        margin-right: 1%;
    }

    /* Small screen */
    @media only screen and (max-width: 1024px) {
        /* margin: auto 0 0 0; */
        margin: 0 auto 0 auto;
    }
`;

export const FRSwitch = styled.span`
    color: ${VoiceUpColors.grey};
    margin-right: 2px;
    text-decoration: ${({lang}) => 
        (lang === "FR" && "underline") ||
        "none"
    }; 
`;

export const ENSwitch = styled.span`
    color: ${VoiceUpColors.grey};
    margin-left: 2px;
    text-decoration: ${({lang}) => 
        (lang === "EN" && "underline") ||
        "none"
    }; 
`;

export const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 330px;
    height: 100%;
    padding: 0 20px 0 20px;
    background: ${VoiceUpColors.gold};
    ${(DEBUG) ? "background: orange;" : ""}

    /* 13" screen */
    @media only screen and (min-width: 1025px) and (max-width: 1248px) {
        width: 250px;
        gap: 20px; 
    }

    /* Small screen */
    @media only screen and (max-width: 1024px) {
        width: 80%;
        gap: 10%; 
    }
`;

export const MobileIcon = styled.div`
    display: none;

    /* Small screen */
    @media only screen and (max-width: 1024px) {
        display: flex;
        font-size: 1.8rem;
        cursor: pointer;
    } 
`;