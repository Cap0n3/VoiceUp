import styled from "styled-components";
import { FONT_SIZES } from "../../globalVars";
import { NavLink } from 'react-router-dom';
import { VoiceUpColors } from "../../colors";

const DEBUG = false;

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 25px;
    height: 350px;
    background-color: ${VoiceUpColors.darkGrey};
    overflow: hidden;
    ${DEBUG ? "border: 1px solid blue;" : ""}
`;

export const FooterWrapper = styled.div`
    display: flex;
    ${'' /* padding-top: 20px;
    padding-bottom: 20px; */}
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    ${DEBUG ? "border: 1px solid green;" : ""}

    & > hr {
        border: 0.5px solid ${VoiceUpColors.grey}; 
        width: 95%;
    }
`;

export const FtNavWrapper = styled.nav`
    
    ${DEBUG ? "border: 1px solid orange;" : ""}
`;

export const FtNavList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 150px;
    list-style-type: none;
    font-size: ${FONT_SIZES.desktopFooterLinks};

    @media only screen and (max-width: 1024px) {
        font-size: ${FONT_SIZES.mobileFooterLinks};
        gap: 25px;
    }
`;

export const FtNavItem = styled.li`
    cursor: pointer;
    ${(DEBUG) ? "background: brown;" : ""}
`;

export const FtNavLinks = styled(NavLink)`
    text-decoration: none;
    color: ${VoiceUpColors.white};
`;

export const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    ${DEBUG ? "border: 1px solid purple;" : ""}

    @media only screen and (max-width: 1024px) {
        gap: 20px;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    ${DEBUG ? "border: 1px solid cyan;" : ""}
`;

export const CopyrightWrapper = styled.div`
    display: flex;
    justify-content: center;
    ${DEBUG ? "border: 1px solid pink;" : ""}

    & > p {
        font-size: ${FONT_SIZES.desktop_copyright};
        font-weight: 300;
        color: ${VoiceUpColors.white};

        @media only screen and (max-width: 1024px) {
            font-size: ${FONT_SIZES.mobile_copyright};
        }
    }
`;
