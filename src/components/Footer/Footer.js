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
import FBIcon from "../../assets/icons/social/facebook_icon";
import InstaIcon from "../../assets/icons/social/instagram_icon";
import TwitIcon from "../../assets/icons/social/twitter_icon";
import YTIcon from "../../assets/icons/social/youtube_icon";

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
                <SocialWrapper>
                    <FBIcon />
                    <InstaIcon />
                    <TwitIcon />
                    <YTIcon />
                </SocialWrapper>
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