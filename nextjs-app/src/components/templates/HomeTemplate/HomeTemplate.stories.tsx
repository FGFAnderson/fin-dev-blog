import type { Meta, StoryObj } from "@storybook/react";
import HomeTemplate from "./HomeTemplate";
import React from "react";
import RootTemplate from "../RootTemplate";


const meta: Meta<typeof HomeTemplate> = {
  title: "Templates/HomeTemplate",
  component: HomeTemplate,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <RootTemplate>
      <Story/>
    </RootTemplate>
    )
  ],
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HomeTemplate>;

export const Default: Story = {
};
