import { useContext } from "react";
import { FiClock, FiTag, FiGithub, FiPlayCircle } from "react-icons/fi";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectSingleHeader = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  return (
    <div>
      <div className="flex justify-between items-center">
        <a
          href={singleProjectData.ProjectHeader.url}
          target="__blank"
          className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
            {singleProjectData.ProjectHeader.title}
          </p>
        </a>
        <div className="mt-14 sm:mt-20 mb-7">
          
          <a
            href={singleProjectData.ProjectHeader.url}
            target="__blank"
            className="flex items-center bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
          >
            <FiPlayCircle className="mr-2" />
            Live Demo
          </a>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex">
          <div className="flex items-center ml-1 mr-10">
            <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {singleProjectData.ProjectHeader.publishDate}
            </span>
          </div>
          <div className="flex items-center">
            <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {singleProjectData.ProjectHeader.tags}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <FiGithub className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            <a href={singleProjectData.ProjectHeader.source} target="__blank">
              View Source Code
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingleHeader;
