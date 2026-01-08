import React from "react";
import { Button } from "@/components/ui/button";

import { ChevronRight } from "lucide-react";

export default function HeroSection() {
	return (
		<>
			<main className="overflow-x-hidden h-screen">
				<section>
					<div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
						<div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
							<div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
								<h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
									HSLC
								</h1>
								<p className="mt-8 max-w-2xl text-balance text-lg">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Necessitatibus a assumenda quod, laboriosam ad numquam?
								</p>

								<div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
									<Button
										asChild
										size="lg"
										className="h-12 rounded-full pl-5 pr-3 text-base"
									>
										<a href="#link">
											<span className="text-nowrap">Button One</span>
											<ChevronRight className="ml-1" />
										</a>
									</Button>
									<Button
										key={2}
										asChild
										size="lg"
										variant="ghost"
										className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5"
									>
										<a href="#link">
											<span className="text-nowrap">Bitton Two</span>
										</a>
									</Button>
								</div>
							</div>
						</div>
						<div className=" h-screen overflow-hidden  absolute inset-1 -z-10   border-black/10   dark:border-white/5">
							{/* <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden  border border-black/10 lg:aspect-video  dark:border-white/5"> */}
							<video
								autoPlay
								loop
								className="size-full !object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
								src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
							></video>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
