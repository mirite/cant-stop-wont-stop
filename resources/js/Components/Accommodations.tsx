import type { ReactElement } from "react";

import type { AccommodationProps } from "../types/accommodations";

import Accommodation from "./Accommodation";
import Section from "./Section";

type Props = { accommodations: AccommodationProps[] };
import flower1 from "../mum.svg";
import { twMerge } from "tailwind-merge";
/**
 * Displays a list of accommodations.
 *
 * @param props The accommodations.
 * @returns The component.
 */
export default function Accommodations(props: Props): ReactElement {
	return (
		<Section heading="Accommodations" className="w-full max-w-full">
			<div className="grid w-full grid-rows-[1fr_90px_1fr_90px_1fr] @2xl:grid-cols-[1fr_max-content_1fr_max-content_1fr] @2xl:grid-rows-1">
				{props.accommodations.map((a, i) => (
					<>
						{i > 0 && (
							<div className={twMerge("")}>
								<img
									width={90}
									height={280}
									className={twMerge(
										"m-auto h-[280px] w-[90px] origin-center -translate-y-1/3 rotate-90 @2xl:translate-y-0 @2xl:rotate-0",
										i === 1 && "-scale-x-100",
									)}
									src={flower1}
								/>
							</div>
						)}
						<Accommodation key={a.address} accommodation={a} />
					</>
				))}
			</div>
		</Section>
	);
}
