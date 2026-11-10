import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "To Do List",
  description: "할 일 목록을 관리하는 To Do 웹 서비스",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
