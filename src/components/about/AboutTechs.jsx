import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import AboutTechsSingle from "./AboutTechsSingle";

const AboutTechs = () => {
  const { techsData, techsHeading } = useContext(AboutMeContext);

  return (
    <div className="mt-10 sm:mt-20">
      <p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
        {techsHeading}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
        {techsData.map((tech) => (
          <AboutTechsSingle title={tech.title} image={tech.img} key={tech.id} />
        ))}
      </div>
    </div>
  );
};

export default AboutTechs;
