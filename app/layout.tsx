import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;
const manrope = Manrope({ subsets: ["latin"], weight: ["300", "700"] });

export const metadata: Metadata = {
  title: "Last Set Homepage",
  description: "Last Set is an house music producer based in Barcelona, Spain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
