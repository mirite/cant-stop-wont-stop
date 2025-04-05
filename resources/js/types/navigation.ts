export const pages: NavLinkProps[] = [
	{ href: "/", text: "Info" },
	{ href: "/photos", text: "Photos" },
	{
		href: "https://www.aisleplanner.com/app/v2/our-wedding/afewmorekisses/rsvp",
		text: "RSVP",
	},
	{ href: "/about", text: "Our Story" },
];

export type NavLinkProps = {
	href: string;
	text: string;
};
