/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { theme } from "@styles/theme";

import { Carousel } from ".";
import { DestinationCard } from "../DestinationCard";

export default {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args}>
    <DestinationCard
      destinations="Taipei"
      image="/images/Taipei.svg"
      rating={5}
      title="Taipei"
    />
    <DestinationCard
      destinations="Taipei"
      image="/images/Taipei.svg"
      rating={5}
      title="Taipei"
    />
    <DestinationCard
      destinations="Taipei"
      image="/images/Taipei.svg"
      rating={5}
      title="Taipei"
    />
    <DestinationCard
      destinations="Taipei"
      image="/images/Taipei.svg"
      rating={5}
      title="Taipei"
    />
    <DestinationCard
      destinations="Taipei"
      image="/images/Taipei.svg"
      rating={5}
      title="Taipei"
    />
  </Carousel>
);

export const Default = Template.bind({});
Default.args = {
  cardsToShow: 2,
};
Default.decorators = [
  (Story) => (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: `${theme.colors.darkBlue}`,
      }}
    >
      <Story />
    </div>
  ),
];
