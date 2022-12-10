import React from "react";
import { 
    FooterContainer, 
    FooterWrapper, 
    FtNavWrapper,
    FtNavList,
    FtNavItem,
    FtNavLinks,
    SocialWrapper, 
    LogoWrapper,
    SiteLogo,
    CopyrightWrapper
} from "./Footer.style";
import LogoWH from "../../assets/logos/VoiceUp_Logo_WH.png";
import FBIconAlt from "../../assets/icons/social/facebook_icon_alt";
import InstaIcon from "../../assets/icons/social/instagram_icon";
import TwitIcon from "../../assets/icons/social/twitter_icon";
import YTIcon from "../../assets/icons/social/youtube_icon";

const Footer = () => {
    return(
        <FooterContainer>
            <FooterWrapper>
                <FtNavWrapper>
                    <FtNavList>
                        <FtNavItem>
                            <FtNavLinks to="/faq">F.A.Q</FtNavLinks>
                        </FtNavItem>
                        <FtNavItem>
                            <FtNavLinks to="/conditions">Condition des cours</FtNavLinks>
                        </FtNavItem>
                        <FtNavItem>
                            <FtNavLinks to="/tarifs">Tarifs</FtNavLinks>
                        </FtNavItem>
                        <FtNavItem>
                            <FtNavLinks to="/situation">Localisation</FtNavLinks>
                        </FtNavItem>
                    </FtNavList>
                </FtNavWrapper>
                <SocialWrapper>
                    {/* Fine tune icon width (some icons seems bigger due to svg design or canva)  */}
                    <YTIcon width={41} />
                    <InstaIcon width={39} />
                    <FBIconAlt width={33} />
                    {/* <TwitIcon width={39} /> */}
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