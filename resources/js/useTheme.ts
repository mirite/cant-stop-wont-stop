import GreenDate from "./green-date.svg";
import GreenLogo from "./green-logo.svg";
import GreenPattern from "./green-pattern.svg";
import RedDate from "./red-date.svg";
import RedLogo from "./red-logo.svg";
import RedPattern from "./red-pattern.svg";

export const themes = {
	green: {
		classes: "[background-size:100%_100%]",
		date: GreenDate,
		logo: GreenLogo,
		pattern: GreenPattern,
		primary: "--color-eucalyptus",
	},
	red: {
		classes: "[background-repeat:repeat-x] [background-size:auto_100%]",
		date: RedDate,
		logo: RedLogo,
		pattern: RedPattern,
		primary: "--color-taracota",
	},
};

/**
 * @param props
 * @param props.theme
 */
export function useTheme(props: { theme: "green" | "red" }) {
	return themes[props.theme];
}
