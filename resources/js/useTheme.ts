import GreenPattern from "./green-pattern.svg";
import GreenLogo from "./green-logo.svg";
import GreenDate from "./green-date.svg";
import RedPattern from "./red-pattern.svg";
import RedLogo from "./red-logo.svg";
import RedDate from "./red-date.svg";

export const themes = {
	green: {
		pattern: GreenPattern,
		primary: "--color-eucalyptus",
		logo: GreenLogo,
		date: GreenDate,
		classes: "[background-size:100%]",
	},
	red: {
		pattern: RedPattern,
		primary: "--color-taracota",
		logo: RedLogo,
		date: RedDate,
		classes: "[background-repeat:repeat-x] [background-size:auto_100%]",
	},
};

export function useTheme() {
	const theme = Math.random() > 0.5 ? "green" : "red";
	return themes[theme];
}
