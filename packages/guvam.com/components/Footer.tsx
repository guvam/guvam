"use server";

import "./Footer.css";

import Link from "next/link";

import GuvamFull from "@/public/logo-full.svg";

export const Footer = async () => (
  <footer className="Footer-content">
    <Link href="/" aria-label="got to Home">
      <GuvamFull />
    </Link>

    {/*        <div className="Footer-Icons">
          <Link href="https://www.linkedin.com/company/guvam" target="_blank">
            <LinkedInIcon />
          </Link>
          <Link href="https://www.youtube.com/channel/UCPb8fulkrQxN-wndjMlEH6w" target="_blank">
            <YoutubeIcon />
          </Link>
          <Link href="https://x.com/GuvamApp" target="_blank">
            <TwitterIcon />
          </Link>
        </div>*/}
  </footer>
);
