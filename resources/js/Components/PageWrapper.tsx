import type { HTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

/** @param props */
export default function PageWrapper(
	props: HTMLAttributes<HTMLDivElement>,
): ReactElement {
	const { className, children, ...rest } = props;
	return (
		<div
			className={twMerge(
				"text-primary flex min-h-dvh w-full flex-col *:w-full",
				className,
			)}
			{...rest}
		>
			{children}
		</div>
	);
}
