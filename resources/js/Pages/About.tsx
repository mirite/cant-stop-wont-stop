import type { ReactElement } from "react";

import { Head } from "@inertiajs/react";

import type { PageProps } from "@/types";

import Heading1 from "@/Components/headings/Heading1";
import Milestones from "@/Components/Milestones";
import Paragraph from "@/Components/Paragraph";
import { milestones } from "@/types/milestones";

import Layout from "../Layouts/MainLayout";

/**
 * The our story page component.
 *
 * @param props The page props.
 * @returns The component.
 */
export default function About(props: PageProps): ReactElement {
	const paragraphs = [
		{
			text: "As with all great love stories, ours began on LinkedIn. What started as casual exchanges over work projects soon blossomed into something deeper. Work lunches turned into shared afternoon walks, where laughter and conversation flowed effortlessly, laying the groundwork for a connection we couldn’t yet name. ",
		},
		{
			text: "One evening, the release of Black Panther gave us the perfect excuse to spend time together outside of work. That outing quickly evolved into early-winter hikes, where frost-covered trails stretched before us, the crisp air nipping at our cheeks while the serene landscape enveloped us in its quiet magic. With each step, the bond between us grew stronger, as though the rhythm of our footsteps mirrored the unspoken harmony of our hearts. ",
		},
		{
			text: "After months of growing closer, everything started to come to a head one chilly January day. The plan was simple: we were supposed to spend the day learning piano and coding—each of us stepping into the other’s world. But the day took an unexpected turn when Fritz, needing an emergency trip to the vet, became our priority. After ensuring Fritz was safe and sound, we found ourselves back to our original plan, albeit in a slightly altered mood. It was during that quiet, unhurried moment, as our eyes met across the room, that the world seemed to pause. In that instant, it felt like everything around us faded away, leaving only the two of us in a shared understanding that this was no longer just a friendship. ",
		},
		{
			text: "A week or two later, the inevitable could no longer be ignored. We finally admitted aloud what had been growing between us. Our first real date was a storybook day: we embarked on a snowy hike, the fresh powder crunching underfoot, followed by a lively round of mini-golf that filled the air with laughter. The evening ended with dinner at Dave & Buster’s, where the excitement of the day lingered in every glance and smile. From that moment onward, our story truly began. ",
		},
	];
	return (
		<Layout {...props}>
			<Head title="Our Story" />
			<Milestones milestones={milestones} />
			<Heading1 className="mt-12">Our Story</Heading1>
			<div className="mx-auto w-fit text-center">
				{paragraphs.map((p) => (
					<Paragraph key={p.text}>{p.text}</Paragraph>
				))}
			</div>
		</Layout>
	);
}
