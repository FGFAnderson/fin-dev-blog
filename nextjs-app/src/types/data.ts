import { TagType } from "./tag";

export type SpotlightData = {
  title: string;
  imageSrc?: string;
  description?: string;
  linkToPost: string;
};

export type BlogPostData = {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  linkToPost: string;
  description: string;
  datePublished: Date;
  tags?: TagType[];
};
