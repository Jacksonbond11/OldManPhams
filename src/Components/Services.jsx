import React from "react";

const Services = () => {
  return (
    <div className="mt-2 bg-[#f6f6eb] text-[#4b5717] p-12">
      <h1 className="text-3xl font-bold m-auto text-center" id="services">
        Services
      </h1>
      <div className="border-b-2"></div>
      <div className="md:flex justify-content-between max-w-5xl m-auto mt-6 p-2 items-center text-center md:text-left">
        <div className="md:m-0 mt-2 text-lg">
          <ul className="md:list-disc font-bold">
            <li className="mt-4">Lawn Mowing</li>
            <li className="mt-4">Trimming</li>
            <li className="mt-4">Edging</li>
            <li className="mt-4">Leaf Blowing</li>
            <li className="mt-4">Flowerbed Maintenance & Design</li>
          </ul>
        </div>
        <img
          src="garden.jpg"
          alt="A garden"
          className="md:mr-4 rounded-md m-auto w-[300px] h-[200px] md:w-[600px] md:h-[400px]"
        />
      </div>
    </div>
  );
};

export default Services;
