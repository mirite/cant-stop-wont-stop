import type { LabelHTMLAttributes } from "react";

/**
 * @param root0
 * @param root0.value
 * @param root0.className
 * @param root0.children
 */
export default function InputLabel({
	children,
	className = "",
	value,
	...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
	return (
		<label
			{...props}
			className={
				`block text-sm font-medium text-gray-700 dark:text-gray-300 ` +
				className
			}
		>
			{value ? value : children}
		</label>
	);
}
