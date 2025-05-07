"use client";

import Link from "@mui/material/Link";
import React, { PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";

interface HeaderNavItemProps {
  href: string;
}

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  "&:hover": {
    cursor: "pointer",
  } 
}));

export default function HeaderNavItem({
  children,
  href,
}: PropsWithChildren<HeaderNavItemProps>) {
  return <StyledLink href={href} underline="hover">{children}</StyledLink>;
}
