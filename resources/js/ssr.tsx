import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import ReactDOMServer from "react-dom/server";
import { route, type RouteName } from "ziggy-js";

const appName = import.meta.env.VITE_APP_NAME || "Can't Stop Won't Stop";

createServer((page) =>
	createInertiaApp({
		page,
		render: ReactDOMServer.renderToString,
		resolve: (name) =>
			resolvePageComponent(
				`./Pages/${name}.tsx`,
				import.meta.glob("./Pages/**/*.tsx"),
			),
		setup: ({ App, props }) => {
			/* eslint-disable */
			// @ts-expect-error
			global.route<RouteName> = (name, params, absolute) =>
				route(name, params as any, absolute, {
					...page.props.ziggy,
					location: new URL(page.props.ziggy.location),
				});
			/* eslint-enable */

			return <App {...props} />;
		},
		title: (title) => `${title} - ${appName}`,
	}),
);
