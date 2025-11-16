"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({ variant = "default", children, ...props }: ButtonProps) {
  const styles =
    variant === "outline"
      ? "border border-gray-400 text-gray-800 px-4 py-2 rounded"
      : "bg-blue-500 text-white px-4 py-2 rounded";

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
