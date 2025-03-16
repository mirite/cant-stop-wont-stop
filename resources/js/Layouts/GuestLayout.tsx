import type { PropsWithChildren, ReactElement } from "react";

/**
 * @param root0
 * @param root0.children
 */
export default function Guest({ children }: PropsWithChildren): ReactElement {
	return (
		<div className="text-primary flex min-h-dvh w-full flex-col *:w-full">
			<main className="container mx-auto grow">{children}</main>
			<footer className="container mx-auto p-4 text-center">
				Copyright © {new Date().getFullYear()}, Jesse Conner &amp; Bailey Few
			</footer>
		</div>
	);
}
