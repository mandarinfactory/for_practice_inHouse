import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const font = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "쉼표",
  description: "쉼표, 음악을 들으면서 쉬세요 시팔!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
