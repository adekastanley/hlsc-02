import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function About() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className="text-4xl font-bold tracking-tight mb-4">About Page</h1>
				<p className="text-muted-foreground mb-8">
					Lorem ipsum dolor sit amet consectetur.
				</p>

				<Link
					to="/"
					className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
				>
					Back Home
				</Link>
			</motion.div>
		</div>
	);
}
