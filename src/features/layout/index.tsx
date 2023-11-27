import React from "react";

// Local Components
import { Navbar } from "./components/Navbar";

// Feature Components

// types
interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen">
      <Navbar />

      <section className="flex-1 container mx-auto px-4 mb-10">{children}</section>
    </div>
  );
};
