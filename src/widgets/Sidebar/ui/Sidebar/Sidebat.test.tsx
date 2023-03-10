import { fireEvent, render, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
	test("test render", () => {
		const SidebarWithTranslation = withTranslation()(Sidebar);
		componentRender(<SidebarWithTranslation />);
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
	});

	test("test toggle", () => {
		componentRender(<Sidebar />);
		const toggleBtn = screen.getByTestId("sidebar-toggle");
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
	});
});
