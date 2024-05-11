import "./globals.css";
import type { Viewport } from "next";
import sharedMetaData from "./shared-metadata";
import { Caveat, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/common/ThemeProvider";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark",
  width: "device-width",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#57c5b6" },
    { media: "(prefers-color-scheme: dark)", color: "#57c5b6" },
  ],
};

export const metadata = {
  ...sharedMetaData,
  title: {
    default: "Yash Sharma | Software engineer",
    template: "%s | Yash Sharma | Software engineer",
    absolute: "Yash Sharma | Software engineer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${caveat.variable}`}>
      <body className="scroll-smooth">
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
