import { Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.style.css";
import GlobalStyle from "./globalStyle";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Lessons from "./pages/Lessons";
import Teacher from "./pages/Teacher";
import Conditions from "./pages/Conditions";
import Prices from "./pages/Prices";
import Contact from "./pages/Conctact";
import { ScreenProvider } from "./contexts/screenContext";

export const LangContext = createContext();
export const ScrollContext = createContext();

function App() {
	// All useful contexts
	const [language, setLanguage] = useState("FR");
	const [scrollTopPos, setScrollPos] = useState(null);
	const langValue = { language, setLanguage };
	
	const handleScroll = (e) => {
		setScrollPos(e.currentTarget.scrollTop);
	}
	
	return (
		<div className="main" onScroll={handleScroll}>
			<ScreenProvider>
			<LangContext.Provider value={langValue}>
			<ScrollContext.Provider value={scrollTopPos}>
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
			</ScrollContext.Provider>
			</LangContext.Provider>
			</ScreenProvider>
		</div>
		
	);
}

export default App;
