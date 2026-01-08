import { Link } from "react-router-dom";
const link1 = [
	{
		title: "Features",
		to: "#",
	},
	{
		title: "Solution",
		to: "#",
	},
	{
		title: "Customers",
		to: "#",
	},
];
const link2 = [
	{
		title: "Pricing",
		to: "#",
	},
	{
		title: "Help",
		to: "#",
	},
	{
		title: "About",
		to: "#",
	},
];

export default function FooterSection() {
	return (
		<footer
			className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
		>
			<div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
				<div
					className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)] z-50"
					style={{
						transform: "translate3d(0,0,0)",
						backfaceVisibility: "hidden",
					}}
				>
					<div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between relative z-20">
						<div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
							<div className="flex flex-col gap-1 sm:gap-2">
								<h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">
									First
								</h3>
								{link1.map((item, index) => {
									return (
										<Link
											to={item.to}
											key={index}
											className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
										>
											{item.title}
										</Link>
									);
								})}
							</div>
							<div className="flex flex-col gap-1 sm:gap-2">
								<h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">
									Second
								</h3>
								{link2.map((item, index) => {
									return (
										<Link
											to={item.to}
											key={index}
											className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
										>
											{item.title}
										</Link>
									);
								})}
							</div>
						</div>
						<div className="flex flex-row justify-between items-end sm:items-end gap-4 sm:gap-0 overflow-hidden">
							<h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
								HSCL
							</h1>
							<p className="text-white text-sm sm:text-base">©copyright 2026</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
