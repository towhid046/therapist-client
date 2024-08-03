import google from "../../../assets/images/icons/google.svg";
import facebook from "../../../assets/images/icons/facebook.svg";
import useAuth from "./../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SocialLogin = () => {
  const { logInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const handleLoginWithGoogle = async () => {
    try {
      await logInWithGoogle();
      navigate("/");
      toast.success("Login success");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex justify-between mb-8 gap-12">
      <button
        onClick={handleLoginWithGoogle}
        className="flex flex-1 justify-center items-center px-10 py-[14px] rounded-lg shadow-md bg-gradient-to-r from-[#e4e4e4] to-[#ffffff]"
      >
        <img src={google} alt="Google Logo" className="w-5 h-5 mr-2" />
        <span className="text-[#152A16] font-medium">Google</span>
      </button>

      <button className="flex flex-1 justify-center items-center px-10 py-[14px] rounded-xl bg-gradient-to-r from-[#298fff] to-[#0778f5]">
        <img src={facebook} alt="Facebook Logo" className="w-5 h-5 mr-2" />
        <span className="text-white">Facebook</span>
      </button>
    </div>
  );
};

export default SocialLogin;
