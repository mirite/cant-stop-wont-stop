import { general, react, tailwind } from "@mirite/eslint-config-mirite";
import path from "node:path/posix";

export default [
	...general,
	...react,
	...tailwind,
	{
		settings: {
			tailwindcss: { config: path.resolve("resources", "css", "app.css") },
		},
	},
];
