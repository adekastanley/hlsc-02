import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-chemonics-navy shadow-md py-4" : "bg-transparent py-6"
			}`}
		>
			<div className="container mx-auto flex items-center justify-between px-6">
				{/* Logo */}
				<Link
					to="/"
					className="text-2xl font-bold font-montserrat tracking-tighter text-white"
				>
					SANHDEF
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center gap-8">
					<Link
						to="/"
						className="text-sm font-medium text-white hover:text-chemonics-lime transition-colors"
					>
						Home
					</Link>
					<Link
						to="/about"
						className="text-sm font-medium text-white hover:text-chemonics-lime transition-colors"
					>
						About Us
					</Link>
					<Link
						to="/projects"
						className="text-sm font-medium text-white hover:text-chemonics-lime transition-colors"
					>
						Projects
					</Link>
					<Button className="bg-chemonics-lime text-chemonics-navy font-bold hover:bg-chemonics-lime-hover rounded-full px-6">
						Contact
					</Button>
				</div>

				{/* Mobile Menu Toggle */}
				<div className="md:hidden">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="text-white"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="absolute top-full left-0 w-full bg-chemonics-navy p-6 shadow-xl md:hidden flex flex-col gap-4">
					<Link to="/" className="text-white font-medium">
						Home
					</Link>
					<Link to="/about" className="text-white font-medium">
						About Us
					</Link>
					<Link to="/projects" className="text-white font-medium">
						Projects
					</Link>
				</div>
			)}
		</nav>
	);
}
