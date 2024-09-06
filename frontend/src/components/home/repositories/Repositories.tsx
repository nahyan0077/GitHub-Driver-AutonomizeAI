import React from "react";
import "./Repositories.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export const Repositories: React.FC = () => {
  const { githubData } = useSelector((state: RootState) => state.gitHubData);

  return (
    <>
      <div className="repo-section">
        {githubData.repositories &&
          githubData.repositories.map((data: any) => {
            return <div className="repo-box">{data.name}</div>;
          })}
      </div>
    </>
  );
};
