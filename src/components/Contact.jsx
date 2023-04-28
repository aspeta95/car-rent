import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Textarea from "./Textarea";
import clsx from "clsx";
import { ImCross } from "react-icons/im";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [showError, setShowError] = useState(false);

  const errorClass = clsx({
    hidden: !showError,
  });

  const isFormValid = () => {
    return name !== "" && email !== "" && question !== "";
  };

  function toggleError() {
    showError ? setShowError(!showError) : "";
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!isFormValid()) {
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  }

  return (
    <section className="mt-12">
      <div className="container mx-auto">
        <h1 className="text-black font-bold leading-[1.2] mb-10 text-5xl text-center">
          Contact
        </h1>
        <div className="flex flex-col justify-center items-center container mx-auto border-2 border-orange-100 px-28 py-6 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100 p-8 rounded-lg w-[40%]">
          <div
            className={`flex flex-row justify-between items-center px-8 py-2 mb-4 rounded-xl bg-gradient-to-r from-red-200 via-red-100 to-red-200 w-full ${errorClass}`}
          >
            <h4 className="text-red-600 font-bold leading-[1.2] text-xl">
              Fill all the fields
            </h4>
            <ImCross
              size={20}
              color="red"
              onClick={toggleError}
              style={{ cursor: "pointer" }}
            />
          </div>
          <form className="flex flex-col w-full">
            <Input
              label="Name :"
              type="text"
              value={name}
              onChange={setName}
            ></Input>
            <Input
              label="Email :"
              type="text"
              value={email}
              onChange={setEmail}
            ></Input>
            <Textarea
              label="Your question :"
              value={question}
              onChange={setQuestion}
            ></Textarea>
            <div className="flex pt-8">
              <Button
                className="bg-orange-600 font-bold text-white border-2 border-orange-600 w-full "
                onClick={handleFormSubmit}
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
