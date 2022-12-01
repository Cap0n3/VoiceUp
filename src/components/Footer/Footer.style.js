import styled from "styled-components";
import * as globVars from "../../globalVars";
import { VoiceUpColors } from "../../colors";

const debug = false;

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 25px;
    height: 350px;
    background-color: ${VoiceUpColors.darkGrey};
    overflow: hidden;
    ${debug ? "border: 1px solid blue;" : ""}
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
    ${debug ? "border: 1px solid green;" : ""}

    & > hr {
        border: 0.5px solid ${VoiceUpColors.grey}; 
        width: 95%;
    }
`;

export const FtNavWrapper = styled.nav`
    
    ${debug ? "border: 1px solid orange;" : ""}
`;

export const FtNavList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 150px;
    list-style-type: none;

    @media screen and (max-width: 960px) {
        font-size: 0.8em;
        gap: 25px;
    }
`;

export const FtNavItem = styled.li`
    color: ${VoiceUpColors.white};
`;

export const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    ${debug ? "border: 1px solid purple;" : ""}

    @media screen and (max-width: 960px) {
        gap: 20px;
    }
    
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    ${debug ? "border: 1px solid cyan;" : ""}
`;

export const SiteLogo = styled.img`
    width: 100px;
`; 

export const CopyrightWrapper = styled.div`
    display: flex;
    justify-content: center;
    ${debug ? "border: 1px solid pink;" : ""}

    & > p {
        font-size: 0.8em;
        font-weight: 300;
        color: ${VoiceUpColors.white};

        @media screen and (max-width: 960px) {
            font-size: 0.6em;
        }
    }
`;