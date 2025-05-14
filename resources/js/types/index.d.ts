import type { Config } from "ziggy-js";

export type PageProps<
	T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
	auth: {
		user: User;
	};
	theme: "green" | "red";
	ziggy: Config & { location: string };
};

export interface User {
	email: string;
	email_verified_at?: string;
	id: number;
	name: string;
}
