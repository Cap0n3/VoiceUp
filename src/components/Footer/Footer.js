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
    CopyrightWrapper
} from "./Footer.style";
import { LangContext } from "../../App";
import LogoWH from "../../assets/logos/VoiceUp23_WH.png";
import { ELEMENT_HEIGHTS } from "../../globalVars";
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
                            <FtNavLinks to="/tarifs" state={{ anchor: "#faq"}}>F.A.Q</FtNavLinks>
                        </FtNavItem>
                        <FtNavItem>
                            <FtNavLinks to="/conditions">Conditions</FtNavLinks>
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
                    <YTIcon width={37} linkURL="https://www.youtube.com/channel/UCG5hqAKbF5OxzGVx0jgoPGA" />
                    <InstaIcon width={35} linkURL="https://www.instagram.com/killing_volts/" />
                    <FBIconAlt width={29} linkURL="https://www.facebook.com/myvoiceup/" />
                    {/* <TwitIcon width={39} /> */}
                </SocialWrapper>
                <hr />
                <LogoWrapper>
                    <img src={LogoWH} title="Voice Up" alt="Logo" width={ELEMENT_HEIGHTS.footerLogoSize} height={ELEMENT_HEIGHTS.footerLogoSize} />
                </LogoWrapper>
                <CopyrightWrapper>
                    <p>© Copyright 2023 My Voice Up ! | Coded with love by Alexandre Guillin | All Rights Reserved</p>
                </CopyrightWrapper>
            </FooterWrapper>
        </FooterContainer>
    );    
}

export default Footer;