import React from 'react';
import { Nav, 
    NavbarWrapper, 
    MenuContainer,
    LogoLink, 
    NavIcon, NavMenu, 
    NavItem, 
    NavLink, 
    SocialContainer, 
    MobileIcon 
} from './Navbar.style';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../../assets/logos/VoiceUp_Logo_BLK.png"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [mobileMenu, setMobileBtn] = useState(true);
    const [isMobile, setIsMobile] = useState(false)

    const handleClick = () => setClick(!click) // Toogle click
    const closeMobileMenu = () => setClick(false);

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
                            <NavItem><NavLink to="/">Home</NavLink></NavItem>
                            <NavItem><NavLink to="/cours">Cours</NavLink></NavItem>
                            <NavItem><NavLink to="/prof">La Prof</NavLink></NavItem>
                            <NavItem><NavLink to="/conditions">Conditions</NavLink></NavItem>
                            <NavItem><NavLink to="/tarifs">Tarifs</NavLink></NavItem>
                            <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
                        </NavMenu>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />} 
                        </MobileIcon>
                    </MenuContainer>
                    <SocialContainer>
                    </SocialContainer>
                </NavbarWrapper>
            </Nav>
        </>
    )
}

export default Navbar;