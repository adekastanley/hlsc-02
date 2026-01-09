export function MissionSection() {
	return (
		<section className="relative h-[600px] overflow-hidden bg-chemonics-navy-dark  ">
			{/* Background Video Layer */}
			<div
				style={{ backgroundImage: "url(/assets/samg.webp)" }}
				className="absolute inset-0 z-0 opacity-40 bg-fixed bg-no-repeat bg-cover"
			>
				{/* // <img
				// 	className="h-full w-full object-cover bg-fixed"
				// 	src="/assets/samg.webp"
				// 	alt=""
				// /> */}
			</div>

			{/* Overlay Content */}
			<div className="relative z-10 flex h-full items-center justify-center px-6">
				<div className="max-w-4xl text-center">
					<h2 className="font-montserrat text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
						{/* Driving <span className="text-chemonics-lime">positive change</span>{" "}
						through health systems strengthening and social empowerment. */}
						Lorem, ipsum dolor. Lorem, ipsum.
					</h2>
				</div>
			</div>
		</section>
	);
}
