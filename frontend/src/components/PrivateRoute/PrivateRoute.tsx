import { Navigate } from "react-router-dom";
import React from "react";

const PrivateRoute = ({role, children}: {role: string | undefined, children: React.ReactElement}) => {
  return (
    role === "authenticated"
      ? <>{children}</>
      : <Navigate to="/login"/>
  );
};

export default PrivateRoute;
