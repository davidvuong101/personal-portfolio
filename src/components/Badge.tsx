import React, { type JSX } from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

function Badge({ children, className = "" }: BadgeProps): JSX.Element {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-medium text-gray-800 ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
