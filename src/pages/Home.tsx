import HeroSection from "@/components/pages/homepage/hero";
import { SectionFour } from "@/components/pages/homepage/sectionFour";
import SectionOne from "@/components/pages/homepage/sectionOne";
import { SectionThree } from "@/components/pages/homepage/sectionThree";
import SectionTwo from "@/components/pages/homepage/sectionTwo";
export default function Home() {
	return (
		<>
			<HeroSection />
			<SectionThree />
			<SectionOne />
			<SectionTwo />
			<SectionFour />
		</>
	);
}
