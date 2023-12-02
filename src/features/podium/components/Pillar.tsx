import React from "react";

// types
import { PillarProps as Props } from "@/features/podium/interfaces/types";

export const Pillar: React.FC<Props> = ({ player, index, height }) => {
  const plural = index === 1 ? "st" : index === 2 ? "nd" : "rd";
  return (
    <div
      key={player.name} // Use a unique identifier if possible
      className={`relative p-4 pt-6 rounded-t-md overflow-hidden ${player.avatarColor} text-center`}
      style={{ height: height }}
    >
      <div className="relative z-10">
        <div className="mb-4">
          {/* You can replace the content below with an actual avatar image */}
          <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center mx-auto">
            <p className="text-xl font-bold text-indigo-900">
              {index} <span className="text-sm -ml-1">{plural}</span>
            </p>
          </div>
        </div>
        <h3 className="text-lg font-bold text-white">{player.name}</h3>
        <p className="text-md font-semibold text-white">{player.score}</p>
      </div>
    </div>
  );
};
