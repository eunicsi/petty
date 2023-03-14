import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import Loader from "./Loader";

export default {
	title: "widget/Loader",
	component: Loader,
	argTypes: {
		backgroundColor: { control: "color" },
	},
	args: {
		to: "/",
	},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => { return <Loader {...args} />; };

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
