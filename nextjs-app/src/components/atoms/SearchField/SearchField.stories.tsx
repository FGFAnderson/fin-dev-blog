import type { Meta, StoryObj } from "@storybook/react";
import SearchField from "./SearchField";

const meta: Meta<typeof SearchField> = {
  title: "Components/Atoms/SearchField",
  component: SearchField,
  argTypes: {
    placeholder: { control: "text" },
    defaultValue: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["standard", "filled", "outlined"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    height: { control: "number" },
    width: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  args: {
    placeholder: "Search...",
    variant: "outlined",
    color: "primary",
    height: 48,
    width: 240,
  },
};

export const Filled: Story = {
  args: {
    ...Default.args,
    variant: "filled",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    height: 56,
    width: 320,
    placeholder: "Large search...",
  },
};

export const WithDefaultValue: Story = {
  args: {
    ...Default.args,
    defaultValue: "Initial search term",
  },
};
