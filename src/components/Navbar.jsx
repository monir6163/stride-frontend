import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../config/config";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { logOut, user } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    fetch(`${baseUrl}/user/userEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data?.user);
      });
  }, [user]);
  const handleLogout = async () => {
    await logOut();
  };
  return (
    <div className="navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/dogs"}>Dogs Shop</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn bg-red-500 text-white"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">
          <span className="text-2xl font-bold text-white">DogShop</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/dogs"}>Dogs Shop</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          {!user && (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {user && (
        <>
          <div className="navbar-end space-x-2">
            <button
              onClick={handleLogout}
              className="btn bg-red-500 text-white hidden lg:block"
            >
              Logout
            </button>
            <div className="avatar">
              <div className="w-12 rounded-full border-2 border-black">
                <img src={user?.photoURL || userInfo?.avater?.url} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
