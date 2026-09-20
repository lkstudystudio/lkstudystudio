import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LK STUDY STUDIO | Digital Studio",
  description:
    "LK STUDY STUDIO builds modern websites, applications, digital experiences and custom solutions.",
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
