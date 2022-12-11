import { VoiceUpColors } from "../../colors";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import * as globVars from "../../globalVars";

// To see all borders (design debug)
var DEBUG = false;

export const Nav = styled.nav `
    display: flex;
    flex-grow: 1;
    height: ${globVars.navbarHeight}px;
    justify-content: center;
    align-items: center;
    font-size: 1.1em;
    position: sticky;
    top: 0;
    z-index: 999;
    background: ${VoiceUpColors.white};

    /* Small screen */
    @media only screen and (max-width: 1024px) {
        height: ${globVars.mobileNavbarHeight}px;
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
    width: 50px;
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
    gap: 2%;
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
        height: calc(100vh - ${globVars.mobileNavbarHeight}px);
        top: ${globVars.mobileNavbarHeight}px;
        ${'' /* Cannot go right otherwise it extend screen */}
        left: ${({click}) => (click ? 0 : "-100%")};
        opacity: 1;
        transition: all 0.5s ease;
        background: ${VoiceUpColors.white};
    }
`;

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${globVars.navbarHeight}px;
    width: 120px;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    ${(DEBUG) ? "background: pink;" : ""}
    
    &:hover {
        height: ${globVars.navbarHeight}px;
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
    font-size: 0.9em;
    font-weight: 400;
    width: 100px;
    height: ${globVars.navbarHeight - 15}px;
    ${'' /* padding: 0.5rem 1rem; */}
    ${(DEBUG) ? "background: brown;" : ""}

    &.active {
        color: ${VoiceUpColors.gold};
    }

    /* 13" screen */
    @media only screen and (min-width: 1025px) and (max-width: 1248px) {
        font-size: 0.8em;
    } 
`;

export const LangSwitch = styled.li`
    display: flex;
    align-items: center;
    height: ${globVars.navbarHeight}px;
    cursor: pointer;
    font-size: 0.8em;
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
        font-size: 0.6em;
    }

    /* Small screen */
    @media only screen and (max-width: 1024px) {
        margin: auto 0 0 0;
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