"use client";

import React from "react";
import { Navbar, Sidebar, Footer } from "@/components/ComponentExporter";

const Commons = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <>
      <Navbar />
      <main
        className="w-full min-h-screen bg-black flex flex-row-reverse items-start justify-start"
        
      >
        <Sidebar />
        <div
          className="w-full bg-transparent h-screen text-white relative"
          id="scrollable-container-parallax"
        >
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Commons;
