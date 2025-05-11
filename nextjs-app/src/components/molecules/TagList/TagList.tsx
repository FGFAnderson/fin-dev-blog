import React from "react";
import Box from "@mui/material/Box";
import Tag from "@components/atoms/Tag";
import { TagType } from "@components/atoms/Tag";

interface TagListProps {
  tags?: TagType[];
  spacing?: number;
}

export default function TagList({
  tags,
  spacing = 1, 
}: TagListProps) {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        flexWrap: "wrap", 
        gap: spacing 
      }}
    >
      {tags && tags.map((tag, index) => (
        <Tag
          key={`${tag.label}-${index}`}
          label={tag.label}
          color={tag.color}
          size={tag.size}
          variant={tag.variant}
        />
      ))}
    </Box>
  );
}
