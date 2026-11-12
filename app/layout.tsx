import type { Metadata, Viewport } from "next";
import "../_styles/global.css";
import ViewportListener from "@/_components/commons/ViewportListener";

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
        <div className="contents_area">
          <header>
            <a href="/">
              <img id={"logo_large"} src={"/header_logo/logo_large.svg"} />
              <img id={"logo_small"} src={'/header_logo/logo_small.svg'} />
            </a>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
