import type { JSX } from "react";
import siteConfig from "../data/site";

function Footer(): JSX.Element {
  return (
    <div>
      <footer className="text-light-text font-inter pb-6 text-center text-sm">
        &copy; {new Date().getFullYear()} {siteConfig.name}
      </footer>
    </div>
  );
}

export default Footer;
