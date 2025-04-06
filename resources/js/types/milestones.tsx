import type { ReactNode } from "react";

import Backpack from "@/backpacking.svg";
import MiniPutt from "@/miniputt.svg";

export type Milestone = { title: string; subtitle: string; content: ReactNode };
export const milestones: Milestone[] = [
	{
		title: "Mini Putt",
		subtitle: "1st Date",
		content: (
			<img src={MiniPutt} alt="" height={100} className="size-[100px]" />
		),
	},
	{
		title: "Days\nTogether",
		subtitle: "A Lifetime to go",
		content: (
			<span className="fold-black text-8xl">
				{Math.floor(
					(new Date().getTime() - new Date("January 28, 2023").getTime()) /
						(1000 * 60 * 60 * 24),
				)}
			</span>
		),
	},
	{
		title: "Algonquin",
		subtitle: "1st Backpacking Trip",
		content: (
			<img src={Backpack} alt="" height={100} className="size-[100px]" />
		),
	},
];
