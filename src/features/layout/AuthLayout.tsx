import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const AuthLayout = () => {
  return <div>AuthLayout</div>;
};

const AuthLayoutComponent = withAuthenticationRequired(AuthLayout);
export default AuthLayoutComponent;
