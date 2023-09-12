"use client";

import { ReactNode } from "react";

interface ScrollToIdButtonProps {
  id: string;
  children: ReactNode;
}

const scrollToCollection = (id: string) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
};

export const ScrollToIdButton = ({ id, children }: ScrollToIdButtonProps) => {
  return (
    <button className="btn" onClick={() => scrollToCollection(id)}>
      {children}
    </button>
  );
};
