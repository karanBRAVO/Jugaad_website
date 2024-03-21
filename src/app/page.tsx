import React from "react";
import { Sidebar } from "@/ui/ComponentExporter";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <section className="w-full min-h-screen bg-black flex flex-row items-start justify-start">
        <div className="h-screen flex items-center justify-center bg-white shadow-md">
          <Sidebar />
        </div>
        <div className="w-full h-screen overflow-y-auto bg-black text-white"></div>
      </section>
    </>
  );
};

export default Home;
