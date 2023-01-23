import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import GlobalStyle from "./globalStyle";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Lessons from "./pages/Lessons/Lessons";
import Teacher from "./pages/Teacher/Teacher";
import Conditions from "./pages/Conditions/Conditions";
import Prices from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";

// Define contexts
export const LangContext = createContext();

function App() {
	// Set contexts
	const [language, setLanguage] = useState("FR");
	const langValue = { language, setLanguage };
	const location = useLocation();

	useEffect(() => {
		// Scroll top on route change
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<LangContext.Provider value={langValue}>
				<ScrollTop />
				<div className="main">
					<GlobalStyle />
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/methode" element={<Lessons />} />
						<Route path="/tania" element={<Teacher />} />
						<Route path="/conditions" element={<Conditions />} />
						<Route path="/tarifs" element={<Prices />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</LangContext.Provider>
		</>
		
	);
}

export default App;
