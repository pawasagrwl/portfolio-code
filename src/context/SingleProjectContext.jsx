import { useState, createContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const { projectId } = useParams();
  console.log(projectsData.find((project) => project.id === projectId).singleData)
  const [singleProjectData, setSingleProjectData] = useState(
    projectsData.find((project) => project.id === projectId).singleData,
  );

  useEffect(() => {
    const newProjectData = projectsData.find((project) => project.id === projectId).singleData;
    setSingleProjectData(newProjectData);
  }, [projectId]);

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
