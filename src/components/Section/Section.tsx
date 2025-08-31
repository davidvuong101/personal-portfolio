import React, { type JSX } from "react";
import SectionHeading from "./SectionHeading";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

function Section({ id, children, className = "" }: SectionProps): JSX.Element {
  return (
    <section
      id={id}
      className={`px-8 py-20 text-gray-100 md:px-20 ${className}`}
    >
      {children}
    </section>
  );
}

Section.Heading = SectionHeading;

export default Section;
