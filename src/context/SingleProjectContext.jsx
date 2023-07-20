import { useState, createContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleProjectData as singleProjectDataJson } from "../data/singleProjectData";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const { projectId } = useParams();
  const [singleProjectData, setSingleProjectData] = useState(
    singleProjectDataJson[projectId],
  );

  useEffect(() => {
    const newProjectData = singleProjectDataJson[projectId];
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
