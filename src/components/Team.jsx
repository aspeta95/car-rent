import React from "react";
import team from "../assets/data/team.json";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section className="my-16">
      <div className="container mx-auto">
        <h1 className="text-black font-bold leading-[1.2] mb-2 text-5xl text-center">
          Our Team
        </h1>
        <div className="grid grid-cols-3 gap-x-16 gap-y-10 text-center mt-10">
          {team.map((member, idx) => (
            <TeamCard key={idx} details={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
