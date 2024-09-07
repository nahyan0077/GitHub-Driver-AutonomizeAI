import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="header-notfound">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};
