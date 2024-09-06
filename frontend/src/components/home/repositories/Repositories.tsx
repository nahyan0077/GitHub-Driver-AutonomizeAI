import React from "react";
import "./Repositories.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";

export const Repositories: React.FC = () => {
    const navigate = useNavigate()
  const { githubData } = useSelector((state: RootState) => state.gitHubData);

  return (
    <>
      <div className="repo-section">
        {githubData.repositories &&
          githubData.repositories.map((data: any, index: any) => {
            return <div className="repo-box" key={index} onClick={()=>navigate(`/single-repos/${data.name}`)} >{data.name}</div>;
          })}
      </div>
    </>
  );
};
