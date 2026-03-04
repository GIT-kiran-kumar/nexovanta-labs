import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { PageTransition } from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Nexovanta Labs | AI, Web & Mobile App Development Company",
  description:
    "Nexovanta Labs crafts premium Android applications with cutting-edge architecture, pixel-perfect UI, and performance that scales. India's top Android development studio.",
  keywords: ["Android App Development", "Kotlin", "Jetpack Compose", "Mobile Apps", "Web Development Company", "Software Development for Startups", "Nexovanta Labs"],
  openGraph: {
    title: "Nexovanta Labs — Premium Android App Development",
    description: "We build apps that define experiences and drive business growth.",
    url: "https://nexovantalabs.in",
    siteName: "Nexovanta Labs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexovanta Labs",
    description: "Premium Android App Development Studio",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://nexovantalabs.in"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Exo+2:ital,wght@0,300;0,400;0,600;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <PageTransition />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
