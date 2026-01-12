import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";

import "./index.css";

function App() {
	return (
		<main className="font-montserrat">
			<Router>
				<Navbar />
				<Home />
				<SiteFooter />
			</Router>
		</main>
	);
}

export default App;
