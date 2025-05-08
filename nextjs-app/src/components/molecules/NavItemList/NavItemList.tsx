import React, { PropsWithChildren } from "react";
import NavItem, { NavItemProps } from "@/components/atoms/NavItem";
import { Box } from "@mui/material";

// Define the props for NavItemList
interface NavItemListProps {
  items: NavItemProps[];
}

export default function NavItemList({
  children,
  items,
}: PropsWithChildren<NavItemListProps>) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
      {items.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
      {children}
    </Box>
  );
}
