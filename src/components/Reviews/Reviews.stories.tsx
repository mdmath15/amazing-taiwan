/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Reviews } from ".";

export default {
  title: "Sections/Reviews",
  component: Reviews,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof Reviews>;

const Template: ComponentStory<typeof Reviews> = (args) => <Reviews />;

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};
