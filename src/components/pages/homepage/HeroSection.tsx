import React from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
	return (
		<main className="relative h-[85vh] w-full overflow-hidden bg-chemonics-navy-dark min-h-screen">
			{/* Background Image/Video */}
			<div className="absolute inset-0 z-0">
				<img
					src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
					alt="Healthcare professionals"
					className="h-full w-full object-cover opacity-80"
				/>
			</div>

			{/* Chevron/Arrow Content Container */}
			<div
				className="relative z-10 flex h-full w-full items-center md:w-[65%] lg:w-[55%]"
				style={{
					background:
						"linear-gradient(to right, rgba(24, 29, 39, 0.95) 0%, rgba(24, 29, 39, 0.9) 100%)",
					clipPath: "polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%)",
				}}
			>
				<div className="px-6 py-12 md:px-16 lg:px-24">
					<h1 className="font-montserrat text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
						Designing and Implementing{" "}
						<span className="text-chemonics-lime">Public Health Programs</span>
					</h1>
					<p className="mt-6 max-w-lg font-montserrat text-lg leading-relaxed text-gray-200">
						Sanitus Health and Development Foundation (SANHDEF) delivers
						high-impact initiatives across immunization, nutrition, HIV/AIDS,
						and maternal health to drive sustainable development.
					</p>
					<div className="mt-8">
						<Button
							size="lg"
							className="rounded-full bg-chemonics-lime text-chemonics-navy font-bold hover:bg-chemonics-lime-hover"
						>
							Learn More
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
