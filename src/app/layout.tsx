import "./globals.css";
import sharedMetaData from "./shared-metadata.js";
import { Analytics } from "@vercel/analytics/react";
import { Caveat, Montserrat } from "next/font/google";

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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
