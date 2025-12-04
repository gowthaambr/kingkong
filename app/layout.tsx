import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant OS - QR Menu & Ordering System for Restaurants",
  description: "Transform your restaurant with digital QR menus, contactless ordering, and a powerful admin dashboard. No commissions, full control.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
