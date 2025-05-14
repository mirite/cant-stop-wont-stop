import type { ButtonHTMLAttributes } from "react";

/**
 * @param root0
 * @param root0.type
 * @param root0.className
 * @param root0.disabled
 * @param root0.children
 */
export default function SecondaryButton({
	children,
	className = "",
	disabled,
	type = "button",
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			{...props}
			className={
				`inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold tracking-widest text-gray-700 uppercase shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden disabled:opacity-25 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800 ${
					disabled && "opacity-25"
				} ` + className
			}
			disabled={disabled}
			type={type}
		>
			{children}
		</button>
	);
}
