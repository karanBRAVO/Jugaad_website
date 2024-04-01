import React from "react";
import {
  Footer,
  Info,
  MastHead,
  Navbar,
  Sidebar,
  Slider,
} from "@/components/ComponentExporter";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <section
        className="w-full min-h-screen bg-black flex flex-row-reverse items-start justify-start"
        style={{
          background: "url('/bgImg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-screen flex items-center justify-center bg-white shadow-md">
          <Sidebar />
        </div>
        <div className="w-full h-screen overflow-y-auto bg-transparent text-white">
          {/* Header */}
          <div className="w-full bg-transparent h-screen">
            <Navbar />
            <MastHead />
          </div>

          {/* Main */}
          <div className="w-full min-h-screen bg-transparent">
            {/* Info's */}
            <Info />
            {/* Carousels */}
            <div className="w-full">
              <Slider />
            </div>
          </div>

          {/* Footer */}
          <div className="w-full p-1 bg-black border-2 border-solid border-black">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
