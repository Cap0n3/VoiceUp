import { VoiceUpColors } from "../../colors";
import styled from "styled-components";
import { Container } from '../../globalStyle';
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';

// To see all borders (design debug)
var DEBUG = false;

export const Nav = styled.nav `
    display: flex;
    flex-grow: 1;
    height: 80px;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    position: sticky;
    top: 0;
    z-index: 999;
    background: ${VoiceUpColors.white};
    
`;

export const NavbarWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    height: 80px;

    @media screen and (max-width: 960px) {
        flex-direction: row-reverse;
    }
`;

export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 50px;
    width: 20%;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    ${(DEBUG) ? "background: purple" : ""}
`;

export const NavIcon = styled.img`
    width: 50px;
    margin-right: 0.5rem;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: 80px;
    ${(DEBUG) ? "background: lightgreen;" : ""}
    
    @media screen and (max-width: 960px) {
        justify-content: center;
    } 
`;

export const NavMenu = styled.ul`
    display: flex;
    gap: 50px;
    width: 80%;
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
        height: 90vh;
        top: 80px;
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
    height: 80px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    ${(DEBUG) ? "background: pink;" : ""}
    
    &:hover {
        border-bottom: 2px solid ${VoiceUpColors.gold};
    };
`

export const NavLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: 400;
    padding: 0.5rem 1rem;
    ${(DEBUG) ? "background: brown;" : ""}
    
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

    @media screen and (max-width: 960px;) {
        display: flex;
        order: 1;
    }
`;

export const SocialIcons = styled.img`
    width: 30px;
    fill: white;
    stroke: red;
    filter: invert(100%);
    cursor: pointer;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: flex;
        font-size: 1.8rem;
        cursor: pointer;
    } 
`;