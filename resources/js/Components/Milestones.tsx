import type { ReactElement } from "react";

import type { Milestone as MilestoneType } from "@/types/milestones";

import Milestone from "./Milestone";

type Props = {
	milestones: MilestoneType[];
};

/**
 *
 * @param props
 */
export default function Milestones(props: Props): ReactElement {
	return (
		<div className="mx-auto grid max-w-5xl items-center lg:[grid-auto-flow:column] lg:grid-cols-3 lg:grid-rows-[repeat(4,min-content)]">
			{props.milestones.map((milestone) => (
				<Milestone key={milestone.title} milestone={milestone} />
			))}
		</div>
	);
}
