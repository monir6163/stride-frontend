import { useState } from "react";
import useDogs from "../../hooks/useDogs";

const AddDog = () => {
  const { createDogs, loader } = useDogs();
  const [avatar, setAvatar] = useState(null); // [1]
  const [avatarPreview, setAvatarPreview] = useState("");
  const initialFormState = {
    name: "",
    price: "",
    stock: "",
    description: "",
    avatar: "",
  };
  const [data, setData] = useState(initialFormState);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
      }
    };
    setAvatar(file);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isConfirmed = window.confirm(
      "Are you sure you want to submit the form?"
    );
    if (isConfirmed) {
      const formData = new FormData();
      formData.append("name", data?.name);
      formData.append("price", data?.price);
      formData.append("stock", data?.stock);
      formData.append("description", data?.description);
      formData.append("image", avatar);

      await createDogs(formData);
      setData(initialFormState);
      setAvatarPreview("");
      setAvatar(null);
      e.target.reset();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Dogs</h2>

      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="stock"
            className="block text-sm font-medium text-gray-700"
          >
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            required
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            onChange={handleFileChange}
          />
        </div>
        <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer md:w-1/5 lg:w-1/4">
          <img
            width={56}
            height={56}
            className="w-14 h-14 rounded-full"
            src={avatarPreview}
            alt="image"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {loader ? "loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDog;
