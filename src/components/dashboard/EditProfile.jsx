/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const Profile = ({ data }) => {
  const { updateProfileData, loader } = useAuth();
  const [avatar, setAvatar] = useState(null); // [1]
  const [avatarPreview, setAvatarPreview] = useState("");
  const [userData, setUserData] = useState({
    name: data?.name,
    email: data?.email,
    phone: data?.phone,
  });
  useEffect(() => {
    setUserData({
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
    });
    setAvatarPreview(data?.avater?.url);
  }, [data]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
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
    if (!avatar) {
      return toast.error("Please select an image");
    }
    const formData = new FormData();
    formData.append("name", userData?.name);
    formData.append("phone", userData?.phone);
    formData.append("email", userData?.email);
    formData.append("avatar", avatar);

    await updateProfileData(formData, data?._id, avatar);
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Update profile</h2>

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
            placeholder="Enter your Name"
            onChange={handleChange}
            value={userData?.name}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            placeholder="Enter your Phone number"
            onChange={handleChange}
            value={userData?.phone}
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="name"
            name="name"
            disabled
            readOnly
            className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={userData?.email}
          />
        </div>
        <div>
          <label
            htmlFor="avatar"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            className="form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-6"
            type="file"
            id="formFile"
            name="avatar"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer md:w-1/5 lg:w-1/4">
          <img
            width={56}
            height={56}
            className="w-14 h-14 rounded-full"
            src={avatarPreview || data?.url}
            alt="logo"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={loader}
          >
            {loader ? "Loading..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
