import React from "react";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";

const DashboardPage = () => {
  useRedirectLoggedOutUser("/login")
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
};

export default DashboardPage;
