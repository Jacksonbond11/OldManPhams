import React from "react";

const ImageText = () => {
  return (
    <section className="py-20 bg-[#f6f6eb]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#4b5717] mb-4">
          Meet the Owner
        </h2>
        <div className="w-24 h-1 bg-[#afae81] mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="taiHeadshot.png"
              alt="Tai - Owner of Old Man Pham's Lawn Care"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </div>
          <div className="text-lg text-[#4b5717] space-y-4">
            <p>
              Hi, I'm Tai, the owner of Old Man Pham's Lawn Care! My passion for
              plants started when I was just three years old, thanks to my
              grandparents, who were accomplished horticulturists. Their love for
              cultivation and landscaping rubbed off on me, and I've been caring
              for lawns and gardens ever since.
            </p>
            <p>
              I thrive in the outdoors—even in Oklahoma's extreme heat—and take
              pride in keeping yards looking their best. Let me bring the same
              care and attention to your lawn that I do to my own!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageText;
