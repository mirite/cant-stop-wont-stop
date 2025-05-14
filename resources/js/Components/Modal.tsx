import type { PropsWithChildren } from "react";

import {
	Dialog,
	DialogPanel,
	Transition,
	TransitionChild,
} from "@headlessui/react";

/**
 * @param root0
 * @param root0.children
 * @param root0.show
 * @param root0.maxWidth
 * @param root0.closeable
 * @param root0.onClose
 */
export default function Modal({
	children,
	closeable = true,
	maxWidth = "2xl",
	onClose = () => {},
	show = false,
}: PropsWithChildren<{
	closeable?: boolean;
	maxWidth?: "2xl" | "lg" | "md" | "sm" | "xl";
	onClose: CallableFunction;
	show: boolean;
}>) {
	const close = () => {
		if (closeable) {
			onClose();
		}
	};

	const maxWidthClass = {
		"2xl": "sm:max-w-2xl",
		lg: "sm:max-w-lg",
		md: "sm:max-w-md",
		sm: "sm:max-w-sm",
		xl: "sm:max-w-xl",
	}[maxWidth];

	return (
		<Transition leave="duration-200" show={show}>
			<Dialog
				as="div"
				className="fixed inset-0 z-50 flex items-center overflow-y-auto px-4 py-6 transition-all sm:px-0"
				id="modal"
				onClose={close}
			>
				<TransitionChild
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75" />
				</TransitionChild>

				<TransitionChild
					enter="ease-out duration-300"
					enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					enterTo="opacity-100 translate-y-0 sm:scale-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 translate-y-0 sm:scale-100"
					leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				>
					<DialogPanel
						className={`mb-6 overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full dark:bg-gray-800${maxWidthClass}`}
					>
						{children}
					</DialogPanel>
				</TransitionChild>
			</Dialog>
		</Transition>
	);
}
