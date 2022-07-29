/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Destinations } from "./Destinations";

export default {
  title: "Sections/Destinations",
  component: Destinations,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof Destinations>;

const Template: ComponentStory<typeof Destinations> = (args) => (
  <Destinations />
);

export const Default = Template.bind({});
