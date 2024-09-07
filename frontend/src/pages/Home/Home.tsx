import React from "react";
import { Headers } from "../../components/ui/Headers/Headers";
import "./Home.css";
import { InputButtonSection } from "../../components/home/InputButtonSection.css/InputButtonSection";
import { Profile } from "../../components/home/Profile/Profile";
import { Repositories } from "../../components/home/repositories/Repositories";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Home: React.FC = () => {
  const {githubData} = useSelector((state: RootState) => state.gitHubData)
  return (
    <>
      <Headers />
      <InputButtonSection />
      {
        Object.keys(githubData.userDetails).length ? (
          <>
          
          <Profile />
          <Repositories />
          </>
        ): (
          <div className="empty-state">No data available, search you GitHub username here  </div>
        )
      }
    </>
  );
};
