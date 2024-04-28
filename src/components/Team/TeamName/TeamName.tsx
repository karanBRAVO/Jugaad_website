import React from "react";
import { f_inika_700, f_inter_700 } from "@/styles/fonts";
import { TechTeam, NonTechTeam } from "./TeamsInfo";

type Props = {};

const TeamName = (props: Props) => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-60 py-28 px-3 sm:px-0 bg-[#ffffff23]">
        <div
          className="relative lg:rounded-tr-[100px] lg:rounded-bl-[100px] w-full sm:w-fit lg:mr-10 bg-[#092151] px-2 lg:px-24 py-10 flex flex-col lg:items-start items-center justify-center gap-1"
          style={{
            boxShadow: "-10px 10px 5px #353535",
          }}
        >
          <div className="px-16 py-3 lg:rounded-l-full lg:absolute lg:top-[190px] lg:-right-[170px] bg-[#D9D9D9] border-[2px] border-solid border-black mb-10 lg:mb-0 w-full">
            <h2
              className={`font-bold ${f_inter_700.className} text-xl text-black uppercase text-nowrap text-center`}
            >
              Tech Team
            </h2>
          </div>
          {TechTeam.map((team, idx) => (
            <span
              key={idx}
              className={`text-white uppercase ${f_inika_700.className} font-bold text-base`}
            >
              {team.name}
            </span>
          ))}
        </div>
        <div
          className="relative lg:rounded-tr-[100px] lg:rounded-bl-[100px] w-full sm:w-fit lg:mr-10 bg-[#092151] px-2 lg:px-24 py-10 flex flex-col lg:items-start items-center justify-center gap-1"
          style={{
            boxShadow: "10px 10px 5px #353535",
          }}
        >
          <div className="px-16 py-3 lg:rounded-r-full lg:absolute lg:top-[300px] lg:-left-[210px] bg-[#D9D9D9] border-[2px] border-solid border-black mb-10 lg:mb-0 w-full">
            <h2
              className={`font-bold ${f_inter_700.className} text-xl text-black uppercase text-nowrap text-center`}
            >
              Non Tech Team
            </h2>
          </div>
          {NonTechTeam.map((team, idx) => (
            <span
              key={idx}
              className={`text-white uppercase ${f_inika_700.className} font-bold text-base`}
            >
              {team.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamName;
