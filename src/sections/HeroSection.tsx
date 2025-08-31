import type { JSX } from "react";
import siteConfig from "../data/site";

function HeroSection(): JSX.Element {
  return (
    <div
      id="home"
      className="flex min-h-screen flex-col items-center justify-center text-white"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 px-5">
        <h1 className="text-bold bg-gradient-to-r from-sky-400 via-blue-600 to-purple-600 bg-clip-text text-center text-5xl leading-relaxed text-transparent md:text-6xl">
          Hello, my name is{" "}
          <span className="font-semibold">{siteConfig.name}</span>
        </h1>
        <p className="max-w-sm text-center text-gray-300">
          {siteConfig.tagline}
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
