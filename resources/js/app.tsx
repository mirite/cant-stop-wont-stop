import "../css/app.css";
import "./bootstrap";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot, hydrateRoot } from "react-dom/client";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
	progress: {
		color: "#4B5563",
	},
	resolve: (name) =>
		resolvePageComponent(
			`./Pages/${name}.tsx`,
			import.meta.glob("./Pages/**/*.tsx"),
		),
	setup({ App, el, props }) {
		if (import.meta.env.SSR) {
			hydrateRoot(el, <App {...props} />);
			return;
		}

		createRoot(el).render(<App {...props} />);
	},
	title: (title) => `${title} - ${appName}`,
});
