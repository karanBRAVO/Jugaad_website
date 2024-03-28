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
      <section className="w-full min-h-screen bg-black flex flex-row items-start justify-start">
        <div className="h-screen flex items-center justify-center bg-white shadow-md">
          <Sidebar />
        </div>
        <div className="w-full h-screen overflow-y-auto bg-black text-white">
          {/* Header */}
          <div
            className="w-full bg-black h-screen"
            style={{
              background: "url('/bgImg.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Navbar />
            <MastHead />
          </div>

          {/* Main */}
          <div
            className="w-full min-h-screen bg-zinc-900"
            style={{
              background: "url('/bgImg.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
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
