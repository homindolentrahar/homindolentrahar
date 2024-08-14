import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/components/ThemeProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "homindolentrahar",
  description: "Personal website to showcase my projects and blog posts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />

        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            plusJakarta.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableColorScheme
          >
            {<Navbar />}
            <main className="bg-surfaceVariant">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
