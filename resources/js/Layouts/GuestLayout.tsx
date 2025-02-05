import { Link } from "@inertiajs/react";
import type { PropsWithChildren } from "react";

import ApplicationLogo from "@/Components/ApplicationLogo";

/**
 * @param root0
 * @param root0.children
 */
export default function Guest({ children }: PropsWithChildren) {
	return (
		<div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
			<div>
				<Link href="/">
					<ApplicationLogo className="size-20 fill-current text-gray-500" />
				</Link>
			</div>

			<div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
				{children}
			</div>
		</div>
	);
}
