import { Head } from "@inertiajs/react";
import type { ReactElement } from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

/**
 *
 */
export default function Dashboard(): ReactElement {
	return (
		<AuthenticatedLayout>
			<Head title="Dashboard" />

			<div className="py-12">
				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="overflow-hidden bg-white shadow-xs sm:rounded-lg dark:bg-gray-800">
						<div className="p-6 text-gray-900 dark:text-gray-100">
							You're logged in!
						</div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
