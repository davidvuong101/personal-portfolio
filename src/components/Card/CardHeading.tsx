import type { JSX } from "react";

interface CardHeadingProps {
  heading: string;
  className?: string;
}

function CardHeading({
  heading,
  className = "",
}: CardHeadingProps): JSX.Element {
  return (
    <h2 className={`text-xl font-medium text-blue-500 ${className}`}>
      {heading}
    </h2>
  );
}

export default CardHeading;
