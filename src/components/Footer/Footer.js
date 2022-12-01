import React from "react";
import { 
    FooterContainer, 
    FooterWrapper, 
    FtNavWrapper,
    FtNavList,
    FtNavItem,
    SocialWrapper, 
    LogoWrapper,
    SiteLogo,
    CopyrightWrapper
} from "./Footer.style";

import LogoWH from "../../assets/logos/VoiceUp_Logo_WH.png"

const Footer = () => {
    return(
        <FooterContainer>
            <FooterWrapper>
                <FtNavWrapper>
                    <FtNavList>
                        <FtNavItem>F.A.Q</FtNavItem>
                        <FtNavItem>Condition des cours</FtNavItem>
                        <FtNavItem>Tarifs</FtNavItem>
                        <FtNavItem>Localisation</FtNavItem>
                    </FtNavList>
                </FtNavWrapper>
                <SocialWrapper></SocialWrapper>
                <hr />
                <LogoWrapper>
                    <SiteLogo src={LogoWH} />
                </LogoWrapper>
                <CopyrightWrapper>
                    <p>© Copyright 2023 My Voice Up ! | Website by Alexandre Guillin | All Rights Reserved</p>
                </CopyrightWrapper>
            </FooterWrapper>
        </FooterContainer>
    );
    
}

export default Footer;