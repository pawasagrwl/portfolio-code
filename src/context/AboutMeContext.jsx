import { useState, createContext } from "react";
import { aboutMeData } from "../data/aboutMeData";
import { techsHeading as techsPageHeading } from "../data/techsData";
import { techsData as techsDataJson } from "../data/techsData";

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState(aboutMeData);

  const techsHeading = techsPageHeading;

  const [techsData, setTechsData] = useState(techsDataJson);

  return (
    <AboutMeContext.Provider
      value={{
        aboutMe,
        setAboutMe,
        techsHeading,
        techsData,
        setTechsData,
      }}
    >
      {children}
    </AboutMeContext.Provider>
  );
};

export default AboutMeContext;
