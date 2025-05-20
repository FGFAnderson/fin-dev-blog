import Chip from "@mui/material/Chip";
import React from "react";

type TagProps = {
  label?: string;
  color?: "default" | "primary" | "secondary" | "warning" | "error" | "success";
  size?: "small" | "medium";
  variant?: "filled" | "outlined";
  children?: React.ReactNode;
};

export default function Tag({
  label,
  color,
  size,
  variant = "outlined",
  children,
}: TagProps) {
  const displayLabel = children || label;

  return (
    <Chip label={displayLabel} color={color} size={size} variant={variant} />
  );
}
