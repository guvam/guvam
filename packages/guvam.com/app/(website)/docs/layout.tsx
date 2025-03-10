import type { ReactNode } from "react";

import { ComponentsLinks } from "@/app/(website)/docs/components/ComponentsLinks";
import { TutorialsLinks } from "@/app/(website)/docs/tutorials/TutorialsLinks";

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="Layout-section">
      <div className="SideMenu">
        <nav className="SideMenu-menu">
          <TutorialsLinks />
          <ComponentsLinks />
        </nav>
        <main className="SideMenu-content">{children}</main>
      </div>
    </div>
  );
}
