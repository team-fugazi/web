import React from "react";

type Member = {
  name: string;
  score: number;
  avatarColor: string;
};

const Podium = () => {

  // Move data and heightMap outside the component
  const results = [
    { name: "Yakup", score: 974, avatarColor: "bg-indigo-500" },
    { name: "Anders", score: 1308, avatarColor: "bg-indigo-600" },
    { name: "Frederik", score: 892, avatarColor: "bg-indigo-400" },
  ];

  return (
    <div className="text-center pt-16 px-8 rounded-lg bg-gradient-to-tl from-gray-700 via-gray-900 to-black">
      <h2 className="text-3xl font-bold mb-12 text-white">
        Community Heroes 🥳
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <PodiumElement player={results[0]} index={"2nd"} height={"16rem"} />
        <PodiumElement player={results[1]} index={"1st"} height={"20rem"} />
        <PodiumElement player={results[2]} index={"3rd"} height={"12rem"} />
      </div>
    </div>
  );
};

export default Podium;

interface PodiumProps {
  player: Member;
  index: string;
  height: string;
}

const PodiumElement: React.FC<PodiumProps> = ({ player, index, height }) => {
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
            <span className="text-xl font-bold">{index}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-white">{player.name}</h3>
        <p className="text-md font-semibold text-white">{player.score}</p>
      </div>
    </div>
  );
};
