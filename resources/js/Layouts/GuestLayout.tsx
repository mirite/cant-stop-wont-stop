import type { PropsWithChildren, ReactElement, CSSProperties } from "react";

import { Header } from "@/Components/Header";
import { useTheme } from "@/useTheme";
/**
 * @param root0
 * @param root0.children
 */
export default function Guest({ children }: PropsWithChildren): ReactElement {
	const { primary } = useTheme();
	return (
		<div
			className="text-primary tracking-us flex min-h-dvh w-full flex-col *:w-full"
			style={
				{
					"--color-primary": `var(${primary})`,
				} as CSSProperties
			}
		>
			<Header />
			<main className="container mx-auto grow">{children}</main>
			<footer className="container mx-auto p-4 text-center">
				Copyright © {new Date().getFullYear()}, Jesse Conner &amp; Bailey Few
			</footer>
		</div>
	);
}
