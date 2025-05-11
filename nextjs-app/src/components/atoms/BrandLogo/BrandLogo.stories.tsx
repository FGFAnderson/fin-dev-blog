import type { Meta, StoryObj } from "@storybook/react";
import BrandLogo from "./BrandLogo";

const meta: Meta<typeof BrandLogo> = {
  title: "Components/Atoms/BrandLogo",
  component: BrandLogo,
  tags: ["autodocs"],
  argTypes: {
    height: {
      control: { type: "text" },
    },
    width: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BrandLogo>;

export const Default: Story = {
  args: {
    height: 48,
    width: "auto",
  },
};

export const Large: Story = {
  args: {
    height: 96,
    width: "auto",
  },
};

export const Small: Story = {
  args: {
    height: 24,
    width: "auto",
  },
};
