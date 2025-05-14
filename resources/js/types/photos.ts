import type { ImgHTMLAttributes } from "react";

export type PhotoProps = ImgHTMLAttributes<HTMLImageElement> &
	Required<Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "title">> & {
		date: number;
		description?: string;
	};
