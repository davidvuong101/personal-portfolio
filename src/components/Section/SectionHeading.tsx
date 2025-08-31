import type { JSX } from "react";

interface SectionHeadingProps {
  heading: string;
}

function SectionHeading({ heading }: SectionHeadingProps): JSX.Element {
  return (
    <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
      {heading}
    </h2>
  );
}

export default SectionHeading;
