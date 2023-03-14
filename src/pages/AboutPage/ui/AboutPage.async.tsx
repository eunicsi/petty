import { lazy } from "react";

export const AboutPageAsync = lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => {
		// resolve(import('./AboutPage'));
		}, 1000);
	});
});
