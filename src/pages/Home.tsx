import HeroSection from "@/components/pages/homepage/hero";
import SectionOne from "@/components/pages/homepage/sectionOne";
import { SectionThree } from "@/components/pages/homepage/sectionThree";
import SectionTwo from "@/components/pages/homepage/sectionTwo";
export default function Home() {
	return (
		<>
			<HeroSection />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
		</>
	);
}
