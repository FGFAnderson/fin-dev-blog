import React from "react";
import AppBar from "@mui/material/AppBar";
import BrandLogo from "../atoms/BrandLogo";
import Toolbar from "@mui/material/Toolbar";
import NavItemList from "../molecules/NavItemList/NavItemList";
import SearchField from "../atoms/SearchField";
import Box from "@mui/material/Box";

export default function Header() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <AppBar color="transparent" position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <BrandLogo width={120} height="auto" />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <NavItemList items={navItems} />
        </Box>

        <Box>
          <SearchField width={240} variant="standard" placeholder="Search..." />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
