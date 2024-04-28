import React from "react";
import Infobox from "../info";

const Masthead = () => {
  return (
    <div >
      {/* Mobile View */}
      <div className="min-h-screen flex xl:hidden items-center justify-center flex-col relative pt-16">
        <h1
            className={`uppercase text-white sm:text-6xl text-5xl leading-none tracking-wide mt-8`}
            style={{
              WebkitTextStrokeWidth: 1,
              WebkitTextFillColor:'white',
              WebkitTextStrokeColor: "#000",
              textShadow: "0 1px 0 #ccc, \
              0 2px 0 #c9c9c9, \
              0 3px 0 #bbb, \
              0 4px 0 #b9b9b9, \
              0 5px 0 #aaa, \
              0 6px 1px rgba(0,0,0,.1), \
              0 1px 3px rgba(0,0,0,.3), \
              0 3px 5px rgba(0,0,0,.2), \
              0 5px 10px rgba(0,0,0,.25), \
              0 10px 10px rgba(0,0,0,.2), \
              0 20px 20px rgba(0,0,0,.15), \
              0 30px 20px rgba(0,0,0,.1)" 
            }}
          >
            Jugaad
          </h1>
        <div className="px-1 ">
          <Infobox/>
        </div>
        
      </div>

      {/* Desktop View */}
      <div className="w-full min-h-screen hidden xl:flex flex-col items-center justify-center pt-16 relative">
        <div className="relative flex items-center flex-col justify-center px-4 py-7">
          <div className="">
            <h1
              className={`uppercase w-full text-white text-6xl leading-none tracking-wide underline pt-8`}
              style={{
                WebkitTextStrokeWidth: 1,
                WebkitTextFillColor:'white',
                WebkitTextStrokeColor: "#000",
                textShadow: "0 1px 0 #ccc, \
                0 2px 0 #c9c9c9, \
                0 3px 0 #bbb, \
                0 4px 0 #b9b9b9, \
                0 5px 0 #aaa, \
                0 6px 1px rgba(0,0,0,.1), \
                0 1px 3px rgba(0,0,0,.3), \
                0 3px 5px rgba(0,0,0,.2), \
                0 5px 10px rgba(0,0,0,.25), \
                0 10px 10px rgba(0,0,0,.2), \
                0 20px 20px rgba(0,0,0,.15), \
                0 30px 20px rgba(0,0,0,.1)" 
              }}
            >
            What is Jugaad
            </h1>
          </div>
        </div>
        <div className="relative flex flex-col lg:flex-row items-center justify-center">
          <Infobox/>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
