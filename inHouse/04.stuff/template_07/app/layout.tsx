import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import "./globals.css";
import Sidebar from "@/components/Sidebar";

const font = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "스포티파이",
  description: "시팔 스포티파이 클론 만들기 어렵다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
