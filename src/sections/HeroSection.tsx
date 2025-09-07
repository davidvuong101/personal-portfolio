import type { JSX } from "react";
import siteConfig from "../data/site";
import Navbar from "../components/Navbar";

function HeroSection(): JSX.Element {
  return (
    <div className="bg-primary flex min-h-screen flex-col">
      <Navbar />
      <div className="text-light-text container mx-auto px-10 pt-30 pb-5">
        <h1 className="font-poppins text-7xl font-bold">
          Hi, I'm {siteConfig.name}
        </h1>
        <p className="font-inter pt-3 text-2xl leading-relaxed">
          {siteConfig.tagline}
        </p>
        <div className="flex space-x-5 pt-10">
          <button className="bg-light-text text-dark-text rounded-xl px-4 py-2 text-xl transition hover:bg-gray-200">
            Learn more
          </button>
          <button className="text-light-text ring-light-text hover:bg-light-text hover:text-dark-text rounded-xl bg-none px-4 py-2 text-xl ring-1 transition">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
