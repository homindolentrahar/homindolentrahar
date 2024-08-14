import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/components/ThemeProvider";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "homindolentrahar",
  description: "Personal website to showcase my projects and blog posts.",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <>
      <html lang={locale} suppressHydrationWarning>
        <head />

        <NextIntlClientProvider messages={messages}>
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              plusJakarta.variable
            )}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableColorScheme
            >
              <main className="bg-white dark:bg-zinc-900">
                {<Navbar />}
                {children}
              </main>
            </ThemeProvider>
          </body>
        </NextIntlClientProvider>
      </html>
    </>
  );
}
