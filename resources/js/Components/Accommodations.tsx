import type { AccommodationProps } from "../types/accommodations";
import Accommodation from "./Accommodation";
import Section from "./Section";
import type { ReactElement } from "react";
type Props = { accommodations: AccommodationProps[] };

/**
 * Displays a list of accommodations.
 *
 * @param props The accommodations.
 * @returns The component.
 */
export default function Accommodations(props: Props): ReactElement {
	return (
		<Section heading="Accommodations" className="w-full max-w-full">
			<div className="grid w-full @md:grid-cols-3">
				{props.accommodations.map((a) => (
					<Accommodation key={a.address} accommodation={a} />
				))}
			</div>
		</Section>
	);
}
