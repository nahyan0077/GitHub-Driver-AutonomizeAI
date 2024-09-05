import React, { useState } from "react";
import { Headers } from "../components/ui/Headers";
import "../css/home.css";
import { InputButtonSection } from "../components/home/InputButtonSection";

export const Home: React.FC = () => {


  return (
    <>
      <Headers />
      <InputButtonSection />
    </>
  );
};
