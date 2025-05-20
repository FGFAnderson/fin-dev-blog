import BlogCard from "@/components/organisms/BlogCard";
import SpotlightContainer from "@/components/organisms/SpotlightContainer";
import { BlogPostData, SpotlightData } from "@/types/data";
import Grid from "@mui/material/Grid";
import React from "react";

interface HomeTemplateProps {
  spotlightData: SpotlightData;
  blogPostsData: BlogPostData[];
}
export default function HomeTemplate({
  spotlightData,
  blogPostsData,
}: HomeTemplateProps) {
  return (
    <>
      <SpotlightContainer
        title={spotlightData.title}
        linkToPost={spotlightData.linkToPost}
        imageSrc={spotlightData.imageSrc}
        description={spotlightData.description}
        height="50vh"
        width="auto"
      />
      <Grid container spacing={2} sx={{ pt: 2 }}> 
        {blogPostsData.map((item, index) => (
          <Grid key={index} size={4}>
            <BlogCard
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              linkToPost={item.linkToPost}
              description={item.description}
              tags={item.tags}
              datePublished={item.datePublished}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
