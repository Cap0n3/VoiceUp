import { VoiceUpColors } from "../../colors";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import * as globVars from "../../globalVars";

// To see all borders (design debug)
var DEBUG = true;

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

    @media screen and (max-width: 960px) {
        height: ${globVars.mobileNavbarHeight}px;
    }  
`;

export const NavbarWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    height: 100%;

    @media screen and (max-width: 960px) {
        flex-direction: row-reverse;
    }
`;

export const LogoLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 50px;
    width: 15%;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    ${(DEBUG) ? "background: purple" : ""}

    @media screen and (max-width: 1180px) {
        width: 15%;
    }
`;

export const NavIcon = styled.img`
    width: 50px;
    margin-right: 0.5rem;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-grow: 1;
    min-width: 1080px;
    align-items: center;
    height: 100%;
    ${(DEBUG) ? "background: lightgreen;" : ""}
    
    @media screen and (max-width: 960px) {
        justify-content: center;
        width: 20%;
        min-width: 10px;
    } 
`;

export const NavMenu = styled.ul`
    display: flex;
    gap: 50px;
    width: 85%;
    align-items: center;
    list-style: none;
    text-align: center;
    ${(DEBUG) ? "background: lightblue;" : ""}
    
    @media screen and (max-width: 960px) {
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
    border-bottom: 2px solid transparent;
    cursor: pointer;
    ${(DEBUG) ? "background: pink;" : ""}
    
    &:hover {
        border-bottom: 2px solid ${VoiceUpColors.gold};
    };

    @media screen and (max-width: 960px) {
        height: 90px;
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

    @media screen and (max-width: 960px) {
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

export const NavLinks = styled(NavLink)`
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: 400;
    ${'' /* padding: 0.5rem 1rem; */}
    ${(DEBUG) ? "background: brown;" : ""}

    &.active {
        color: ${VoiceUpColors.gold};
    }    
`;

export const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 300px;
    height: 100%;
    padding: 0 20px 0 20px;
    background: ${VoiceUpColors.gold};
    ${(DEBUG) ? "background: orange;" : ""}

    @media screen and (max-width: 960px) {
        width: 80%;
    }

    @media screen and (max-width: 280px) {
        gap: 20px;
    }
`;

export const SocialIcons = styled.img`
    width: 30px;
    fill: white;
    filter: invert(100%);
    cursor: pointer;

    &:hover {
        width: 35px;
        filter: invert(95%);
        transition: all 0.3s ease;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: flex;
        font-size: 1.8rem;
        cursor: pointer;
    } 
`;