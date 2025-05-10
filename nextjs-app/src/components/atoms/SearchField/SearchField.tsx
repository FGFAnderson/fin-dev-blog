"use client";

import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
interface SearchFieldProps {
  placeholder?: string;
  initalValue?: string;
  variant?: "standard" | "filled" | "outlined";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  height?: number | string;
  width?: number | string;
  onChange?: (value: string) => void;
}
export default function SearchField({
  placeholder = "Search...",
  initalValue = "",
  variant = "outlined",
  color = "primary",
  height,
  width,
  onChange,
}: SearchFieldProps) {
  const [inputValue, setInputValue] = useState(initalValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <TextField
      placeholder={placeholder}
      value={inputValue}
      variant={variant}
      color={color}
      onChange={handleChange}
      slotProps={{
        input: {
          startAdornment: (
            <SearchIcon fontSize="small" color="action" sx={{ mr: 1 }} />
          ),
        },
      }}
      sx={{
        height,
        width,
      }}
    />
  );
}
