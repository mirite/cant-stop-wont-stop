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

type LightboxPhotoProps = Pick<PhotoProps, "title" | "src"> & {
	onPrevious: () => void;
	onNext: () => void;
	onClose: () => void;
	isStart: boolean;
	isEnd: boolean;
};

/** @param props */
export default function LightboxPhoto(props: LightboxPhotoProps): ReactElement {
	const { isEnd, isStart, onClose, onNext, onPrevious, src, title } = props;

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
				<div className="mx-auto flex size-4/5 items-center justify-center">
					<img
						onClick={(e) => e.stopPropagation()}
						src={`/images/${src}`}
						className="max-h-full max-w-full object-contain object-center"
						alt=""
						title={title}
					/>
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
/** @param props */
function SliderButton(props: SliderButtonProps): ReactElement {
	const { className: extendedClassName, icon, ...rest } = props;
	const className = twMerge(
		"border-primary-100/40 hover:not-disabled:bg-primary hover:not-disabled:text-neutral hover:not-disabled:border-primary fixed z-10 rounded-full border p-2 leading-0 transition-all [--button-size:2rem;] [--ui-padding:2rem;] [--vertical-centre:calc(50%-(var(--button-size)/2))] not-disabled:cursor-pointer disabled:opacity-25",
		extendedClassName,
	);
	return (
		<button className={className} type="button" {...rest}>
			<FontAwesomeIcon icon={icon} className="size-(--button-size)!" />
		</button>
	);
}
