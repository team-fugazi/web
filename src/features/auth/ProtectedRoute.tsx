import { withAuthenticationRequired } from "@auth0/auth0-react";

export const ProtectedRoute: React.FC<{ component: React.ComponentType }> = ({
  component,
  ...args
}) => {
  const Cp = withAuthenticationRequired(component, {
    returnTo: "/",
    onRedirecting: () => <div>Redirecting you to the login...</div>,
  });
  return <Cp {...args} />;
};
