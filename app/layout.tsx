import type { Metadata } from "next";
import "./globals.css";
import { release } from "../config/site";
export const metadata: Metadata = {
  title: `Nivo — ${release.label}`,
  description:
    "A calmer way to see your money. Explore Nivo’s intended human-first Android experience.",
  openGraph: {
    title: "Nivo — Money, a little more human",
    description: release.description,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
