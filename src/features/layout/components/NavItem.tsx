import React from 'react'

interface props {
    href: string;
    children: React.ReactNode | React.ReactNode[];
    isDisabled?: boolean | null; // TODO: should be removed before launch
  }
  
export const NavItem = ({ href, children, isDisabled = false }: props) => {
    return (
      <li>
        <a
          className={
            isDisabled
              ? "text-gray-500 transition hover:text-gray-500/75 pointer-events-none cursor-not-allowed select-none"
              : "text-gray-500 transition hover:text-gray-500/75"
          }
          href={href}
        >
          {children}
        </a>
      </li>
    );
  };