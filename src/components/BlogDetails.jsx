import { useParams } from "react-router-dom";
import { blogData } from "../hooks/Data";

export default function BlogDetails() {
  const paramsId = useParams();
  const { id } = paramsId;
  const blog = blogData.find((blog) => blog.id === parseInt(id));
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20">
        <div>
          <img src={blog?.image} alt={blog?.title} className="w-full rounded" />

          <h2 className="text-3xl font-semibold text-white mb-4">
            {blog?.title}
          </h2>
          <p className="text-gray-600">{blog?.description}</p>
        </div>
        {/* sidebar */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Recent Posts
          </h3>
          <ul>
            {blogData.slice(0, 5).map((blog) => (
              <li key={blog.id} className="mb-2">
                {/* left image right title */}
                <div className="flex items-center bg-white p-5 rounded-lg hover:bg-gray-300">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-12 h-12 rounded"
                  />
                  <p className="ml-2 text-gray-600">{blog.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
