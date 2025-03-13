import "@guvam/components/themes/base.css";
import "@guvam/components/themes/index.css";
import "@guvam/components/colors/index.css";

import { PortfolioHeader } from "@guvam/blocks/src/PortfolioHeader";
import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import type { ReactNode } from "react";

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

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const cookieStore = await cookies();
  const themeSettings = getThemeSettings(cookieStore);

  return (
    <html
      lang="en"
      style={getSettingsVariables(themeSettings) as never}
      className={`Theme--type-${themeSettings.theme} Theme--color-${themeSettings.colorTheme}`}
    >
      <head>
        <title>Agency template</title>
        <link rel="icon" type="image/svg+xml" href="/logo-icon.svg" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className="Layout">
        <section className="Layout-section">
          <PortfolioHeader />
        </section>
        {children}
        <SettingsAction themeSettings={themeSettings} />
      </body>
    </html>
  );
}
