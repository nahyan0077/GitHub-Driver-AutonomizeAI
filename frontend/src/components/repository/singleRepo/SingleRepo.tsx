import axios from "axios";
import React, { useEffect, useState } from "react";
import { endpoints } from "../../../config/apiEndpoints";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useParams } from "react-router-dom";
import "./SingleRepo.css";

export const SingleRepo: React.FC = () => {
  const params = useParams();
  const { githubData } = useSelector((state: RootState) => state.gitHubData);
  const [repoData, setRepo] = useState({
    name: "",
    size: 0,
    subscribers_count: 0,
    description: "",
    language: "",
    forks_count: 0,
  });

  useEffect(() => {
    async function fetchRepo() {
      try {
        const response = await axios.get(
          `${endpoints.gitSingleRepo}${githubData.userDetails.login}/${params.repoName}`
        );
        setRepo({
          name: response.data.name,
          size: response.data.size,
          subscribers_count: response.data.subscribers_count,
          description: response.data.description || "No description provided.",
          language: response.data.language,
          forks_count: response.data.forks_count,
        });
      } catch (error) {
        console.error("Error fetching repository data:", error);
      }
    }
    fetchRepo();
  }, [githubData.userDetails.login, params.repoName]);

  return (
    <div className="repo">
      <div className="repo-header">
        <h2>Repository: {repoData.name}</h2>
      </div>
      <div className="repo-section">
        <p>Description: {repoData.description}</p>
        <p>Language: {repoData.language}</p>
        <p>Size: {repoData.size} KB</p>
        <p>Subscribers: {repoData.subscribers_count}</p>
        <p>Forks: {repoData.forks_count}</p>
      </div>
    </div>
  );
};

export default SingleRepo;
