import React from "react";

// Components
import { Pillar } from "./components/Pillar";

const Podium: React.FC = () => {
  // Move data and heightMap outside the component
  const results = [
    { name: "Yakup", score: 974, avatarColor: "bg-indigo-500" },
    { name: "Anders", score: 1308, avatarColor: "bg-indigo-600" },
    { name: "Frederik", score: 892, avatarColor: "bg-indigo-400" },
  ];

  return (
    <div className="text-center pt-16 px-8 rounded-lg bg-indigo-100">
      <h2 className="text-3xl font-bold mb-12 text-indigo-600">
        Community Heroes 🥳
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <Pillar player={results[0]} index={2} height={"16rem"} />
        <Pillar player={results[1]} index={1} height={"20rem"} />
        <Pillar player={results[2]} index={3} height={"12rem"} />
      </div>
    </div>
  );
};

export default Podium;
