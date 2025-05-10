import React from "react";
import NavItem, { NavItemProps } from "@/components/atoms/NavItem";
import { Box } from "@mui/material";

interface NavItemListProps {
  items: NavItemProps[];
}

export default function NavItemList({ items }: NavItemListProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
      {items.map((item, index) => (
        <NavItem key={index} href={item.href} label={item.label} />
      ))}
    </Box>
  );
}
