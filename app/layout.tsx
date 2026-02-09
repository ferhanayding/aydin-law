
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aydin Law",
  description: "Aydin Law is a law firm specializing in personal injury cases. We are dedicated to helping our clients get the compensation they deserve.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}