import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "./components/Home";
import Home from "./pages/Home";
import { About } from "./pages/About";

import { Navbar } from "./components/Navbar";
import { SiteFooter } from "./components/SiteFooter";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<SiteFooter />
		</Router>
	);
}

export default App;
