import { Link } from "react-router-dom";
import blogPosts from "../data/blog-posts.json";

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#f6f6eb] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#4b5717] mb-4">Blog</h1>
        <div className="w-24 h-1 bg-[#afae81] mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 block"
            >
              <div className="h-48 bg-[#4b5717] flex items-center justify-center">
                <span className="text-6xl text-white/30">🌱</span>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#afae81] font-medium mb-2">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-xl font-bold text-[#4b5717] mb-3">
                  {post.title}
                </h2>
                <p className="text-[#4b5717]/80">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
