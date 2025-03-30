import React from "react";
// import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="mt-2 bg-[#f6f6eb] text-[#4b5717] p-12">
      <h1 className="text-3xl font-bold m-auto text-center" id="blog">
        Blog
      </h1>
      <div className="border-b-2"></div>
      <div className="md:flex justify-content-between max-w-5xl m-auto mt-6 p-2 items-center text-center md:text-left">
        <div className="md:m-0 mt-2 text-lg">
          <p className="mt-4">
            Welcome to our blog! Here you'll find updates, insights, and stories
            related to our services and community.
          </p>
          <p className="mt-4">
            Check back regularly for new posts or explore our latest articles
            below.
          </p>
        </div>
        <img
          src="mowing.jpg"
          alt="Blog overview"
          className="md:mr-4 rounded-md m-auto w-[300px] h-[200px] md:w-[600px] md:h-[400px]"
        />
      </div>
    </div>
  );
};

export default Blog;
