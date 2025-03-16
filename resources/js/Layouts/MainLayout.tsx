import type { PropsWithChildren, ReactElement, CSSProperties } from "react";

import { Header } from "@/Components/Header";
import type { PageProps } from "@/types";
import { useTheme } from "@/useTheme";
/**
 * @param root0
 * @param root0.children
 */
export default function Guest({
	children,
	...rest
}: PropsWithChildren<PageProps>): ReactElement {
	const { primary } = useTheme(rest);
	return (
		<div
			className="text-primary tracking-us flex min-h-dvh w-full flex-col *:w-full"
			style={
				{
					"--color-primary": `var(${primary})`,
				} as CSSProperties
			}
		>
			<Header {...rest} />
			<main className="container mx-auto grow">{children}</main>
			<footer className="container mx-auto p-4 text-center">
				Copyright © {new Date().getFullYear()}, Jesse Conner &amp; Bailey Few
			</footer>
		</div>
	);
}
