import React, { type JSX } from "react";
import CardHeading from "./CardHeading";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps): JSX.Element {
  return (
    <div
      className={`rounded-xl border border-blue-800 bg-zinc-800/30 p-6 transition hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}

Card.Heading = CardHeading;

export default Card;
