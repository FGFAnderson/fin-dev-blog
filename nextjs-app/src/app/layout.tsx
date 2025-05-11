import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import lightTheme from "@/theme/lightTheme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import React from "react";
import RootTemplate from "@/components/templates/RootTemplate";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "finman blog",
  description: "Fin's code blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoMono.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <RootTemplate>{children}</RootTemplate>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
