import type { PropsWithChildren, ReactElement, CSSProperties } from "react";

import { Header } from "@/Components/Header";

import GreenPattern from "../green-pattern.svg";
import RedPattern from "../red-pattern.svg";

/**
 * @param root0
 * @param root0.children
 */
export default function Guest({ children }: PropsWithChildren): ReactElement {
	const themes = {
		green: { pattern: GreenPattern, primary: "--color-eucalyptus" },
		red: { pattern: RedPattern, primary: "--color-taracota" },
	};
	const theme = Math.random() > 0.5 ? "green" : "red";
	const { pattern, primary } = themes[theme];
	return (
		<div
			className="text-primary tracking-us flex min-h-dvh w-full flex-col *:w-full"
			style={
				{
					"--color-primary": `var(${primary})`,
					"--logo-width": "400px",
					"--logo-height": "800px",
					"--pattern": `url(${pattern})`,
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
