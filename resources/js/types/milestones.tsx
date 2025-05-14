import type { ReactNode } from "react";

import Backpack from "@/backpacking.svg";
import MiniPutt from "@/miniputt.svg";

export type Milestone = { content: ReactNode; subtitle: string; title: string };
export const milestones: Milestone[] = [
	{
		content: (
			<img alt="" className="size-[100px]" height={100} src={MiniPutt} />
		),
		subtitle: "1st Date",
		title: "Mini Putt",
	},
	{
		content: (
			<span className="fold-black text-8xl">
				{Math.floor(
					(new Date().getTime() - new Date("January 28, 2023").getTime()) /
						(1000 * 60 * 60 * 24),
				)}
			</span>
		),
		subtitle: "A Lifetime to go",
		title: "Days\nTogether",
	},
	{
		content: (
			<img alt="" className="size-[100px]" height={100} src={Backpack} />
		),
		subtitle: "1st Backpacking Trip",
		title: "Algonquin",
	},
];
