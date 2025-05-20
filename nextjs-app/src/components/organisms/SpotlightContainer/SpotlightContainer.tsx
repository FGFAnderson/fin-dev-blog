"use client";

import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  styled,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// SpotlightContainer is a surface to showcase an important piece of work
interface SpotlightContainerProps {
  component?: React.ReactNode; // Component used to showcase a visual html component
  imageSrc?: string;
  title: string;
  description?: string;
  linkToPost: string;
  width?: number | string;
  height?: number | string;
}

const GradientOverlay = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 60%)",
}));

export default function SpotlightContainer({
  component,
  imageSrc,
  title,
  description,
  linkToPost,
  width = "100%",
  height = 500,
}: SpotlightContainerProps) {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 4,
        bgcolor: "primary.main",
        color: "text.primary",
        width: width,
        height: height,
        boxShadow: 4,
        cursor: "pointer",
      }}
    >
      {/* Conditionally render either component or image */}
      {component ? (
        <Box>{component}</Box>
      ) : (
        imageSrc && (
          <CardMedia
            component="img"
            image={imageSrc}
            alt={title}
            sx={{
              width: "100%",
              height: "100%",
            }}
          />
        )
      )}

      <GradientOverlay />

      <Box
        sx={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2 }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            fontWeight="bold"
            color={"primary.contrastText"}
          >
            {title}
          </Typography>
          <Typography variant="body1" color={"primary.contrastText"}>
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ paddingX: 2, paddingBottom: 3 }}>
          <Button
            variant="contained"
            color="primary"
            href={linkToPost}
            endIcon={<ArrowForwardIcon />}
          >
            Read More
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
