import Box from "@mui/material/Box";
import Header from "@/components/organisms/Header";
import React from "react";
import Container from "@mui/material/Container";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        {children}
      </Container>

      {/* TODO FOOTER */}
    </Box>
  );
}
