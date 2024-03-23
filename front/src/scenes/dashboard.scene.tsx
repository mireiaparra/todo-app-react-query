import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/core/routing";

export const DashboardScene: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Link to={ROUTES.TODOS}>TODO's list</Link>
      </div>
    </div>
  );
};
