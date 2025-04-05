export type AccommodationProps = {
	title: string;
	address: string;
	city: string;
	province: string;
	postalCode: string;
	distance: string;
	href: string;
};

export const accommodations: AccommodationProps[] = [
	{
		title: "Holiday Inn Express & Suits Aurora",
		address: "205 Eric T. Smith Way",
		city: "Aurora",
		province: "ON",
		postalCode: "L4G 0Z6",
		distance: "22",
		href: "https://www.ihg.com/holidayinnexpress/hotels/us/en/aurora/ytora/hoteldetail",
	},
	{
		title: "Fairfield Inn & Suites",
		address: "100 Pony Drive",
		city: "Newmarket",
		province: "ON",
		postalCode: "L3Y 7B6",
		distance: "17",
		href: "https://www.marriott.com/en-us/hotels/yyzfo-fairfield-inn-and-suites-newmarket/overview/",
	},
	{
		title: "Best Western Voyageur Place",
		address: "17565 Yonge Street",
		city: "Newmarkey",
		province: "ON",
		postalCode: "L3Y 5H6",
		distance: "25",
		href: "https://www.bestwestern.com/en_US/book/hotel-rooms.66065.html",
	},
];
