import siteConfig from "../data/site";

function Navbar() {
  return (
    <header className="flex items-center justify-between px-10 py-5">
      <a href="#">
        <h1 className="font-poppins text-light-text text-3xl font-bold uppercase hover:cursor-pointer">
          {siteConfig.name.split(" ")[0].toUpperCase()}
        </h1>
      </a>

      <nav>
        <ul className="font-inter text-light-text flex space-x-6 text-lg">
          {siteConfig.navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
