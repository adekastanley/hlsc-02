import { HeroSection } from "@/components/pages/homepage/HeroSection";
import { MissionSection } from "@/components/pages/homepage/MissionSection";
import { FocusAreasSection } from "@/components/pages/homepage/FocusAreasSection";
import { FeaturedProjectsSection } from "@/components/pages/homepage/FeaturedProjectsSection";

export default function Home() {
	return (
		<div className="font-montserrat bg-chemonics-navy-light min-h-screen text-white">
			<HeroSection />
			<MissionSection />
			<FocusAreasSection />
			<FeaturedProjectsSection />
		</div>
	);
}
