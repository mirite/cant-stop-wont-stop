import type { PropsWithChildren, ReactElement } from "react";

/** @param props */
export default function Main(props: PropsWithChildren): ReactElement {
	const { children } = props;
	return <main className="container mx-auto grow">{children}</main>;
}
