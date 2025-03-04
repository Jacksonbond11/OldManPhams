import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold m-auto text-center mt-6 mb-6">
        Contact
      </h1>
      <div className="divider"></div>
      <div className="max-w-5xl m-auto">
        <h2 className="font-bold text-2xl">Call us</h2>
        <a href="tel:918-555-5555">
          <button className="btn">918-555-5555</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
