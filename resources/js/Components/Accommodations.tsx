import type { ReactElement } from "react";

import { twMerge } from "tailwind-merge";

import type { AccommodationProps } from "../types/accommodations";

import flower1 from "../mum.svg";
import Accommodation from "./Accommodation";
import Section from "./Section";

type Props = { accommodations: AccommodationProps[] };
/**
 * Displays a list of accommodations.
 *
 * @param props The accommodations.
 * @returns The component.
 */
export default function Accommodations(props: Props): ReactElement {
	return (
		<Section className="w-full max-w-full" heading="Accomm&shy;odations">
			<div className="grid w-full grid-rows-[1fr_90px_1fr_90px_1fr] @2xl:grid-cols-[1fr_max-content_1fr_max-content_1fr] @2xl:grid-rows-1">
				{props.accommodations.map((a, i) => (
					<>
						{i > 0 && (
							<div className={twMerge("")}>
								<img
									className={twMerge(
										"m-auto h-[280px] w-[90px] origin-center -translate-y-1/3 rotate-90 @2xl:translate-y-0 @2xl:rotate-0",
										i === 1 && "-scale-x-100",
									)}
									height={280}
									src={flower1}
									width={90}
								/>
							</div>
						)}
						<Accommodation accommodation={a} key={a.address} />
					</>
				))}
			</div>
		</Section>
	);
}
