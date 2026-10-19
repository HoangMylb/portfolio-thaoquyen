import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Trịnh Thảo Quyên | Freelance Video Editor & AI Creator",
  description:
    "Portfolio của Trịnh Thảo Quyên — Freelance Video Editor chuyên Thời Trang, Sức Khỏe, Làm Đẹp và Ẩm Thực với hơn 2 năm kinh nghiệm và quy trình AI tiên tiến.",
  keywords: ["video editor", "freelance", "thời trang", "sức khỏe", "làm đẹp", "ẩm thực", "AI workflow"],
  authors: [{ name: "Trịnh Thảo Quyên" }],
  openGraph: {
    title: "Trịnh Thảo Quyên | Freelance Video Editor & AI Creator",
    description: "Kể chuyện bằng hình ảnh — Nhanh hơn với AI. 2+ năm kinh nghiệm freelance video editing.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={plusJakartaSans.variable} suppressHydrationWarning>
      <body className="antialiased font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}
