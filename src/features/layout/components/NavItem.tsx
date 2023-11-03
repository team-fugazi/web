import React from "react";
import clsx from "clsx";
import { useLocation } from "react-router-dom";

interface props {
  href: string;
  children: React.ReactNode | React.ReactNode[];
  isDisabled?: boolean | null; // TODO: should be removed before launch
}

export const NavItem = ({ href, children, isDisabled = false }: props) => {
  const location = useLocation();
  const isCurrent = href === location.pathname;
  return (
    <li className={clsx()}>
      <a
        className={clsx(
          "font-medium text-gray-900 transition hover:text-gray-500/75 py-2 px-4 rounded",
          isDisabled && "pointer-events-none cursor-not-allowed select-none",
          isCurrent ? "bg-gray-100" : "bg-none"
        )}
        href={href}
      >
        {children}
      </a>
    </li>
  );
};
