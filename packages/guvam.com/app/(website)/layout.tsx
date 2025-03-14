import "@guvam/components/themes/base.css";
import "@guvam/components/themes/index.css";
import "@guvam/components/colors/index.css";
import "../../components/SideMenu.css";
import "../../components/TitleCarousel.css";

import { loadEnvConfig } from "@next/env";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SettingsAction } from "@/components/SettingsAction";
import { getSettingsVariables, getThemeSettings } from "@/components/Theme";

export const metadata: Metadata = {
  title: "Guvam.js",
  description: "UI components",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

loadEnvConfig(process.cwd());

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const cookieStore = await cookies();
  const themeSettings = getThemeSettings(cookieStore);

  return (
    <html
      lang="en"
      style={getSettingsVariables(themeSettings) as never}
      className={`Theme--theme-${themeSettings.theme} Theme--color-${themeSettings.colorTheme}`}
    >
      <head>
        <title>Guvam</title>
        <link rel="icon" type="image/svg+xml" href="/logo-icon.svg" />
        <meta name="color-scheme" content="dark light" />
        <GoogleAnalytics gaId="G-TC6QN8QRH0" />
        <GoogleTagManager gtmId="GTM-T7RFBRHK" />
      </head>
      <body className="Layout">
        <div className="Layout-background Header-stickyContainer">
          <div className="Layout-section">
            <Header />
          </div>
          <div className="Layout-line"></div>
        </div>

        {children}
        <div className="Layout-line"></div>
        <div className="Layout-section">
          <Footer />
        </div>

        <SettingsAction themeSettings={themeSettings} />
      </body>
    </html>
  );
}
