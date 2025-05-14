import type { FormEventHandler } from "react";

import { Head, Link, useForm } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout";

/**
 * @param root0
 * @param root0.status
 * @param root0.canResetPassword
 */
export default function Login({
	canResetPassword,
	status,
}: {
	canResetPassword: boolean;
	status?: string;
}) {
	const { data, errors, post, processing, reset, setData } = useForm({
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
						autoComplete="username"
						className="mt-1 block w-full"
						id="email"
						name="email"
						onChange={(e) => setData("email", e.target.value)}
						type="email"
						value={data.email}
					/>

					<span>{errors.email}</span>
				</div>

				<div className="mt-4">
					<label htmlFor="password">Password</label>

					<input
						autoComplete="current-password"
						className="mt-1 block w-full"
						id="password"
						name="password"
						onChange={(e) => setData("password", e.target.value)}
						type="password"
						value={data.password}
					/>

					<span>{errors.password}</span>
				</div>

				<div className="mt-4 block">
					<label className="flex items-center">
						<input
							checked={data.remember}
							name="remember"
							onChange={(e) =>
								setData("remember", (e.target.checked || false) as false)
							}
							type="checkbox"
						/>
						<span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
							Remember me
						</span>
					</label>
				</div>

				<div className="mt-4 flex items-center justify-end">
					{canResetPassword ? (
						<Link
							className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
							href={route("password.request")}
						>
							Forgot your password?
						</Link>
					) : null}

					<button className="ms-4" disabled={processing} type="submit">
						Log in
					</button>
				</div>
			</form>
		</GuestLayout>
	);
}
