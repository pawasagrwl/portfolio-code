import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import { Box } from "@mui/material";
import Terminal from "./Terminal";
import profileImage from "../../images/profileImage.jpeg";
import purdueIcon from "../../images/purdueIcon.png";
import mernImage from "../../images/mernImage.png";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <>
    
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src={profileImage} className="rounded-lg w-96 mb-4" alt="" />
        <img src={purdueIcon} className="rounded-lg w-96 mb-4" alt="" />
        <img src={mernImage} className="rounded-lg w-96" alt="" />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {aboutMe.map((bio) => (
          <>
          <Terminal key={bio.id} bio={bio} />
          </>
        ))}
      </div>
    </div>
    </>
  );
};

export default AboutMeBio;
