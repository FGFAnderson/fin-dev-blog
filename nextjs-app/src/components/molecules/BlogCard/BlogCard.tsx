import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

interface BlogCardProps {
  image: string;
  imageAlt: string;
  title: string;
  linkToPost: string;
  description: string;
  datePublished: Date;
  width?: number | string;
  height?: number | string;
  //tags: Tag[] will be some sort of chip list
}

export default function BlogCard({
  image,
  imageAlt,
  description,
  datePublished,
  title,
  linkToPost,
  width = "auto",
  height = "auto",
}: BlogCardProps) {
  return (
    <Card sx={{ width: { width }, height: { height } }}>
      <CardMedia image={image} alt={imageAlt} component="img" />
      <CardContent>
        <Typography gutterBottom variant="h3">
          <Link href={linkToPost}>{title}</Link>
        </Typography>
        <Typography gutterBottom variant="body2">
          {description}
        </Typography>
        <Typography variant="body2">
          Published: {datePublished.toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
