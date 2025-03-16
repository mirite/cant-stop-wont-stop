import type { PropsWithChildren, ReactElement, CSSProperties } from "react";

import Footer from "@/Components/Footer";
import { Header } from "@/Components/Header";
import Main from "@/Components/Main";
import PageWrapper from "@/Components/PageWrapper";
import type { PageProps } from "@/types";
import { useTheme } from "@/useTheme";
/**
 * The layout used by the main front-facing pages.
 *
 * @param root0 The component props.
 * @param root0.children The page using the layout.
 * @returns The layout.
 */
export default function Guest({
	children,
	...rest
}: PropsWithChildren<PageProps>): ReactElement {
	const { primary } = useTheme(rest);
	return (
		<PageWrapper
			className="tracking-us"
			style={
				{
					"--color-primary": `var(${primary})`,
				} as CSSProperties
			}
		>
			<Header {...rest} />
			<Main>{children}</Main>
			<Footer />
		</PageWrapper>
	);
}
