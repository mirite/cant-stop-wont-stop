import { Head } from "@inertiajs/react";
import type { ReactElement } from "react";

import Heading1 from "@/Components/headings/Heading1";
import Paragraph from "@/Components/Paragraph";
import type { PageProps } from "@/types";

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
			text: "From our first hangout in Black Panther's lair, Where the rain purred down, and we didn't care, To a Newmarket stroll, a 10-kilometer feat, Our connection felt claw-some, steady, and sweet.",
		},
		{
			text: "A Starbucks hug in Bradford, you asked with a meow, Four hours of talking—I should've fur-seen it somehow. Meeting Fritz, your piano lesson debut, The look in our eyes? Pure love, it’s true.",
		},
		{
			text: "	January whiskered by, like a cat on a dash, From “like-liking” confessions to a romantic splash. Our first kiss, a moment we both couldn't miss, A bond sealed with purrfection, nothing amiss.",
		},
		{
			text: "An escarpment hike, the fur-midable first date, Mini golf in Oakville—non-competitive trait. Then came cherry pies on Valentine's Day, Your heart-shaped pastries took my breath away.",
		},
		{
			text: "Meeting families and friends, each feline and mate, Brunches and tacos made every bond great. On Disney on Ice, our laughter took flight, A purrty magical day, a memory so bright.",
		},
		{
			text: "Pane Fresco’s pizza, the fanciest by far, And Omomomo visits, now part of our star. We camped and saw science; it sparked feline pride, Your campfire mastery warmed me inside.",
		},
		{
			text: "Keys to our home, and a tree all your own, Living together, our love fully grown. From Wonderland rides to Niagara’s sunny shores, Each whisker of time just means I love you more.",
		},
		{
			text: "As the seasons pass, like a cat’s swift stride, You’re my fur-ever partner, my heart, my guide. With each date a meow-ment, each milestone divine, You’re my purrfect companion, my Valentine.",
		},
	];
	return (
		<Layout {...props}>
			<Head title="Our Story" />
			<Heading1>Our Story</Heading1>
			<div className="mx-auto w-fit">
				{paragraphs.map((p) => (
					<Paragraph key={p.text}>{p.text}</Paragraph>
				))}
			</div>
		</Layout>
	);
}
