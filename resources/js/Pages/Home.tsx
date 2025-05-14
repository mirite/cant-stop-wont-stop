import type { ReactElement } from "react";

import { Head } from "@inertiajs/react";

import type { PageProps } from "@/types";

import Accommodations from "@/Components/Accommodations";
import Button from "@/Components/Button";
import Section from "@/Components/Section";
import { accommodations } from "@/types/accommodations";

import Layout from "../Layouts/MainLayout";

/**
 * The home page component.
 *
 * @param props
 * @returns The component.
 */
export default function Home(props: PageProps): ReactElement {
	return (
		<Layout {...props}>
			<Head title="Home" />
			<Accommodations accommodations={accommodations} />
			<Section heading="Directions">
				<iframe
					allowFullScreen={undefined}
					className="max-w-full"
					height="450"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2863.331045500889!2d-79.28972498767703!3d44.13841852079215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d5374ee840d091%3A0x6538c9a906dbaf3d!2sThe%20Barn%20Event%20Space!5e0!3m2!1sen!2sca!4v1742855421503!5m2!1sen!2sca"
					style={{ border: 0 }}
					width="600"
				/>
				<br />
				<Button
					href="https://maps.app.goo.gl/4S3o7ZptcNDB7iym6"
					target={"_blank"}
					useNative={true}
				>
					View on Google Maps
				</Button>
			</Section>
		</Layout>
	);
}
