import { classNames } from "./classNames";

describe("classNames", () => {
	test("with first param only", () => {
		const expected = "someClass";
		expect(classNames("someClass")).toBe(expected);
	});

	test("with two additional classes", () => {
		const expected = "someClass class1 class2";
		expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
	});

	test("with two additional classes and mods", () => {
		const expected = "someClass class1 class2 hovered scrollable";
		expect(classNames(
			"someClass",
			{ hovered: true, scrollable: true },
			["class1", "class2"],
		)).toBe(expected);
	});

	test("with false mods", () => {
		const expected = "someClass class1 class2 scrollable";
		expect(classNames(
			"someClass",
			{ hovered: false, scrollable: true },
			["class1", "class2"],
		)).toBe(expected);
	});

	test("with undefined mode", () => {
		const expected = "someClass class1 class2 hovered";
		expect(classNames(
			"someClass",
			{ hovered: true, scrollable: undefined },
			["class1", "class2"],
		)).toBe(expected);
	});
});
