import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Teacher from "./pages/Teacher";
import Conditions from "./pages/Conditions";
import Prices from "./pages/Prices";
import Contact from "./pages/Conctact";

function App() {
	return (
		<>
			<GlobalStyle />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cours" element={<Lessons />} />
				<Route path="/prof" element={<Teacher />} />
				<Route path="/conditions" element={<Prices />} />
				<Route path="/tarifs" element={<Conditions />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
		
	);
}

export default App;
