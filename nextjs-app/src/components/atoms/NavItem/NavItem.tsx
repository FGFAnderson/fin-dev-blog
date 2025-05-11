"use client";

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React from "react";
import { styled } from "@mui/material/styles";

export interface NavItemProps {
  href: string;
  label: string;
}

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  "&:hover": {
    cursor: "pointer",
  },
}));

export default function NavItem({ href, label }: NavItemProps) {
  return (
    <StyledLink href={href} underline="hover">
      <Typography variant="h5">{label}</Typography>
    </StyledLink>
  );
}
