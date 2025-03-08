export const pages: NavLinkProps[] = [
	{ href: "/", text: "Info" },
	{ href: "/photos", text: "Photos" },
	{ href: "/", text: "RSVP" },
	{ href: "/about", text: "Our Story" },
];

export type NavLinkProps = {
	href: string;
	text: string;
};
