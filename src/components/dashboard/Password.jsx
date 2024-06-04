/* eslint-disable react/prop-types */
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const ChangePass = ({ data }) => {
  const { changePassword, loader } = useAuth();
  const [pass, setPass] = useState({
    newPassword: "",
  });

  const handleChange = (e) => {
    setPass({ ...pass, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await changePassword(data?._id, pass.newPassword);
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Update profile</h2>

      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700"
          >
            new Password
          </label>
          <input
            type="text"
            id="newPassword"
            name="newPassword"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            placeholder="Enter your new Password"
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={loader}
          >
            {loader ? "Loading..." : "Change Password"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePass;
