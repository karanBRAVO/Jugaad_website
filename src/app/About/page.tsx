import React from "react";
import { AboutPage } from "@/components/ComponentExporter";

const About = () => {
  return (
    <div style={{
      backgroundImage: `url('/backgrounds/about1.jpg')`,
      backgroundAttachment:"fixed", 
      backgroundRepeat: 'no-repeat',
      backgroundSize:"contain",
    }}>
      <AboutPage />
    </div>
  );
};
export default About;
