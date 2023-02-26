import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import GlobalStyle from "./globalStyles/globalStyle";
import { MainContainer } from "./globalStyles/globalCompStyles";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Program from "./pages/Program/Program";
import About from "./pages/About/About";
import Conditions from "./pages/Conditions/Conditions";
import Prices from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import Enroll from "./pages/Enroll/Enroll";
import { HelmetProvider } from "react-helmet-async";

// Define contexts
export const LangContext = createContext();
export const MobileMenuContext = createContext();

function App() {
	// Set needed contexts
	const [language, setLanguage] = useState("FR");
	const langValue = { language, setLanguage };
	const [mobileMenuState, setMobileMenuState] = useState({isOpen: false, scrollPosition: 0});
	const mobileValue = { mobileMenuState, setMobileMenuState };
	const location = useLocation();

	/**
     * Used to scroll back original position when mobile menu is closed.
 	 * Created to address a problem with a visible scroll bar when mobile menu is open.
     */
    useEffect(() => {
        if(!mobileMenuState.isOpen) {
            // console.log(mobileMenuState.scrollPosition)
            // Scroll back to original position
            window.scrollTo(0, mobileMenuState.scrollPosition);
        }
    }, [mobileMenuState])

	/**
	 * Quick and dirty solution to restore scrolling when path change. 
	 * If an anchor is set on link, don't restore scrolling to avoid some problems
	 * when calling anchor from destination page.
	 * 
	 */
	useEffect(() => {
		if(location.state) {
			if(location.state.anchor) return;
		}
		// Scroll top on route change
		window.scrollTo(0, 0);
		// Reset value of mobile context (to avoid keeping scroll pos between page change)
		setMobileMenuState({isOpen: false, scrollPosition: 0})
	}, [location]);

	return (
		<>
			<HelmetProvider>
				<MobileMenuContext.Provider value={mobileValue}>
					<LangContext.Provider value={langValue}>
						<ScrollTop />
						<MainContainer position={mobileMenuState.isOpen ? "fixed" : ""} scrollPos={mobileMenuState.scrollPosition}>
							<GlobalStyle />
							<Navbar />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/methode" element={<Program />} />
								<Route path="/tania" element={<About />} />
								<Route path="/conditions" element={<Conditions />} />
								<Route path="/tarifs" element={<Prices />} />
								<Route path="/contact" element={<Contact />} />
								<Route path="/inscription" element={<Enroll />} />
							</Routes>
						</MainContainer>
					</LangContext.Provider>
				</MobileMenuContext.Provider>
			</HelmetProvider>
		</>
		
	);
}

export default App;
