import type { ButtonHTMLAttributes } from "react";

/**
 * @param root0
 * @param root0.className
 * @param root0.disabled
 * @param root0.children
 */
export default function DangerButton({
	children,
	className = "",
	disabled,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			{...props}
			className={
				`inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out hover:bg-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-hidden active:bg-red-700 dark:focus:ring-offset-gray-800 ${
					disabled && "opacity-25"
				} ` + className
			}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
