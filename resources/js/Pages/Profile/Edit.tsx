import { Head } from "@inertiajs/react";

import type { PageProps } from "@/types";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

/**
 * @param root0
 * @param root0.mustVerifyEmail
 * @param root0.status
 */
export default function Edit({
	mustVerifyEmail,
	status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
	return (
		<AuthenticatedLayout>
			<Head title="Profile" />

			<div className="py-12">
				<div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
					<div className="bg-white p-4 shadow-sm sm:rounded-lg sm:p-8 dark:bg-gray-800">
						<UpdateProfileInformationForm
							className="max-w-xl"
							mustVerifyEmail={mustVerifyEmail}
							status={status}
						/>
					</div>

					<div className="bg-white p-4 shadow-sm sm:rounded-lg sm:p-8 dark:bg-gray-800">
						<UpdatePasswordForm className="max-w-xl" />
					</div>

					<div className="bg-white p-4 shadow-sm sm:rounded-lg sm:p-8 dark:bg-gray-800">
						<DeleteUserForm className="max-w-xl" />
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
