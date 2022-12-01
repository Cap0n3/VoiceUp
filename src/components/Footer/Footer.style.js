import styled from "styled-components";
import * as globVars from "../../globalVars";
import { VoiceUpColors } from "../../colors";

const debug = true;

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 10px;
    height: ${globVars.sectionHeight}px;
    background-color: ${VoiceUpColors.altGrey};
    overflow: hidden;
    ${debug ? "border: 1px solid blue" : ""}
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    height: 100%;
    ${debug ? "border: 1px solid green" : ""}
`;

export const FtNavWrapper = styled.nav`
    
    ${debug ? "border: 1px solid orange" : ""}
`;

export const FtNavList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 150px;
    list-style-type: none;
`;

export const FtNavItem = styled.li`

`;

export const SocialWrapper = styled.div`
    ${debug ? "border: 1px solid purple" : ""}
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    ${debug ? "border: 1px solid cyan" : ""}
`;

export const SiteLogo = styled.img`
    width: 100px;
`; 

export const CopyrightWrapper = styled.div`
    display: flex;
    justify-content: center;
    ${debug ? "border: 1px solid pink" : ""}
`;