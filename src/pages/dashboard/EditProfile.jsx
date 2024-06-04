import { useLoaderData } from "react-router-dom";
import Profile from "../../components/dashboard/EditProfile";

const EditProfile = () => {
  const data = useLoaderData();
  return (
    <div className="flex justify-center">
      <Profile data={data?.user} />
    </div>
  );
};

export default EditProfile;
