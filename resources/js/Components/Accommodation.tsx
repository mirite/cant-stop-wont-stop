import type { ReactElement } from "react";

import type { AccommodationProps } from "@/types/accommodations";

import Button from "@/Components/Button";
import Heading3 from "@/Components/headings/Heading3";

type Props = { accommodation: AccommodationProps };

/**
 * An accommodation listing.
 *
 * @param props
 * @returns The component,
 */
export default function Accommodation(props: Props): ReactElement {
	const { accommodation } = props;
	const { address, city, distance, href, postalCode, province, title } =
		accommodation;
	return (
		<div className="flex w-full flex-col items-center gap-4 py-8 @2xl:px-4 @2xl:py-0">
			<Heading3 className="max-w-[27ch]">{title}</Heading3>
			<address className="text-center not-italic">
				<span className="text-secondary uppercase">{address}</span>
				<br />
				<span className="text-secondary uppercase">
					{city}, {province}
				</span>
				<br />
				<span className="text-secondary uppercase">{postalCode}</span>
			</address>
			<div className="text-2xl font-bold text-secondary uppercase">
				{distance} Min Drive
			</div>
			<Button href={href} target="_blank" useNative={true}>
				Book Now
			</Button>
		</div>
	);
}
