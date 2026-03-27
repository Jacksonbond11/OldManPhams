import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blog-posts.json";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f6f6eb] pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#4b5717] mb-4">Article Not Found</h2>
          <Link to="/blog" className="text-[#afae81] hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f6eb] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          to="/blog"
          className="inline-flex items-center text-[#afae81] hover:text-[#4b5717] mb-8 transition-colors"
        >
          ← Back to Blog
        </Link>
        
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <p className="text-sm text-[#afae81] font-medium mb-4">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#4b5717] mb-6">
            {post.title}
          </h1>
          <div className="rounded-xl overflow-hidden mb-8">
            <img 
              src="/backyard.jpg" 
              alt={post.title}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="prose prose-lg text-[#4b5717]/80 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;