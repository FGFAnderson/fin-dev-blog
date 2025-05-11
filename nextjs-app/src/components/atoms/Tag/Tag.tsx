import Chip from "@mui/material/Chip";
import React from "react";

interface TagProps {
  label: string;
  color?: "default" | "primary" | "secondary" | "warning" | "error" | "success";
  size?: "small" | "medium";
  variant?: "filled" | "outlined";
}

export default function Tag({ label, color, size, variant }: TagProps) {
  return <Chip label={label} color={color} size={size} variant={variant} />;
}
