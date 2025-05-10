import TextField from "@mui/material/TextField";
import React from "react";

interface SearchFieldProps {
  placeholder?: string;
  defaultValue?: string;
  variant?: "standard" | "filled" | "outlined";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  height?: number | string;
  width?: number | string;
}

export default function SearchField({
  placeholder,
  defaultValue,
  variant,
  color,
  height,
  width,
}: SearchFieldProps) {
  return (
    <TextField
      placeholder={placeholder}
      defaultValue={defaultValue}
      variant={variant}
      color={color}
      sx={{
        height: height,
        width: width,
      }}
    />
  );
}
