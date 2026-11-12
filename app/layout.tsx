import type { Metadata, Viewport } from "next";
import "../_styles/globals.css";
import ViewportListener from "@/_components/commons/ViewportListener";
import HeaderBar from "@/_components/commons/HeaderBar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export const metadata: Metadata = {
  title: "do it;",
  description: "할 일 목록을 관리하는 To Do 웹 서비스",
  icons: "/favicon/favicon.ico"
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body>
        <ViewportListener />
        <header>
          <HeaderBar />
        </header>
        {children}
      </body>
    </html>
  );
}
