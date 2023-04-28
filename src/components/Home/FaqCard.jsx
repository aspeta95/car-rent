import React, { useState } from "react";
import { TbTriangleInverted } from "react-icons/tb";
import clsx from "clsx";

const FaqCard = ({ details }) => {
  const { id, question, answer } = details;
  const [visible, setVisible] = useState(true);
  const visibleClass = clsx({
    "max-h-0": visible,
    "max-h-96": !visible,
  });
  const questionClass = clsx({
    "bg-orange-600": !visible,
    "text-white": !visible,
  });

  function handleShowFaq() {
    setVisible((prevState) => !prevState);
  }

  return (
    <>
      <div
        className={`flex flex-col py-1 px-8 border border-gray-100 transition-all duration-500 ease-out ${questionClass}`}
      >
        <div
          className={`flex flex-row justify-between px-8 py-4 rounded-lg cursor-pointer `}
          onClick={handleShowFaq}
        >
          <h3 className="font-bold leading-[1.2] text-lg">{question}</h3>
          <i>
            <TbTriangleInverted size={24} />
          </i>
        </div>
      </div>
      <div>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${visibleClass}`}
        >
          <p className="p-8">{answer}</p>
        </div>
      </div>
    </>
  );
};

export default FaqCard;
