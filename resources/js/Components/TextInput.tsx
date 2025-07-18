import type { InputHTMLAttributes } from "react";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function TextInput(
	{
		className = "",
		isFocused = false,
		type = "text",
		...props
	}: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
	ref,
) {
	const localRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(ref, () => ({
		focus: () => localRef.current?.focus(),
	}));

	useEffect(() => {
		if (isFocused) {
			localRef.current?.focus();
		}
	}, [isFocused]);

	return (
		<input
			{...props}
			className={
				"rounded-md border-gray-300 shadow-xs focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 " +
				className
			}
			ref={localRef}
			type={type}
		/>
	);
});
