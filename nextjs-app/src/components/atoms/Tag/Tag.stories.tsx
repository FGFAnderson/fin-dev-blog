import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/atoms/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: "Default"
  },
};

export const Primary: Story = {
  args: {
    label: "Primary",
    color: "primary"
  }
}  

export const Outlined: Story = {
  args: {
    label: "Outlined",
    variant: "outlined"
  }
}

export const Small: Story = {
  args: {
    label: "Small",
    size: "small"
  }
}
