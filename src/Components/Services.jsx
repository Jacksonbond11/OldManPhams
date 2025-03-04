import React from "react";

const Services = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold m-auto text-center">Services</h1>
      <div className="divider"></div>
      <div className="md:flex justify-around gap-6 text-center max-w-5xl m-auto">
        <div className="m-auto">
          <h2 className="font-bold text-2xl">Mowing</h2>
          <img
            src="mowing.jpg"
            alt="Image"
            width="300px"
            height="200px"
            className="rounded-md m-auto"
          />
        </div>
        <div className="">
          <h2 className="font-bold text-2xl">Hedges</h2>
          <img
            src="hedges.jpg"
            alt="Image"
            width="300px"
            height="200px"
            className="rounded-md m-auto"
          />
        </div>
        <div className="">
          <h2 className="font-bold text-2xl">Garden</h2>
          <img
            src="garden.jpg"
            alt="Image"
            width="300px"
            height="200px"
            className="rounded-md m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
