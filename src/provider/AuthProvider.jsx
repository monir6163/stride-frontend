/* eslint-disable react/prop-types */
import axios from "axios";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { baseUrl } from "../config/config";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const createUser = async (email, password) => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password).then(
        (data) => {
          if (data?.user?.email) {
            const userInfo = {
              email: data?.user?.email,
              password: password,
            };
            fetch(`${baseUrl}/auth/register`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                localStorage.setItem("token", data?.token);
                toast.success(data?.message);
              });
          }
        }
      );
    } catch (error) {
      setLoading(false);
      toast.error(
        error?.customData?._tokenResponse?.error?.message ||
          "Registration faield"
      );
    }
  };

  const updateProfileData = async (data, id) => {
    try {
      setLoader(true);
      const res = await axios.patch(
        `${baseUrl}/user/userUpdate?id=${id}`,
        data
      );
      setLoader(false);
      toast.success(res?.data?.message);
    } catch (error) {
      setLoader(false);
      toast.error("update faield");
    }
  };

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login success");
    } catch (error) {
      toast.error(error?.code || "Login faield");
      setLoading(false);
    }
  };

  const changePassword = async (id, newPassword) => {
    const auth = getAuth();

    const user = auth.currentUser;

    if (!user) {
      return toast.error("User not found");
    }

    updatePassword(user, newPassword)
      .then(() => {
        if (user) {
          logOut().then(() => {
            setUser(null);
            localStorage.removeItem("token");
          });
          toast.success("Password updated successfully");
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });

    try {
      await axios.put(
        `${baseUrl}/auth/change-password?id=${id}`,
        { newPassword },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((data) => {
        if (data?.user?.email) {
          const userInfo = {
            name: data?.user?.displayName,
            email: data?.user?.email,
          };
          fetch(`${baseUrl}/auth/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              localStorage.setItem("token", data?.token);
              toast.success(data?.message);
            });
        }
      });
    } catch (error) {
      toast.error("Login faield");
    }
  };

  const FBLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider).then((data) => {
        console.log(data);
      });
    } catch (error) {
      toast.error("Login faield");
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth).then(() => {
        localStorage.removeItem("token");
        setUser(null);
      });
      toast.success("logout success");
    } catch (error) {
      toast.error("Something else");
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    googleLogin,
    FBLogin,
    createUser,
    updateProfileData,
    signIn,
    logOut,
    changePassword,
    loading,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
