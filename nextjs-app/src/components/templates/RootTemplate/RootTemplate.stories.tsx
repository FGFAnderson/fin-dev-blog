import type { Meta, StoryObj } from "@storybook/react";
import RootTemplate from "./RootTemplate";
import React from "react";
import { Typography } from "@mui/material";

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
    children: <Typography> Sub-templates will be displayed here </Typography>,
  },
};
