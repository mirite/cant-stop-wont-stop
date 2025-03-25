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
/** @param props */
export default function LightboxPhoto(props: LightboxPhotoProps): ReactElement {
	const {
		isEnd,
		isStart,
		onClose,
		onNext,
		onPrevious,
		src,
		title,
		description,
		date,
	} = props;
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
						<div>{formattedDate}</div>
						<p>
							{description ||
								`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.`}
						</p>
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
