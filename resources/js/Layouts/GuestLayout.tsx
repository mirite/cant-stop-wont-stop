import type { PropsWithChildren, ReactElement } from "react";

import Footer from "@/Components/Footer";
import Main from "@/Components/Main";
import PageWrapper from "@/Components/PageWrapper";

/**
 * The layout for unauthenticated backend pages.
 *
 * @param root0 The copmonent props.
 * @param root0.children The page using the layout.
 * @returns The layout.
 */
export default function Guest({ children }: PropsWithChildren): ReactElement {
	return (
		<PageWrapper>
			<Main>{children}</Main>
			<Footer />
		</PageWrapper>
	);
}
