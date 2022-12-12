import React from 'react';
import { Nav, 
    NavbarWrapper, 
    MenuContainer,
    LogoLink, 
    NavIcon, 
    NavMenu,
    LangSwitch,
    FRSwitch,
    ENSwitch,
    NavItem, 
    NavLinks, 
    SocialContainer,
    MobileIcon 
} from './Navbar.style';
import { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../../assets/logos/VoiceUp_Logo_BLK.png";
import YTIcon from "../../assets/icons/social/youtube_icon";
import InstaIcon from "../../assets/icons/social/instagram_icon";
import FBIconAlt from '../../assets/icons/social/facebook_icon_alt';
import TwitIcon from "../../assets/icons/social/twitter_icon";
import { LangContext } from '../../App';
import useWindowSize from '../../hooks/useWindowSize';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isMedium, setIsMedium] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleClick = () => setClick(!click) // Toogle click
    const closeMobileMenu = () => setClick(false);
    // Get context for language selection
    const { language, setLanguage } = useContext(LangContext);
    const screenSize = useWindowSize();

    /**
     * Define state to mobile when screen is small
     */
    const smScreenVisibility = () => {
        if(screenSize.innerWidth <= 1024) {
            // setMobileBtn(false);
            setIsMobile(true);
        } else {
            // setMobileBtn(true);
            setIsMobile(false);
        }
    }

    const isMediumScreen = () => {
        if(screenSize.innerWidth > 1025 && screenSize.innerWidth <= 1248) {      
            setIsMedium(true);
        }
        else {
            setIsMedium(false);
        }
    } 

    /**
     * To completely remove logo from flow. This was a dirty solution
     * to avoid dealing with 'diplay: none' issues with width still present
     * in mobile view dispite element removed by css property 'display: none' ...
     * @returns JSX
     */
    const SiteLogo = () => {
        return(
            <LogoLink to="/" onClick={closeMobileMenu}>
                <NavIcon src={Logo} />
            </LogoLink>
        );
    }
    
    /**
     * Evaluate screen size (small, medium) for icons size and mobile menu.
     */
    useEffect(() => {
        smScreenVisibility();
        isMediumScreen();
    }, [screenSize.innerWidth]);

    return (
        <>
            <Nav>
                <NavbarWrapper>
                    <MenuContainer>
                        { isMobile ? "" : SiteLogo() }
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem><NavLinks to="/" end>Home</NavLinks></NavItem>
                            <NavItem><NavLinks to="/cours">{(language === "FR") ? "Cours" : "Lessons"}</NavLinks></NavItem>
                            <NavItem><NavLinks to="/prof">{(language === "FR") ? "La Prof" : "The Teacher"}</NavLinks></NavItem>
                            <NavItem><NavLinks to="/conditions">Conditions</NavLinks></NavItem>
                            <NavItem><NavLinks to="/tarifs">{(language === "FR") ? "Tarifs" : "princing"}</NavLinks></NavItem>
                            <NavItem><NavLinks to="/contact">Contact</NavLinks></NavItem>
                            <LangSwitch>
                                <FRSwitch onClick={() => setLanguage("FR")} lang={language}>FR</FRSwitch>/
                                <ENSwitch onClick={() => setLanguage("EN")} lang={language}>EN</ENSwitch>
                            </LangSwitch>
                        </NavMenu>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />} 
                        </MobileIcon>
                    </MenuContainer>
                    <SocialContainer>
                        {/* Fine tune icon width (some icons seems bigger due to svg design or canva)  */}
                        <YTIcon width={isMedium ? 34 : 37} />
                        <InstaIcon width={isMedium ? 31 : 35} />
                        <FBIconAlt width={isMedium ? 26 : 29} />
                        {/* <TwitIcon width={isMedium ? 35 : 39} /> */}
                    </SocialContainer>
                </NavbarWrapper>
            </Nav>
        </>
    )
}

export default Navbar;