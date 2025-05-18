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
    <Box>
      <Header />

      <Container maxWidth="xl" component="main" sx={{ pt: 3 }}>
        {children}
      </Container>

      {/* TODO FOOTER */}
    </Box>
  );
}
