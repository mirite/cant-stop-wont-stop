import {
	faChevronLeft,
	faChevronRight,
	faX,
} from "@fortawesome/free-solid-svg-icons";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ButtonHTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

import type { PhotoProps } from "@/types/photos";

type LightboxPhotoProps = Pick<
	PhotoProps,
	"title" | "src" | "description" | "date"
> & {
	onPrevious: () => void;
	onNext: () => void;
	onClose: () => void;
	isStart: boolean;
	isEnd: boolean;
};
const dateFormatter = new Intl.DateTimeFormat("en-ca", {
	year: "numeric",
	month: "long",
	day: "numeric",
});
/**
 * A full sized lightbox view of a gallery image.
 *
 * @param props The image data and control callbacks.
 * @returns The component.
 */
export default function LightboxPhoto(props: LightboxPhotoProps): ReactElement {
	const { isEnd, isStart, onClose, onNext, onPrevious, src, title, date } =
		props;
	const formattedDate = dateFormatter.format(new Date(date * 1000));
	return (
		<div className="fixed inset-0 bg-white/10 drop-shadow-xl backdrop-blur-lg">
			<SliderButton
				onClick={onClose}
				title="Close"
				className="top-(--ui-padding) right-(--ui-padding)"
				icon={faX}
			/>
			<SliderButton
				icon={faChevronLeft}
				title="Previous"
				onClick={onPrevious}
				disabled={isStart}
				className="top-(--vertical-centre) left-(--ui-padding)"
			/>
			<button
				type="button"
				onClick={onClose}
				className="relative m-auto size-full"
			>
				<div
					className="group relative mx-auto flex size-4/5 max-h-fit max-w-fit items-center justify-center"
					onClick={(e) => e.stopPropagation()}
				>
					<img
						src={`/images/${src}`}
						className="max-h-full max-w-full object-contain object-center"
						alt=""
						title={title}
					/>
					<div className="absolute inset-x-0 bottom-0 bg-black/90 p-4 transition-all lg:opacity-0 lg:group-hover:opacity-100">
						<h2 className="mb-2 text-2xl font-medium">{title}</h2>
						<div className="mb-2">{formattedDate}</div>
					</div>
				</div>
			</button>
			<SliderButton
				icon={faChevronRight}
				title="Next"
				onClick={onNext}
				disabled={isEnd}
				className="top-(--vertical-centre) right-(--ui-padding)"
			/>
		</div>
	);
}
type SliderButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	"children"
> & { icon: FontAwesomeIconProps["icon"]; title: string };
/**
 * A button within the slider UI.
 *
 * @param props The icon and button props.
 * @returns The component.
 */
function SliderButton(props: SliderButtonProps): ReactElement {
	const { className: extendedClassName, icon, ...rest } = props;
	const className = twMerge(
		"border-primary-100/40 hover:not-disabled:bg-primary hover:not-disabled:text-neutral hover:not-disabled:border-primary fixed z-10 rounded-full border p-2 leading-0 transition-all [--button-size:1rem] [--ui-padding:1rem] [--vertical-centre:calc(50%-(var(--button-size)/2))] not-disabled:cursor-pointer disabled:opacity-25 md:[--button-size:2rem] md:[--ui-padding:2rem]",
		extendedClassName,
	);
	return (
		<button className={className} type="button" {...rest}>
			<FontAwesomeIcon icon={icon} className="size-(--button-size)!" />
		</button>
	);
}
