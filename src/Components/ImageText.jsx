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
        <div className="md:m-0 mt-2 text-lg">
          <p>
            Hi, I’m Tai, the owner of Old Man Pham’s Lawn Care! My passion for
            plants started when I was just three years old, thanks to my
            grandparents, who were accomplished horticulturists. Their love for
            cultivation and landscaping rubbed off on me, and I’ve been caring
            for lawns and gardens ever since.
          </p>
          <p className="mt-2">
            I thrive in the outdoors—even in Oklahoma’s extreme heat—and take
            pride in keeping yards looking their best. Let me bring the same
            care and attention to your lawn that I do to my own!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
