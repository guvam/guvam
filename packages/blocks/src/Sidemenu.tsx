import "./SideMenu.css";

import Image from "next/image";

export const Sidemenu = () => (
  <section>
    <div className="Blocks-Content-Wrapper">
      <div className="SideBar">
        <div className="SideBar-Header">
          <div className="SideBar-A">
            <Image src="/logo-icon.svg" alt="user.png" height={38} width={38} />
          </div>
        </div>
        <div className="SideBar-C">
          <nav className="Side-Menu-Nav Bordered">
            <a href="#" className="Menu-Link">
              Dashboard
            </a>
            <a href="#" className="Menu-Link">
              Teams
            </a>
            <a href="#" className="Menu-Link">
              Reports
            </a>
            <a href="#" className="Menu-Link">
              Documents
            </a>
            <a href="#" className="Menu-Link">
              Emails
            </a>
          </nav>
          <nav className="Side-Menu-Nav Bordered">
            <Image src="/user.png" alt="user.png" height={38} width={38} />
            <a href="#" className="Menu-Link">
              Profile
            </a>
            <a href="#" className="Menu-Link">
              Account
            </a>
            <a href="#" className="Menu-Link">
              Logout
            </a>
          </nav>
        </div>
      </div>
      <div className="Blocks-Content"></div>
    </div>
  </section>
);
