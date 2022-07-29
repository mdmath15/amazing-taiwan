/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { theme } from "@styles/theme";

import { ReviewCard } from "./ReviewCard";

export default {
  title: "Components/ReviewCard",
  component: ReviewCard,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof ReviewCard>;

const Template: ComponentStory<typeof ReviewCard> = (args) => (
  <ReviewCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    author: "Test",
    comment: "Comment Test",
    rating: 5,
    destination: "Destination Test",
    avatar: "/images/avatar1.svg"
};

Default.decorators = [
  (Story) => (
    <div style={{ backgroundColor: ` ${theme.colors.darkBlue}`, display: "flex" }}>
      <Story />
    </div>
  ),
];
