import type { HTMLAttributes } from "react";

/**
 * @param root0
 * @param root0.message
 * @param root0.className
 */
export default function InputError({
	className = "",
	message,
	...props
}: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
	return message ? (
		<p
			{...props}
			className={"text-sm text-red-600 dark:text-red-400 " + className}
		>
			{message}
		</p>
	) : null;
}
