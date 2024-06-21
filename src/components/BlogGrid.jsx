import { blogData } from "../hooks/Data";
import BlogCard from "./BlogCard";

export default function BlogGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center text-white mb-4">
        Latest Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
