import type { PropsWithChildren, ReactElement } from "react";

import { usePage } from "@inertiajs/react";

import Footer from "@/Components/Footer";
import Main from "@/Components/Main";
import PageWrapper from "@/Components/PageWrapper";

/**
 * The layout used by authenticated back-end pages.
 *
 * @param root0 The layout props.
 * @param root0.children The page using the layout.
 * @returns The layout.
 */
export default function Authenticated({
	children,
}: PropsWithChildren): ReactElement {
	const user = usePage().props.auth.user;

	return (
		<PageWrapper>
			<Main>
				{user?.name}
				{children}
			</Main>
			<Footer />
		</PageWrapper>
	);
}
