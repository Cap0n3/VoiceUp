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
    SocialIcons,
    MobileIcon 
} from './Navbar.style';
import { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../../assets/logos/VoiceUp_Logo_BLK.png"
import YT_Icon from "../../assets/icons/social/youtube_icon.svg"
import INSTA_Icon from "../../assets/icons/social/instagram_icon.svg"
import FB_Icon from "../../assets/icons/social/facebook_icon.svg"
import TWIT_Icon from "../../assets/icons/social/twitter_icon.svg"
import { LangContext } from '../../App';


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [mobileMenu, setMobileBtn] = useState(true);
    const [isMobile, setIsMobile] = useState(false)

    const handleClick = () => setClick(!click) // Toogle click
    const closeMobileMenu = () => setClick(false);
    // Get context for language selection
    const { language, setLanguage } = useContext(LangContext);

    /**
     * Define state to mobile when screen is small
     */
    const smScreenVisibility = () => {
        if(window.innerWidth <= 960) {
            // setMobileBtn(false);
            setIsMobile(true);
        } else {
            // setMobileBtn(true);
            setIsMobile(false);
        }
    }

    window.addEventListener('resize', smScreenVisibility);

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
     * Evaluate screen size on first render and show or not
     * mobile menu button.
     */
    useEffect(() => {
        smScreenVisibility();
    }, []);

    return (
        <>
            <Nav>
                <NavbarWrapper>
                    <MenuContainer>
                        { isMobile ? "" : SiteLogo() }
                        <NavMenu click={click}>
                            <NavItem><NavLinks to="/" end>Home</NavLinks></NavItem>
                            <NavItem><NavLinks to="/cours">Cours</NavLinks></NavItem>
                            <NavItem><NavLinks to="/prof">La Prof</NavLinks></NavItem>
                            <NavItem><NavLinks to="/conditions">Conditions</NavLinks></NavItem>
                            <NavItem><NavLinks to="/tarifs">Tarifs</NavLinks></NavItem>
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
                        <SocialIcons src={YT_Icon} />
                        <SocialIcons src={INSTA_Icon} />
                        <SocialIcons src={FB_Icon} />
                        <SocialIcons src={TWIT_Icon} />
                    </SocialContainer>
                </NavbarWrapper>
            </Nav>
        </>
    )
}

export default Navbar;