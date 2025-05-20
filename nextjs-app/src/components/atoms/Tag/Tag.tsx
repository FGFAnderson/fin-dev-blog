import Chip from "@mui/material/Chip";
import React from "react";

type TagProps = {
  label: string;
  color?: "default" | "primary" | "secondary" | "warning" | "error" | "success";
  size?: "small" | "medium";
  variant?: "filled" | "outlined";
};

export default function Tag({
  label,
  color = "primary",
  size = "medium",
  variant = "outlined",
}: TagProps) {

  return (
    <Chip label={label} color={color} size={size} variant={variant} />
  );
}
