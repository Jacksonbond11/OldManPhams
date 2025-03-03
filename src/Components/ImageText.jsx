import React from "react";

const ImageText = () => {
  return (
    <div className="mt-2">
      <h1 className="text-3xl font-bold m-auto text-center">Meet the Owner</h1>
      <div className="divider"></div>
      <div className="md:flex justify-content-between max-w-5xl m-auto mt-6 p-2">
        <img
          src="taiHeadshot.png"
          alt="Image"
          width="300px"
          height="200px"
          className="md:mr-4 rounded-md m-auto"
        />
        <div className="md:m-0 mt-2">
          <p className="text-xl">
            Tai Pham is more than just a passionate advocate for lawn care -
            he's a true enthusiast with a lifelong love affair with the humble
            blades of grass. As a self-proclaimed "grass whisperer," Tai has
            spent years studying the art of cultivating the perfect lawn, from
            the ideal mowing height to the most effective fertilization
            strategies.
          </p>
          <p>
            When he's not busy tending to his own garden, Tai can be found
            sharing his expertise with fellow lawn care enthusiasts, offering
            tips and tricks on how to achieve that sought-after lush green look.
            His motto? "A well-manicured lawn is not just a reflection of one's
            property - it's a reflection of one's soul."
          </p>
          <p>
            So sit back, relax, and get ready to be charmed by Tai Pham's
            infectious passion for all things grass!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
