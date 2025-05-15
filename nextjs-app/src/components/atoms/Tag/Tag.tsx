import Chip from "@mui/material/Chip";
import React from "react";
import { TagType } from "./TagTypes";

export default function Tag({
  label,
  color,
  size,
  variant = "outlined",
}: TagType) {
  return <Chip label={label} color={color} size={size} variant={variant} />;
}
