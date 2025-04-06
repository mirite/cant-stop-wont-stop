import type { ReactElement } from "react";

import type { Milestone as MilestoneType } from "@/types/milestones";

import Milestone from "./Milestone";

type Props = {
	milestones: MilestoneType[];
};

/**
 * A list of our milestones
 *
 * @param props The milestones info.
 * @returns The component.
 */
export default function Milestones(props: Props): ReactElement {
	return (
		<div className="mx-auto grid max-w-6xl items-center lg:[grid-auto-flow:column] lg:grid-cols-[1fr_1px_1fr_1px_1fr] lg:grid-rows-[repeat(4,min-content)]">
			{props.milestones.map((milestone) => (
				<Milestone key={milestone.title} milestone={milestone} />
			))}
		</div>
	);
}
