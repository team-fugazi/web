import React from "react";

// components
import { withAuthenticationRequired } from "@auth0/auth0-react";

const AuthLayout: React.FC = () => {
  return <div>AuthLayout</div>;
};

const AuthLayoutComponent = withAuthenticationRequired(AuthLayout);
export default AuthLayoutComponent;
