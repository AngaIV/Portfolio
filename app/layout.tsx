import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Anga Peter | Software Developer, Cybersecurity & Data Analytics",
  description:
    "Portfolio of Anga Peter — Software Developer, Cybersecurity Specialist, and Data Analyst. Featuring WinHarden, SEC-OPS-Lab, and enterprise dashboard projects.",
  keywords: [
    "Anga Peter",
    "Software Engineer",
    "Cybersecurity Analyst",
    "Data Analyst",
    "Next.js Portfolio",
    "Rhodes University",
    "Wazuh SIEM",
    "Full Stack Developer",
  ],
  authors: [{ name: "Anga Peter" }],
  openGraph: {
    title: "Anga Peter | Software Developer & Cybersecurity Portfolio",
    description:
      "Engineering secure software, active defense systems, and data-driven analytical solutions.",
    url: "https://anga-peter.vercel.app/", 
    siteName: "Anga Peter Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anga Peter | Developer Portfolio",
    description:
      "Software Engineering, Cybersecurity Operations, and Business Data Analytics.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#F5F3EE] text-black antialiased selection:bg-[#C6F135] selection:text-black">
        {children}
      </body>
    </html>
  );
}