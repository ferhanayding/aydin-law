import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
};

// Asıl <html>/<body> ve sayfa metadata'sı app/[locale]/layout.tsx içinde tanımlanır.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
