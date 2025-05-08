import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React, { PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";

export interface NavItemProps {
  href: string;
}

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  "&:hover": {
    cursor: "pointer",
  },
}));

export default function NavItem({
  children,
  href,
}: PropsWithChildren<NavItemProps>) {
  return (
    <StyledLink href={href} underline="hover">
      <Typography variant="h5">{children}</Typography>
    </StyledLink>
  );
}
