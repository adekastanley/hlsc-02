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
			<div className="relative z-10 flex h-full w-full items-center bg-gradient-to-r from-chemonics-navy/95 to-chemonics-navy/90 md:w-[65%] md:[clip-path:polygon(0_0,_100%_0,_85%_50%,_100%_100%,_0_100%)] lg:w-[55%]">
				<div className="px-6 py-12 md:px-16 lg:px-24">
					<h1 className="mb-6 font-montserrat text-5xl font-bold leading-tight text-white md:text-7xl">
						Providing Innovative <br />
						<span className="text-chemonics-lime">Solutions</span> for Health &
						Development
					</h1>
					<p className="mb-8 max-w-2xl font-montserrat text-lg text-gray-200 md:text-xl">
						At HSCL, our cross-cutting and varied experience provides us with a
						holistic and deep knowledge of the health and development sector in
						Africa.
					</p>
					<div className="mt-8">
						<Button
							size="lg"
							className="rounded-none-none bg-chemonics-lime text-chemonics-navy font-bold hover:bg-chemonics-lime-hover"
						>
							Learn More
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
