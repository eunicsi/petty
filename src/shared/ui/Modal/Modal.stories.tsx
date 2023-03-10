import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import Modal from "./Modal";

export default {
	title: "shared/Modal",
	component: Modal,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
	return <Modal {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
	isOpen: true,
	children: "123",
};

export const Dark = Template.bind({});
Dark.args = {
	isOpen: true,
	children: "123",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
