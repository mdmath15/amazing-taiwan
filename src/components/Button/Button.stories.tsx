/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from ".";

export default {
  title: "Buttons/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Orange = Template.bind({});
Orange.args = {
  color: "white",
  background: "orange",
  type: "button",
};

export const Blue = Template.bind({});
Blue.args = {
  color: "white",
  background: "blue",
  type: "button",
};
