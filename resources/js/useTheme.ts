import GreenDate from "./green-date.svg";
import GreenLogo from "./green-logo.svg";
import GreenPattern from "./green-pattern.svg";
import RedDate from "./red-date.svg";
import RedLogo from "./red-logo.svg";
import RedPattern from "./red-pattern.svg";

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

/**
 * @param props
 * @param props.theme
 */
export function useTheme(props: { theme: "green" | "red" }) {
	return themes[props.theme];
}
