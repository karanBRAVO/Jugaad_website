import React from "react";
import { TeamMast, TeamNamePage } from "../ComponentExporter";

type Props = {};

const Team = (props: Props) => {
  return (
    <>
      <TeamMast />
      <TeamNamePage />
    </>
  );
};

export default Team;
