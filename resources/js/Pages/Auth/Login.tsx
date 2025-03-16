import { Head, Link, useForm } from "@inertiajs/react";
import type { FormEventHandler } from "react";

import GuestLayout from "@/Layouts/GuestLayout";

/**
 * @param root0
 * @param root0.status
 * @param root0.canResetPassword
 */
export default function Login({
	status,
	canResetPassword,
}: {
	status?: string;
	canResetPassword: boolean;
}) {
	const { data, setData, post, processing, errors, reset } = useForm({
		email: "",
		password: "",
		remember: false as boolean,
	});

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route("login"), {
			onFinish: () => reset("password"),
		});
	};

	return (
		<GuestLayout>
			<Head title="Log in" />

			{status ? (
				<div className="mb-4 text-sm font-medium text-green-600">{status}</div>
			) : null}

			<form onSubmit={submit}>
				<div>
					<label htmlFor="email">Email</label>

					<input
						id="email"
						type="email"
						name="email"
						value={data.email}
						className="mt-1 block w-full"
						autoComplete="username"
						onChange={(e) => setData("email", e.target.value)}
					/>

					<span>{errors.email}</span>
				</div>

				<div className="mt-4">
					<label htmlFor="password">Password</label>

					<input
						id="password"
						type="password"
						name="password"
						value={data.password}
						className="mt-1 block w-full"
						autoComplete="current-password"
						onChange={(e) => setData("password", e.target.value)}
					/>

					<span>{errors.password}</span>
				</div>

				<div className="mt-4 block">
					<label className="flex items-center">
						<input
							type="checkbox"
							name="remember"
							checked={data.remember}
							onChange={(e) =>
								setData("remember", (e.target.checked || false) as false)
							}
						/>
						<span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
							Remember me
						</span>
					</label>
				</div>

				<div className="mt-4 flex items-center justify-end">
					{canResetPassword ? (
						<Link
							href={route("password.request")}
							className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
						>
							Forgot your password?
						</Link>
					) : null}

					<button type="submit" className="ms-4" disabled={processing}>
						Log in
					</button>
				</div>
			</form>
		</GuestLayout>
	);
}
