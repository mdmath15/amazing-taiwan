/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { theme } from "@styles/theme";

import { DestinationCard } from "./DestinationCard";

export default {
  title: "Components/DestinationCard",
  component: DestinationCard,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof DestinationCard>;

const Template: ComponentStory<typeof DestinationCard> = (args) => (
  <DestinationCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  destinations: "Taipei",
  image: "/images/Taipei.svg",
  rating: 5,
  title: "Taipei",
};

Default.decorators = [
  (Story) => (
    <div style={{ backgroundColor: ` ${theme.colors.darkBlue}`, display: "flex" }}>
      <Story />
    </div>
  ),
];
