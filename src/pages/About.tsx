import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const leadershipTeam = [
	{
		name: "Dr. Pat Youri",
		role: "Board Chairman",
		bio: "Medical Doctor with specialist qualifications in Paediatrics and Public Health, possessing over three decades of professional experience in Sub-Sahara Africa and the United Kingdom.",
	},
	{
		name: "Dr. Nkata Chuku",
		role: "Founding Partner / Board Secretary",
		bio: "Medical Doctor and Public Health Expert with over 15 years of experience in health systems strengthening, specialized in health economics and policy.",
	},
	{
		name: "Dr. Alozie Ananaba",
		role: "Managing Partner",
		bio: "Qualified Physician and Public Health expert with over 25 years of operational and management experience in Public Health.",
	},
	{
		name: "Pharm. Rosemary Silaa",
		role: "Board Member",
		bio: "Experienced Public Health professional with a degree in Pharmacy, an advanced diploma in Procurement and Supply Chain Management, and an MBA.",
	},
	{
		name: "Victor Kamara",
		role: "Board Member",
		bio: "Development expert with a Public Health background, having worked with various organizations at regional, national, and international levels.",
	},
	{
		name: "Dr. Kiitan Bolajoko",
		role: "Chief Operating Officer",
		bio: "Ensures operational excellence across all HSCL projects and initiatives.",
	},
	{
		name: "Dr. Rotimi Oduloju",
		role: "Director of Public Health",
		bio: "Leads public health strategies and interventions.",
	},
	{
		name: "Ejiofor Nathaniel Uchenna",
		role: "Director of Finance & Admin",
		bio: "Oversees financial health and administrative operations.",
	},
	{
		name: "Precious Nwadire",
		role: "Associate Director, Technicals",
		bio: "Drives technical excellence and project implementation standards.",
	},
];

const coreValues = [
	{
		title: "Excellence",
		description:
			"We strive to give our clients the very best work, ensuring that we infuse the work that we do with a sincere passion for sustainable solutions to our clients' needs.",
	},
	{
		title: "Integrity",
		description:
			"We ensure that you get value for money even as we maintain the highest levels of ethics in our work.",
	},
	{
		title: "Inclusiveness",
		description:
			"At HSCL, clients from all over the world are welcome. We have a rich and diverse workforce. We work with all and we work for all.",
	},
	{
		title: "Efficiency",
		description:
			"You can expect that we will deliver when we should, using the best means possible.",
	},
	{
		title: "Learning",
		description:
			"HSCL is a hub of innovative minds where we are able to constantly raise the bar to meet the needs of an ever-changing world.",
	},
];

export function About() {
	const [activeSection, setActiveSection] = useState("mission");
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			// Offset for the sticky nav and main navbar
			const offset = 100;
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = element.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
			setActiveSection(id);
		}
	};

	// Handle hash navigation on mount
	useEffect(() => {
		if (window.location.hash) {
			const id = window.location.hash.substring(1);
			setTimeout(() => {
				const element = document.getElementById(id);
				if (element) {
					// We need to implement manual scroll here because standard auto-scroll might be off due to dynamic content or offset
					const offset = 100;
					const bodyRect = document.body.getBoundingClientRect().top;
					const elementRect = element.getBoundingClientRect().top;
					const elementPosition = elementRect - bodyRect;
					const offsetPosition = elementPosition - offset;

					window.scrollTo({
						top: offsetPosition,
						behavior: "smooth",
					});
					setActiveSection(id);
				}
			}, 500); // Delay to ensure page load/render
		}
	}, []);

	// Intersection Observer to update active section on scroll
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
		);

		const sections = ["mission", "values", "leadership"];
		sections.forEach((id) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div className="min-h-screen bg-background">
			<motion.div
				className="fixed top-0 left-0 right-0 h-1 bg-chemonics-lime z-50 origin-left"
				style={{ scaleX }}
			/>

			{/* Hero Section */}
			<section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-chemonics-navy text-white overflow-hidden">
				<div className="absolute inset-0 bg-black/20 z-10" />
				<div className="container relative z-20 text-center px-4">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						className="text-5xl md:text-6xl font-bold mb-6"
					>
						Who We Are
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
					>
						Providing innovative solutions for global health security.
					</motion.p>
				</div>
			</section>

			{/* Sticky Sub-navigation */}
			<div className="sticky top-[80px] z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b w-full">
				<div className="container flex items-center justify-center h-14 overflow-x-auto no-scrollbar">
					<nav className="flex items-center space-x-6 text-sm font-medium">
						{[
							{ id: "mission", label: "Our Mission" },
							{ id: "values", label: "Core Values" },
							{ id: "leadership", label: "Leadership" },
						].map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={cn(
									"transition-colors hover:text-chemonics-lime uppercase tracking-wide px-2 py-1 border-b-2 border-transparent",
									activeSection === item.id
										? "text-chemonics-navy border-chemonics-lime font-bold"
										: "text-muted-foreground"
								)}
							>
								{item.label}
							</button>
						))}
					</nav>
				</div>
			</div>

			<div className="container py-16 px-4 md:px-8 max-w-6xl mx-auto space-y-24">
				{/* Mission Section */}
				<section id="mission" className="scroll-mt-32">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<h2 className="text-3xl font-bold text-chemonics-navy mb-6">
								Our Mission
							</h2>
							<div className="w-20 h-1 bg-chemonics-lime mb-8" />
							<p className="text-lg text-muted-foreground leading-relaxed">
								At HSCL, our cross-cutting and varied experience in providing
								solutions provides us with a holistic and deep knowledge of the
								health and development sector in Africa.
							</p>
							<p className="text-lg text-muted-foreground leading-relaxed mt-4">
								Our mission is to enable organizations and communities globally
								to reach their full potential through innovative training,
								expert consultancy, and strategic solutions that enhance global
								health security.
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="bg-muted aspect-video rounded-xl overflow-hidden flex items-center justify-center"
						>
							{/* Placeholder for mission image */}
							<img
								src="/assets/three.jpg"
								alt="Mission"
								className="w-full h-full object-cover"
								onError={(e) => {
									e.currentTarget.src = "https://placehold.co/600x400";
								}}
							/>
						</motion.div>
					</div>
				</section>

				<Separator />

				{/* Core Values Section */}
				<section id="values" className="scroll-mt-32">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold text-chemonics-navy mb-4">
							Our Core Values
						</h2>
						<div className="w-20 h-1 bg-chemonics-lime mx-auto" />
					</motion.div>

					<div className="grid md:grid-cols-3 gap-6">
						{coreValues.map((value, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.1 }}
							>
								<Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-chemonics-lime">
									<CardHeader>
										<CardTitle className="text-xl text-chemonics-navy">
											{value.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-muted-foreground">{value.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</section>

				<Separator />

				{/* Leadership Section */}
				<section id="leadership" className="scroll-mt-32">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold text-chemonics-navy mb-4">
							Our Leadership
						</h2>
						<div className="w-20 h-1 bg-chemonics-lime mx-auto mb-6" />
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Guided by a Board of Directors and Management Team with extensive
							experience in international development and public health.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{leadershipTeam.map((leader, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.05 }}
							>
								<Card className="h-full overflow-hidden group">
									<div className="aspect-[4/3] bg-muted relative overflow-hidden">
										{/* Using a placeholder service since we don't have real photos. In a real app we'd map these to assets. */}
										<div className="absolute inset-0 flex items-center justify-center bg-chemonics-navy/10 text-chemonics-navy/30 font-bold text-4xl">
											{leader.name.charAt(0)}
										</div>
									</div>
									<CardHeader>
										<CardTitle className="text-lg text-chemonics-navy group-hover:text-chemonics-lime transition-colors">
											{leader.name}
										</CardTitle>
										<CardDescription className="font-medium text-primary">
											{leader.role}
										</CardDescription>
									</CardHeader>
									<CardContent>
										<p className="text-sm text-muted-foreground line-clamp-4">
											{leader.bio}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
