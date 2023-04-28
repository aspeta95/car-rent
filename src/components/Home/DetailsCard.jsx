import React from "react";

const DetailsCard = ({ title, icon: Icon, children }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Icon
        size={60}
        color="red"
        className="rounded-tl-[70%] rounded-br-[65%] rounded-tr-[55%] rounded-bl-[55%] bg-gradient-to-b from-red-200 via-red-100 to-red-200 w-24 h-16 flex items-center justify-center mb-4"
      />
      <h3 className="text-black font-bold leading-[1.2] mb-9 text-3xl">
        {title}
      </h3>
      <p className="px-16">{children}</p>
    </div>
  );
};

export default DetailsCard;
