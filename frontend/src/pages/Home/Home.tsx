import React from "react";
import { Headers } from "../../components/ui/Headers/Headers";
import "./home.css";
import { InputButtonSection } from "../../components/home/InputButtonSection.css/InputButtonSection";
import { Profile } from "../../components/home/Profile/Profile";
import { Repositories } from "../../components/home/repositories/Repositories";

export const Home: React.FC = () => {


  return (
    <>
      <Headers />
      <InputButtonSection />
      <Profile />
      <Repositories />
    </>
  );
};
