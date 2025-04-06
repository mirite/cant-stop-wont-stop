import type { ReactElement } from "react";

import type { Milestone as MilestoneType } from "@/types/milestones";

import Heading2 from "./headings/Heading2";

type Props = {
	milestone: MilestoneType;
};

/**
 * One of our milestones.
 *
 * @param props The milestone data.
 * @returns The component.
 */
export default function Milestone(props: Props): ReactElement {
	return (
		<>
			<div className="flex items-center justify-center text-center">
				{props.milestone.content}
			</div>
			<Heading2 className="whitespace-pre-line">
				{props.milestone.title}
			</Heading2>
			<hr className="border-b-primary mx-auto my-3 w-1/5 border-b" />
			<div className="tracking-us mb-4 p-2 text-center font-medium uppercase">
				{props.milestone.subtitle}
			</div>
			<div className="bg-taracota mx-auto my-4 h-px w-2/3 last:hidden lg:row-span-4 lg:size-full" />
		</>
	);
}
