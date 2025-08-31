import type { JSX } from "react";
import siteConfig from "../data/site";

function Footer(): JSX.Element {
  return (
    <div>
      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} {siteConfig.name}
      </footer>
    </div>
  );
}

export default Footer;
