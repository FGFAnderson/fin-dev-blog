import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { TagType } from "@/types";
import TagList from "@/components/molecules/TagList/TagList";

interface BlogCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  linkToPost: string;
  description: string;
  datePublished: Date;
  width?: number | string;
  height?: number | string;
  tags?: TagType[];
}

export default function BlogCard({
  imageSrc,
  imageAlt,
  description,
  datePublished,
  title,
  linkToPost,
  width = "auto",
  height = "auto",
  tags,
}: BlogCardProps) {
  return (
    <Card sx={{ width: { width }, height: { height } }}>
      <CardMedia image={imageSrc} alt={imageAlt} component="img" />
      <CardContent>
        <Typography gutterBottom variant="h3">
          <Link href={linkToPost}>{title}</Link>
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          {description}
        </Typography>
        <Typography variant="body2" sx={{ pb: 1, color: "text.secondary" }}>
          Published: {datePublished.toLocaleDateString()}
        </Typography>
        <TagList tags={tags}></TagList>
      </CardContent>
    </Card>
  );
}
