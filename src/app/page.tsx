import React from "react";
import { Sidebar } from "@/ui/ComponentExporter";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <section className="w-full min-h-screen bg-red-700 flex flex-row items-start justify-start">
        <Sidebar />
        <div className="w-full h-screen overflow-y-auto bg-blue-400"></div>
      </section>
    </>
  );
};

export default Home;
