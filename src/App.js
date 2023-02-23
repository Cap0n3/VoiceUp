import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import GlobalStyle from "./globalStyles/globalStyle";
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

function App() {
	// Set contexts
	const [language, setLanguage] = useState("FR");
	const langValue = { language, setLanguage };
	const location = useLocation();

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
	}, [location]);

	return (
		<>
			<HelmetProvider>
				<LangContext.Provider value={langValue}>
					<ScrollTop />
					<div className="main">
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
					</div>
				</LangContext.Provider>
			</HelmetProvider>
		</>
		
	);
}

export default App;
