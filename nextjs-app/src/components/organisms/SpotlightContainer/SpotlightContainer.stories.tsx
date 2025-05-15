import type { Meta, StoryObj } from "@storybook/react";
import SpotlightContainer from "./SpotlightContainer";
import React from "react";

const meta: Meta<typeof SpotlightContainer> = {
  title: "Components/Organisms/SpotlightContainer",
  component: SpotlightContainer,
  tags: ["autodocs"],
  argTypes: {
    description: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SpotlightContainer>;

export const Default: Story = {
  args: {
    imageSrc:
      "https://media.istockphoto.com/id/473035236/vector/object-oriented-programming-oop.jpg?s=612x612&w=0&k=20&c=2vBUhGzzaesGJWpKtVMqA-aOPHskDIIizSdtMwZOy9Q=",
    width: 900,
    linkToPost: "/",
    title: "The consequences of deep inheritance",
    description:
      "Deep inheritance ravages the readability of your codebase, here's 5 ways you can fix it",
  },
};

export const withComponent: Story = {
  args: {
    component: <h1>H1 Component</h1>,
    width: 900,
    linkToPost: "/",
    title: "H1 in HTML",
    description: "Maybe all we needed was html....",
  },
};
