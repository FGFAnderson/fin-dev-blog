import React from "react";
import AppBar from "@mui/material/AppBar";
import BrandLogo from "@components/atoms/BrandLogo";
import Toolbar from "@mui/material/Toolbar";
import NavItemList from "@components/molecules/NavItemList/NavItemList";
import SearchField from "@components/atoms/SearchField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Header() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <Container maxWidth="xl">
          <Box
            sx={{
              pt: 1,
              px: 8,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <Box sx={{ pb: 2 }}>
              <NavItemList items={navItems} />
            </Box>

            <Box sx={{ alignSelf: "center" }}>
              <BrandLogo width={160} height="auto" />
            </Box>

            <Box sx={{ pb: 1.5 }}>
              <SearchField
                width={240}
                variant="standard"
                placeholder="Search..."
              />
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
