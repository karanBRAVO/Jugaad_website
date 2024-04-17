import type { Metadata } from "next";
import "./globals.css";
import Commons from "./Commons";

export const metadata: Metadata = {
  title: "Jugaad",
  description: "UIET Jugaad Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-parallax bg-no-repeat bg-cover">
        <Commons>{children}</Commons>
      </body>
    </html>
  );
}
