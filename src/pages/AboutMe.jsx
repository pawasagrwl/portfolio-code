import AboutMeBio from "../components/about/AboutMeBio";
import AboutCounter from "../components/about/AboutCounter";
import AboutTechs from "../components/about/AboutTechs";
import { AboutMeProvider } from "../context/AboutMeContext";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import Terminal from "../components/about/Terminal";

const About = () => {
  return (
    <>
      <AboutMeProvider>
        {/* <Terminal text="About Me" /> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          exit={{ opacity: 0 }}
          className="container mx-auto"
        >
          <AboutMeBio />
        </motion.div>

        {/** Counter without paddings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          exit={{ opacity: 0 }}
        >
          <AboutCounter />
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          exit={{ opacity: 0 }}
          className="container mx-auto"
        >
          <AboutTechs />
        </motion.div> */}
      </AboutMeProvider>
    </>
  );
};

export default About;
