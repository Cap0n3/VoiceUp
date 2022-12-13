import { Route, Routes } from "react-router-dom";
import { useState, createContext, useRef } from "react";
import GlobalStyle from "./globalStyle";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Lessons from "./pages/Lessons/Lessons";
import Teacher from "./pages/Teacher";
import Conditions from "./pages/Conditions";
import Prices from "./pages/Prices";
import Contact from "./pages/Conctact";

// Define contexts
export const LangContext = createContext();
export const ScrollContext = createContext();

function App() {
	// Set contexts
	const [language, setLanguage] = useState("FR");
	const [scrollTopPos, setScrollPos] = useState(0);
	const langValue = { language, setLanguage };
	const mainContainerRef = useRef(null);
	
	const handleScroll = (e) => {
		setScrollPos(e.currentTarget.scrollTop);
	}

	return (
		<>
			<ScrollContext.Provider value={scrollTopPos}>
			<LangContext.Provider value={langValue}>
				<ScrollTop containerRef={mainContainerRef} />
				<div className="main" onScroll={handleScroll} ref={mainContainerRef}>
					<GlobalStyle />
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cours" element={<Lessons />} />
						<Route path="/prof" element={<Teacher />} />
						<Route path="/conditions" element={<Conditions />} />
						<Route path="/tarifs" element={<Prices />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</LangContext.Provider>
			</ScrollContext.Provider>
		</>
		
	);
}

export default App;
