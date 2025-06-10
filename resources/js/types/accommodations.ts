export type AccommodationProps = {
	address: string;
	city: string;
	distance: string;
	href: string;
	postalCode: string;
	province: string;
	title: string;
};

export const accommodations: AccommodationProps[] = [
	{
		address: "205 Eric T. Smith Way",
		city: "Aurora",
		distance: "22",
		href: "https://www.ihg.com/holidayinnexpress/hotels/us/en/aurora/ytora/hoteldetail",
		postalCode: "L4G 0Z6",
		province: "ON",
		title: "Holiday Inn Express & Suits Aurora",
	},
	{
		address: "100 Pony Drive",
		city: "Newmarket",
		distance: "17",
		href: "https://www.marriott.com/en-us/hotels/yyzfo-fairfield-inn-and-suites-newmarket/overview/",
		postalCode: "L3Y 7B6",
		province: "ON",
		title: "Fairfield Inn & Suites",
	},
	{
		address: "17565 Yonge Street",
		city: "Newmarket",
		distance: "25",
		href: "https://www.bestwestern.com/en_US/book/hotel-rooms.66065.html",
		postalCode: "L3Y 5H6",
		province: "ON",
		title: "Best Western Voyageur Place",
	},
];
