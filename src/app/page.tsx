import React from "react";
import { Footer, Navbar, Sidebar, Slider } from "@/ui/ComponentExporter";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <section className="w-full min-h-screen bg-black flex flex-row items-start justify-start">
        <div className="h-screen flex items-center justify-center bg-white shadow-md">
          <Sidebar />
        </div>
        <div className="w-full h-screen overflow-y-auto bg-black text-white">
          {/* Header */}
          <div className="w-full bg-black h-screen">
            <Navbar />
          </div>

          {/* Main */}
          <div className="w-full min-h-screen bg-yellow-600">
            {/* Info's */}
            Info
            {/* Carousels */}
            <div className="w-full">
              <Slider />
            </div>
          </div>

          {/* Footer */}
          <div>
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
