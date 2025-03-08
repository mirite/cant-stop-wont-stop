import type { PropsWithChildren, ReactElement } from "react";

import { Header } from "@/Components/Header";

/**
 * @param root0
 * @param root0.children
 */
export default function Guest({ children }: PropsWithChildren): ReactElement {
	return (
		<div className="text-taracota flex min-h-dvh w-full flex-col *:w-full">
			<Header />
			<main className="@container container mx-auto grow">{children}</main>
			<footer className="container mx-auto p-4 text-center">
				Copyright © {new Date().getFullYear()}, Jesse Conner &amp; Bailey Few
			</footer>
		</div>
	);
}
