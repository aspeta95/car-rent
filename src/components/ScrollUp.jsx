import React from "react";
import Button from "./Button";
import { TbTriangleFilled } from "react-icons/tb";

const ScrollUp = () => {
  function handleScrollUp() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="relative" onClick={handleScrollUp}>
      <Button className="bg-orange-600 font-bold text-white border-2 border-orange-600 w-10 fixed bottom-10 right-10">
        <TbTriangleFilled />
      </Button>
    </div>
  );
};

export default ScrollUp;
