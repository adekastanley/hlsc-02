import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { OurWork } from "./pages/OurWork";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";

import "./index.css";

function App() {
	return (
		<main className="font-montserrat">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/our-work" element={<OurWork />} />
				</Routes>
				<SiteFooter />
			</Router>
		</main>
	);
}

export default App;
