import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "./components/Home";
import Home from "./pages/Home";
import { About } from "./pages/About";

import { HeroHeader } from "@/components/ui/navigation";
import FooterSection from "@/components/ui/footer";

function App() {
	return (
		<Router>
			<HeroHeader />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<FooterSection />
		</Router>
	);
}

export default App;
