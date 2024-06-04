import { FaFacebook } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const FbLogin = () => {
  const { FBLogin } = useAuth();

  const handleFBSignIn = () => {
    FBLogin();
  };

  return (
    <button onClick={handleFBSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FaFacebook size={24} />
        <p>Facebook</p>
      </div>
    </button>
  );
};

export default FbLogin;
