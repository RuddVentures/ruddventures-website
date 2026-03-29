import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rudd Ventures | AI Automation for Small Businesses",
  description:
    "Done-for-you AI enquiry response systems for small businesses. Faster replies, fewer missed leads, and full human control.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}