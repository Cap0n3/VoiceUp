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
import Logo from "../../assets/logos/VoiceUp23_BLK.png";
import { ELEMENT_HEIGHTS } from '../../globalVars';
import YTIcon from "../../assets/icons/social/youtube_icon";
import InstaIcon from "../../assets/icons/social/instagram_icon";
import FBIconAlt from '../../assets/icons/social/facebook_icon_alt';
import { LangContext } from '../../App';
import useWindowSize from '../../hooks/useWindowSize';
import useScroll from '../../hooks/useScroll';
import { MobileMenuContext } from '../../App';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isMedium, setIsMedium] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const scrollTopPos = useScroll();
    // Get context for language selection
    const { language, setLanguage } = useContext(LangContext);
    const screenSize = useWindowSize();
    const { mobileMenuState, setMobileMenuState } = useContext(MobileMenuContext);

    /**
     * Handle mobile menu behaviour when clicked. 
     */
    const handleClick = () => {
        // Toogle pane & menu logo
        setClick(!click);
        // Check if pane is open (if it is already open, then it's closing)
        if(mobileMenuState.isOpen) {
            setMobileMenuState({
                isOpen: false,
                // Feed back last known scroll position to scroll back to it
                scrollPosition: mobileMenuState.scrollPosition
            });
            return
        }
        // Set state and capture scoll position
        setMobileMenuState({
            isOpen: !mobileMenuState.isOpen, 
            scrollPosition: scrollTopPos
        });
    }
    
    /**
     * To completely remove logo from flow. This was a dirty solution
     * to avoid dealing with 'diplay: none' issues with width still present
     * in mobile view dispite element removed by css property 'display: none' ...
     * @returns JSX
     */
    const SiteLogo = () => {
        return(
            <LogoLink to="/">
                <NavIcon src={Logo} title="Voice Up" alt="Logo" width={ELEMENT_HEIGHTS.navLogoSize} height={ELEMENT_HEIGHTS.navLogoSize} />
            </LogoLink>
        );
    }
    
    /**
     * Evaluate screen size (small, medium) for icons size and mobile menu.
     */
    useEffect(() => {
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
                            <NavItem><NavLinks to="/methode">{(language === "FR") ? "Méthode" : "Method"}</NavLinks></NavItem>
                            <NavItem><NavLinks to="/tania">{(language === "FR") ? "À propos" : "About"}</NavLinks></NavItem>
                            <NavItem><NavLinks to="/conditions">Conditions</NavLinks></NavItem>
                            <NavItem><NavLinks to="/tarifs">{(language === "FR") ? "Tarifs" : "Pricing"}</NavLinks></NavItem>
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
                        <YTIcon width={isMedium ? 34 : 37} linkURL="https://www.youtube.com/channel/UCG5hqAKbF5OxzGVx0jgoPGA" />
                        <InstaIcon width={isMedium ? 31 : 35} linkURL="https://www.instagram.com/killing_volts/" />
                        <FBIconAlt width={isMedium ? 26 : 29} linkURL="https://www.facebook.com/myvoiceup/" />
                        {/* <TwitIcon width={isMedium ? 35 : 39} /> */}
                    </SocialContainer>
                </NavbarWrapper>
            </Nav>
        </>
    )
}

export default Navbar;