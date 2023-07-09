import { useState, createContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleProjectData as singleProjectDataJson } from "../data/singleProjectData";
import { projectsData } from "../data/projects";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const { projectId } = useParams();
  const [singleProjectData, setSingleProjectData] = useState(
    singleProjectDataJson[projectId]
  );
  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
