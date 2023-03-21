import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./Select";

export default {
	title: "shared/Select",
	component: Select,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => { return <Select {...args} />; };

export const Primary = Template.bind({});
Primary.args = {
	label: "Укажите значение",
	options: [
		{ value: "1", content: "text1" },
		{ value: "2", content: "text2" },
	],
};
