import React from "react";

// Local Components
import { Navbar } from "./components/Navbar";

// types
interface Props {
	children: React.ReactNode | React.ReactNode[];
}

export const Layout = ({ children }: Props) => {
	return (
		<div>
			<Navbar />

			<section className="flex-1 container mx-auto px-4">{children}</section>
		</div>
	);
};
