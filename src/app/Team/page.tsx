import React from "react";
import { TeamPage } from "@/components/ComponentExporter";

const Team = () => {
  return (
    <div style={{
      backgroundImage: `url('/backgrounds/teamBG.png')`,
      backgroundAttachment:"fixed",
      backgroundRepeat: 'no-repeat',
    }}>
      <TeamPage/>
    </div>
  );
};
export default Team;
