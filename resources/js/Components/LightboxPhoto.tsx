import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import type { ButtonHTMLAttributes, ReactElement } from "react";

import {
	faChevronLeft,
	faChevronRight,
	faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

import type { PhotoProps } from "@/types/photos";

type LightboxPhotoProps = Pick<
	PhotoProps,
	"date" | "description" | "src" | "title"
> & {
	isEnd: boolean;
	isStart: boolean;
	onClose: () => void;
	onNext: () => void;
	onPrevious: () => void;
};
const dateFormatter = new Intl.DateTimeFormat("en-ca", {
	day: "numeric",
	month: "long",
	year: "numeric",
});
type SliderButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	"children"
> & { icon: FontAwesomeIconProps["icon"]; title: string };
/**
 * A full sized lightbox view of a gallery image.
 *
 * @param props The image data and control callbacks.
 * @returns The component.
 */
export default function LightboxPhoto(props: LightboxPhotoProps): ReactElement {
	const { date, isEnd, isStart, onClose, onNext, onPrevious, src, title } =
		props;
	const formattedDate = dateFormatter.format(new Date(date * 1000));
	return (
		<div className="fixed inset-0 bg-white/10 drop-shadow-xl backdrop-blur-lg">
			<SliderButton
				className="top-(--ui-padding) right-(--ui-padding)"
				icon={faX}
				onClick={onClose}
				title="Close"
			/>
			<SliderButton
				className="top-(--vertical-centre) left-(--ui-padding)"
				disabled={isStart}
				icon={faChevronLeft}
				onClick={onPrevious}
				title="Previous"
			/>
			<button
				className="relative m-auto size-full"
				onClick={onClose}
				type="button"
			>
				<div
					className="group relative mx-auto flex size-4/5 max-h-fit max-w-fit flex-col items-center justify-center"
					onClick={(e) => e.stopPropagation()}
				>
					<img
						alt=""
						className="max-h-full max-w-full object-contain object-center"
						src={`/images/${src}`}
						title={title}
					/>
					<div className="inset-x-0 bottom-0 w-full bg-eucalyptus p-4 text-neutral transition-all lg:absolute lg:bg-eucalyptus/90 lg:opacity-0 lg:group-hover:opacity-100">
						<h2 className="mb-2 text-2xl font-medium">{title}</h2>
						<div className="mb-2">{formattedDate}</div>
					</div>
				</div>
			</button>
			<SliderButton
				className="top-(--vertical-centre) right-(--ui-padding)"
				disabled={isEnd}
				icon={faChevronRight}
				onClick={onNext}
				title="Next"
			/>
		</div>
	);
}
/**
 * A button within the slider UI.
 *
 * @param props The icon and button props.
 * @returns The component.
 */
function SliderButton(props: SliderButtonProps): ReactElement {
	const { className: extendedClassName, icon, ...rest } = props;
	const className = twMerge(
		"border-primary-100/40 fixed z-10 rounded-full border p-2 leading-0 transition-all [--button-size:1rem] [--ui-padding:1rem] [--vertical-centre:calc(50%-(var(--button-size)/2))] not-disabled:cursor-pointer hover:not-disabled:border-primary hover:not-disabled:bg-primary hover:not-disabled:text-neutral disabled:opacity-25 md:[--button-size:2rem] md:[--ui-padding:2rem]",
		extendedClassName,
	);
	return (
		<button className={className} type="button" {...rest}>
			<FontAwesomeIcon className="size-(--button-size)!" icon={icon} />
		</button>
	);
}
