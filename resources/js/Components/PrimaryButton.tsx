import type { ButtonHTMLAttributes } from "react";

/**
 * @param root0
 * @param root0.className
 * @param root0.disabled
 * @param root0.children
 */
export default function PrimaryButton({
	children,
	className = "",
	disabled,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			{...props}
			className={
				`inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden active:bg-gray-900 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300 ${
					disabled && "opacity-25"
				} ` + className
			}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
