import { useLoaderData } from "react-router-dom";
import ChangePass from "../../components/dashboard/Password";

const ChangePassword = () => {
  const data = useLoaderData();
  return (
    <div className="flex justify-center">
      <ChangePass data={data?.user} />
    </div>
  );
};

export default ChangePassword;
