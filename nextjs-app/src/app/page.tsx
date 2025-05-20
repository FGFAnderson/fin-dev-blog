import HomeTemplate from "@/components/templates/HomeTemplate/HomeTemplate";
import { BlogPostData, SpotlightData } from "@/types/data";
import React from "react";

export default function Home() {
  // TODO - Replace with actual data
  const spotlightData: SpotlightData = {
    imageSrc: "https://placehold.co/1600x1200",
    linkToPost: "/blog/featured-post",
    title: "The consequences of deep inheritance",
    description:
      "Deep inheritance ravages the readability of your codebase, here's 5 ways you can fix it",
  };

  const blogPostsData: BlogPostData[] = [
    {
      imageSrc: "https://placehold.co/800x600",
      imageAlt: "Design pattern diagram showing composition over inheritance",
      title: "The consequences of deep inheritance",
      linkToPost: "/blog/featured-post",
      description:
        "Deep inheritance ravages the readability of your codebase, here's 5 ways you can fix it",
      datePublished: new Date("2025-04-15"),
      tags: [
        { label: "Design Patterns" },
        { label: "Architecture" },
        { label: "TypeScript" }
      ],
    },
    {
      imageSrc: "https://placehold.co/800x600",
      imageAlt: "React component tree visualization",
      title: "Composing React components for maximum reusability",
      linkToPost: "/blog/react-composition",
      description:
        "Learn how to structure your components to maximize reuse while maintaining clarity",
      datePublished: new Date("2025-04-02"),
      tags: [
        { label: "React" },
        { label: "Frontend" },
        { label: "Design Patterns"  }
      ],
    },
    {
      imageSrc: "https://placehold.co/800x600",
      imageAlt: "Performance metrics dashboard",
      title: "Optimizing React render performance",
      linkToPost: "/blog/react-performance",
      description:
        "Deep dive into React's rendering process and strategies to prevent unnecessary re-renders",
      datePublished: new Date("2025-03-20"),
      tags: [
        { label: "React", color: "primary" },
        { label: "Performance" },
        { label: "Frontend" }
      ],
    },
    {
      imageSrc: "https://placehold.co/800x600",
      imageAlt: "TypeScript code showing advanced type techniques",
      title: "Advanced TypeScript patterns for stronger type safety",
      linkToPost: "/blog/typescript-patterns",
      description:
        "Leverage TypeScript's type system to catch more bugs at compile time",
      datePublished: new Date("2025-03-10"),
      tags: [
        { label: "TypeScript" },
        { label: "JavaScript" }
      ],
    },
    {
      imageSrc: "https://placehold.co/800x600",
      imageAlt: "Testing pyramid diagram",
      title: "Building a robust testing strategy for React applications",
      linkToPost: "/blog/testing-react",
      description:
        "From unit tests to end-to-end, learn how to effectively test your React apps",
      datePublished: new Date("2025-02-28"),
      tags: [
        { label: "Testing" },
        { label: "React" },
        { label: "Frontend" }
      ],
    },
    {
      imageSrc: "https://placehold.co/800x600",
      imageAlt: "CSS grid layout visualization",
      title: "Modern CSS layout techniques you should be using",
      linkToPost: "/blog/modern-css",
      description:
        "Flexbox, Grid, and Container Queries - power tools for responsive design",
      datePublished: new Date("2025-02-15"),
      tags: [
        { label: "CSS" },
        { label: "Frontend" }
      ],
    },
  ];

  return (
    <HomeTemplate blogPostsData={blogPostsData} spotlightData={spotlightData} />
  );
}
