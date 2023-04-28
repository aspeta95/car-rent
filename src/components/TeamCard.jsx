import React from "react";

const TeamCard = ({ details }) => {
  return (
    <div className="shadow-md flex flex-col rounded-xl">
      <div className="h-96 overflow-hidden flex items-center rounded-t-xl">
        <img src={`../src/assets/img/${details.img}`} />
      </div>
      <div className="mt-8">
        <h3 className="text-black font-semibold leading-[1.2] mb-2 text-3xl">
          {details.name}
        </h3>
      </div>
      <div className="mt-2 mb-8">
        <h5 className="text-gray-600 font-medium leading-[1.2] mb-2 text-xl">
          {details.role}
        </h5>
      </div>
    </div>
  );
};

export default TeamCard;
