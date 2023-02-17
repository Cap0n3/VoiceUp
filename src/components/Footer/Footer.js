import React, { useContext } from "react";
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
import { LangContext } from "../../App";
import LogoWH from "../../assets/logos/VoiceUp_Logo_WH.png";
import FBIconAlt from "../../assets/icons/social/facebook_icon_alt";
import InstaIcon from "../../assets/icons/social/instagram_icon";
import YTIcon from "../../assets/icons/social/youtube_icon";

const Footer = () => {
    const {language} = useContext(LangContext);
    
    return(
        <FooterContainer>
            <FooterWrapper>
                <FtNavWrapper>
                    <FtNavList>
                        <FtNavItem>
                            <FtNavLinks to="/faq">F.A.Q</FtNavLinks>
                        </FtNavItem>
                        <FtNavItem>
                            <FtNavLinks to="/conditions">{(language === "FR") ? "Conditions des cours" : "Conditions"}</FtNavLinks>
                        </FtNavItem>
                        <FtNavItem>
                            <FtNavLinks to="/tarifs">{(language === "FR") ? "Tarifs" : "Pricing"}</FtNavLinks>
                        </FtNavItem>
                        <FtNavItem>
                            <FtNavLinks to="/contact" state={{ anchor: "#map" }}>{(language === "FR") ? "Localisation" : "Situation"}</FtNavLinks>
                        </FtNavItem>
                    </FtNavList>
                </FtNavWrapper>
                <SocialWrapper>
                    {/* Fine tune icon width (some icons seems bigger due to svg design or canva)  */}
                    <YTIcon width={37} />
                    <InstaIcon width={35} />
                    <FBIconAlt width={29} />
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