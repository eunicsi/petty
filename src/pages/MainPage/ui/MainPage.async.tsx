import { lazy } from "react";

export const MainPageAsync = lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => {
		// resolve(import('./MainPage'))
		}, 1000);
	});
});
