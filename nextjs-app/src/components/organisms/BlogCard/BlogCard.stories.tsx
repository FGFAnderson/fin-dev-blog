import type { Meta, StoryObj } from "@storybook/react";
import BlogCard from "./BlogCard";

const meta: Meta<typeof BlogCard> = {
  title: "Components/Organisms/BlogCard",
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
      "https://media.istockphoto.com/id/473035236/vector/object-oriented-programming-oop.jpg?s=612x612&w=0&k=20&c=2vBUhGzzaesGJWpKtVMqA-aOPHskDIIizSdtMwZOy9Q=",
    width: 400,
    linkToPost: "/",
    title: "The consequences of deep inheritance",
    description:
      "Deep inheritance ravages the readability of your codebase, here's 5 ways you can fix it",
    datePublished: new Date("2025-04-22"),
  },
};
