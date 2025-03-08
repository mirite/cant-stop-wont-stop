import type { ReactElement } from "react";

import Button from "@/Components/Button";
import Heading3 from "@/Components/headings/Heading3";
import type { AccommodationProps } from "@/types/accommodations";

type Props = { accommodation: AccommodationProps };

/**
 * An accommodation listing.
 *
 * @param props
 * @returns The component,
 */
export default function Accommodation(props: Props): ReactElement {
	const { accommodation } = props;
	const { title, address, city, province, distance, postalCode, href } =
		accommodation;
	return (
		<div className="border-b-primary @lg:border-r-primary flex w-full flex-col items-center border-b-1 py-8 last:border-b-0 @lg:border-r-1 @lg:border-b-0 @lg:px-8 @lg:py-0 @lg:last:border-r-0">
			<Heading3 className="max-w-[27ch]">{title}</Heading3>
			<span className="text-secondary uppercase">{address}</span>
			<span className="text-secondary uppercase">
				{city}, {province}
			</span>
			<span className="text-secondary uppercase">{postalCode}</span>
			<br />
			<span className="text-secondary text-2xl font-bold uppercase">
				{distance} Min Drive
			</span>
			<br />
			<Button href={href} target="_blank">
				Book Now
			</Button>
		</div>
	);
}
