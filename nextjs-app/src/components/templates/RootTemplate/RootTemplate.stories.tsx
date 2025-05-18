import type { Meta, StoryObj } from "@storybook/react";
import RootTemplate from "./RootTemplate";
import React from "react";

const meta: Meta<typeof RootTemplate> = {
  title: "Templates/RootTemplate",
  component: RootTemplate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RootTemplate>;

export const Default: Story = {
  args: {
    children: <p> Sub-templates will be displayed here </p>,
  },
};
