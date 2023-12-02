import React from "react";

// Components
import { Pillar } from "./components/Pillar";

// types
import { Datum as User } from "@/features/table/interfaces/data";

interface Props {
  users: User[];
}

const Podium: React.FC<Props> = ({ users }) => {
  // Move data and heightMap outside the component

  // FIXME: this is a hacky way to map the data to the height of the pillars
  const scoreMapper = (user: User) => {
    return (user.reports || 0) * 5 + (user.comments || 0);
  }
  const results = [
    { name: users[1]._id.slice(-5,-1), score: scoreMapper(users[1]), avatarColor: "bg-indigo-500" },
    { name: users[0]._id.slice(-5,-1), score: scoreMapper(users[0]), avatarColor: "bg-indigo-600" },
    { name: users[2]._id.slice(-5,-1), score: scoreMapper(users[2]), avatarColor: "bg-indigo-400" },
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
