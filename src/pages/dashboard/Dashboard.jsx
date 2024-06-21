import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../config/config";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    fetch(`${baseUrl}/user/userEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data?.user);
      });
  }, [user]);
  return (
    <div className="card flex justify-between text-wrap card-side bg-base-100 rounded-lg shadow-2xl border">
      <figure>
        <img
          src={user?.photoURL || userInfo?.avater?.url}
          alt="Movie"
          className="rounded-full ml-2 w-40 p-2"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{userInfo?.name || user?.displayName}</h2>
        <p>Email: {userInfo?.email || user?.email}</p>
        <p>UID: {userInfo?._id || user?.uid}</p>
      </div>

      <Link
        to={`/dashboard/profile/edit/${userInfo?._id || user?.uid}`}
        className="btn btn-primary p-2 m-2"
      >
        Edit Profile
      </Link>
      <Link
        to={`/dashboard/profile/change-password/${userInfo?._id || user?.uid}`}
        className="btn btn-primary p-2 m-2"
      >
        Change Password
      </Link>
    </div>
  );
};

export default Dashboard;
