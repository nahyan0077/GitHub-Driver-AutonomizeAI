import React, {  useState } from "react";
import "./Repositories.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { endpoints } from "../../../config/apiEndpoints";
import axios from "axios";

export const Repositories: React.FC = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [follwerRepo, setFollowerRepo] = useState([])

    if (params.userName) {
      const fetchFollwerRepos = async () => {
        const repos = await axios.get(`${endpoints.gitHubData}${params.userName}/repos`)
        console.log(repos);
        setFollowerRepo(repos.data)
        return
      }
      fetchFollwerRepos()
    }
  const { githubData } = useSelector((state: RootState) => state.gitHubData);

  return (
    <>{
      params.userName ? 

      <div className="repo-section">
        {follwerRepo &&
          follwerRepo.map((data: any, index: any) => {
            return <div className="repo-box" key={index} onClick={()=>navigate(`/single-repos/${data.name}`)} >{data.name}</div>;
          })}
      </div>
      :

      <div className="repo-section">
        {githubData.repositories &&
          githubData.repositories.map((data: any, index: any) => {
            return <div className="repo-box" key={index} onClick={()=>navigate(`/single-repos/${data.name}`)} >{data.name}</div>;
          })}
      </div>
    }
    </>
  );
};
