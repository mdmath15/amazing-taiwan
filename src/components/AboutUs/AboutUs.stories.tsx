/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { AboutUs } from ".";

export default {
  title: "Sections/About Us",
  component: AboutUs,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof AboutUs>;

const Template: ComponentStory<typeof AboutUs> = (args) => <AboutUs />;

export const Default = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
    viewport: {
      defaultViewport: "iphonexr",
    },
  };

