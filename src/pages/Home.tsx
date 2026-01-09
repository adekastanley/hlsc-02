import { HeroSection } from "@/components/pages/homepage/HeroSection";
import { MissionSection } from "@/components/pages/homepage/MissionSection";
import { FocusAreasSection } from "@/components/pages/homepage/FocusAreasSection";
// import HomeAbout from "@/components/pages/homepage/homeAbout";
import HomeAbout from "@/components/pages/homepage/homeAbout";

export default function Home() {
	return (
		<div className="font-montserrat bg-chemonics-navy-light min-h-screen text-white">
			<HeroSection />
			<HomeAbout />
			<MissionSection />
			<FocusAreasSection />
		</div>
	);
}
