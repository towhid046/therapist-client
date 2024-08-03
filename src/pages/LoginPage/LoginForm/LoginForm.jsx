import { BsCheck } from "react-icons/bs";
import lineX from "../../../assets/images/icons/line-x.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2.5 mb-8 justify-between">
        <img className="flex-1" src={lineX} alt="" />
        <span className="text-[14px] flex-1">Or Continue with Email</span>
        <img className="flex-1" src={lineX} alt="" />
      </div>

      {/* email login form */}
      <form>
        <div className="flex flex-col gap-3 mb-8">
          <label className="text-[#152A16] font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="text-[15px] px-5 py-3.5 rounded-[10px] border focus:outline-none focus:border-primary-color focus:border-opacity-50"
          />
        </div>

        <div className="flex flex-col gap-3 mb-[14px]">
          <label className="text-[#152A16] font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="text-[15px] px-5 py-3.5 rounded-[10px] border focus:outline-none focus:border-primary-color focus:border-opacity-50"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2.5">
            {!toggle ? (
              <div
                onClick={() => setToggle(!toggle)}
                className="cursor-pointer w-[17px] h-[16px] border rounded"
              ></div>
            ) : (
              <div
                onClick={() => setToggle(!toggle)}
                className="cursor-pointer w-[17px] h-[16px] border rounded flex justify-center items-center bg-primary-color"
              >
                <BsCheck className="text-white" />
              </div>
            )}
            <span
              onClick={() => setToggle(!toggle)}
              className="cursor-pointer text-[14px]"
            >
              Remember me
            </span>
          </div>
          <u className="text-primary-color font-medium cursor-pointer">
            Forgot password?
          </u>
        </div>

        {/* sign in button */}

        <div className="flex justify-center mt-16">
          <button className="px-20 py-[14px] rounded-xl bg-primary-color text-white">
            Sign in
          </button>
        </div>

        <p className="text-center mt-4 text-[15px]">
          Don't Have an Account?{" "}
          <Link to={"/registration"}>
            <u className="text-primary-color font-medium">Create Account</u>{" "}
          </Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
