import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import theme from "@/theme/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
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
    <html lang="en" className={robotoSans.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
