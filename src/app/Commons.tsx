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
        style={{
          background: "url('/bgImg.png')",
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Sidebar />
        <div
          className="w-full h-screen overflow-y-auto bg-transparent text-white"
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
