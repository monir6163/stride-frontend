/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const DogsContext = createContext(null);

const DogsProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const token = localStorage.getItem("token");

  const createDogs = async (data) => {
    setLoader(true);
    try {
      const res = await axios.post(
        "https://stride-backend-kappa.vercel.app/api/v1/dog/create",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      if (res?.data.status === true) {
        toast.success("Dogs created success");
        setLoader(false);
      }
    } catch (error) {
      toast.error(error);
      setLoader(false);
    }
  };

  const updateDogs = async (data, id) => {
    setLoader(true);
    try {
      const res = await axios.patch(
        `https://stride-backend-kappa.vercel.app/api/v1/dog/update?id=${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res?.data.status === true) {
        toast.success("Dogs updated success");
        setLoader(false);
      }
    } catch (error) {
      toast.error(error);
      setLoader(false);
    }
  };

  const deleteDogs = async (id, handleFilter) => {
    try {
      const res = await axios.delete(
        `https://stride-backend-kappa.vercel.app/api/v1/dog/delete?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res?.data.status === true) {
        toast.success("Dogs deleted success");
        handleFilter(id);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const dogsData = { createDogs, updateDogs, deleteDogs, loader };
  return (
    <DogsContext.Provider value={dogsData}>{children}</DogsContext.Provider>
  );
};

export default DogsProvider;
