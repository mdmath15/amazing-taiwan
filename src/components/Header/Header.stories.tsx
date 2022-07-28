/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";

import { Header } from ".";

export default {
  title: "Header/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => <div style={{ height: "120vh" }}>{Story()}</div>,
];

export const Mobile = Template.bind({});
Mobile.decorators = [
  (Story) => <div style={{ height: "120vh" }}>{Story()}</div>,
];

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};

export const MobileMenuOpen = Template.bind({});
MobileMenuOpen.decorators = [
  (Story) => <div style={{ height: "120vh" }}>{Story()}</div>,
];

MobileMenuOpen.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};

MobileMenuOpen.play = async () => {
  const openMenu = screen.getByTestId("open-menu");
  await userEvent.click(openMenu);
};
