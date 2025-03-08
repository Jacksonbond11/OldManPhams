import React from "react";

const Contact = () => {
  return (
    <div className="p-12">
      <h1
        className="text-3xl font-bold m-auto text-center mt-6 mb-6"
        id="contact"
      >
        Contact
      </h1>
      <div className="divider"></div>
      <div className="max-w-5xl m-auto flex justify-center">
        <div className="flex-col items-center">
          <h2 className="font-bold text-2xl mt-2">
            Get your lawn cared for today!
          </h2>
          <a href="tel:405-379-7998" className="">
            <button className="btn mt-4">405-379-7998</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
