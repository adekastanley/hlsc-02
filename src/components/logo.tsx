import { Command } from "lucide-react";

export const Logo = () => {
	return (
		<div className="flex items-center gap-2 font-bold select-none text-xl">
			<div className="flex bg-primary text-primary-foreground size-8 items-center justify-center rounded-md border">
				<Command className="size-4" />
			</div>
			<span className="text-foreground">LOGO.</span>
		</div>
	);
};
