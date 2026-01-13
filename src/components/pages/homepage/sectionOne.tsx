import { TextGradientScroll } from "@/components/ui/scrollingText";
import { MoveRight } from "lucide-react";

const sectionOneLinks = [
	{
		title: "Why We Exist",
		link: "#why-we-exist",
		icon: "",
	},
	{
		title: "Our Mission",
		link: "#our-mission",
		icon: "",
	},
	{
		title: "Our Vision",
		link: "#our-vision",
		icon: "",
	},
];

export default function SectionOne() {
	const whyWeExist = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt impedit similique quidem odit excepturi placeat amet eligendi, eum nostrum earum?`;

	return (
		<section className="text-center min-h-[80vh] lg:px-[10rem] mx-auto flex-col md:flex-row gap-10  flex lg:justify-between items-center w-full  bg-white">
			<div className="lg:w-[50%] text-black  h-full">
				<TextGradientScroll
					text={whyWeExist}
					className="max-w-7xl lg:px-42 mx-auto text-center font-sans text-2xl md:text-3xl lg:text-4xl font-light justify-center"
					type="word"
					textOpacity="soft"
				/>
			</div>
			<div className="lg:w-[20vw] md:w-[50%] h-full   w-full px-5 lg:px-10  relative min-h-20">
				<ul className="flex flex-col">
					{sectionOneLinks.map((link, i) => {
						return (
							<li className="text-black  flex items-center justify-between group w-full  max-sm:pr-20 lg:w-[10rem]">
								<a
									className="group-hover:text-chemonics-lime-hover"
									href={link.link}
									key={i}
								>
									{link.title}
								</a>
								<span className=" group-hover:text-chemonics-lime-hover lg:opacity-25 group-hover:opacity-100 transition-opacity">
									<MoveRight />
								</span>
							</li>
						);
					})}
				</ul>
				.
			</div>
		</section>
	);
}
