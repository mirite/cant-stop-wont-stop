import type { ImgHTMLAttributes } from "react";

export type PhotoProps = ImgHTMLAttributes<HTMLImageElement> &
	Required<Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "title">> & {
		description?: string;
		date: Date;
	};

export const photos: PhotoProps[] = [
	{
		src: "20230309_183922.jpg",
		title: "On the Spencer Smith Park Piere",
		date: new Date("March 9, 2023"),
	},
	{
		src: "20230318_145222.jpg",
		title: "At Disney on Ice",
		date: new Date("March 18, 2023"),
	},
	{
		src: "20230610_174126.jpg",
		title: "At Laurier, Just Cuz",
		className: "object-bottom",
		date: new Date("June 10, 2023"),
	},
	{
		src: "20230714_182203.jpg",
		title: "Niagra Falls",
		date: new Date("July 14, 2023"),
	},
	{
		src: "20230819_134223.jpg",
		title: "Hiking the Bruce Trail",
		date: new Date("August 19, 2023"),
	},
	{
		src: "20231014_155718.jpg",
		title: "Fall Camping in Algonquin",
		date: new Date("October 14, 2023"),
	},
	{
		src: "20231014_164856.jpg",
		title: "Hiking Booth's Rock",
		date: new Date("October 14, 2023"),
	},
	{
		src: "20241026_202809.jpg",
		title: "The Dairy Queen and Burger King",
		date: new Date("October 26, 2024"),
	},
	{
		src: "20231210_201455.jpg",
		title: "Winterfest at Wonderland",
		className: "object-bottom",
		date: new Date("December 10, 2023"),
	},
	{
		src: "481336465_9873917365960392_4461144057522829076_n.jpg",
		title: "Race Day at the Chili",
		date: new Date("March 2, 2025"),
	},
	{
		src: "462572575_9080327988652671_268767077185305630_n.jpg",
		title: "Engagement Ring",
		date: new Date("October 21, 2024"),
	},
	{
		src: "462578838_9080327998652670_4150079677673872191_n.jpg",
		title: "Engagement Ring With People",
		date: new Date("October 21, 2024"),
	},
	{
		src: "463216189_9080327985319338_1606559593105980768_n.jpg",
		title: "Fritz Looking Glamorous",
		className: "object-bottom",
		date: new Date("October 21, 2024"),
	},
	{
		src: "463868643_9080327995319337_7660532591378465189_n.jpg",
		title: "Love is in the Keyboard",
		date: new Date("October 21, 2024"),
	},
	{
		src: "463869396_9080328001986003_5384596525598605006_n.jpg",
		title: "I Said Yes",
		date: new Date("October 21, 2024"),
	},
	{
		src: "464079638_9080327991986004_2521103127080810601_n.jpg",
		title: "Smiling in the Sun",
		date: new Date("October 21, 2024"),
	},
];
