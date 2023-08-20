import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";

const AboutCounter = () => {
  useCountUp({ ref: "experienceCounter", end: 1, duration: 2 });
  useCountUp({ ref: "leetcodeCounter", end: 110, duration: 2 });
  useCountUp({ ref: "projectsCounter", end: 5, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title="Years of Experience"
          counter={<span id="experienceCounter" />}
          measurement=""
          link = "https://www.linkedin.com/in/pawasagrwl/"
        />

        <CounterItem
          title="Questions solved on LeetCode"
          counter={<span id="leetcodeCounter" />}
          measurement=""
          link = "https://leetcode.com/pawasagrwl/"
        />

        <CounterItem
          title="Projects Completed"
          counter={<span id="projectsCounter" />}
          measurement=""
          link = "https://pawasagrwl.github.io/#/projects"
        />
      </div>
    </div>
  );
};

export default AboutCounter;
