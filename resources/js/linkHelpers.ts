import { Link } from "@inertiajs/react";
import type { AnchorHTMLAttributes, ComponentProps } from "react";

export type ButtonProps = Omit<
	ComponentProps<typeof Link>,
	"as" | "method" | "ref"
> &
	AnchorHTMLAttributes<HTMLAnchorElement> & { useNative?: boolean };
/**
 * Gets the tag to use for a link.
 *
 * @param useNative Whether to use an anchor in place of a link. Necessary for
 *   outbound links.
 * @returns An anchor tag or a Link.
 */
export function getLinkElement(
	useNative: ButtonProps["useNative"] = false,
): "a" | typeof Link {
	return useNative ? "a" : Link;
}
