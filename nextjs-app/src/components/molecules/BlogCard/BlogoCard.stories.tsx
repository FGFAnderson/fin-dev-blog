import type { Meta, StoryObj } from "@storybook/react";
import BlogCard from "./BlogCard";

const meta: Meta<typeof BlogCard> = {
  title: "Components/molecules/BlogCard",
  component: BlogCard,
  tags: ["autodocs"],
  argTypes: {
    description: {
      control: { type: "text" },
    },
    datePublished: {
      control: { type: "date" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  args: {
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*j8-cozpbICG78MxviylRhQ.jpeg",
    width: 400,
    linkToPost: "/",
    title: "The consequences of deep inheritance",
    description:
      "Deep inheritance ravages the readability of your codebase, here's 5 ways you can fix it",
    datePublished: new Date("2025-04-22"),
  },
};
