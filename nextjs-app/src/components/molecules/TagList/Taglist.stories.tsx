import type { Meta, StoryObj } from "@storybook/react";
import TagList from "./TagList";

const meta: Meta<typeof TagList> = {
  title: "Components/Molecules/TagList",
  component: TagList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TagList>;

export const Default: Story = {
  args: {
    tags: [
      { label: "HTML" },
      { label: "React" },
      { label: "Next.js" },
      { label: "PSQL" },
    ],
  },
};

export const Filled: Story = {
  args: {
    tags: [
      { label: "HTML", variant: "filled" },
      { label: "React", variant: "filled" },
      { label: "Next.js", variant: "filled" },
      { label: "PSQL", variant: "filled" },
    ],
  },
};

export const Spaced: Story = {
  args: {
    spacing: 2,
    tags: [
      { label: "HTML" },
      { label: "React" },
      { label: "Next.js" },
      { label: "PSQL" },
    ],
  },
};
