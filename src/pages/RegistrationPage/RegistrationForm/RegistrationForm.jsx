import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const RegistrationForm = () => {
  const [toggle, setToggle] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useAuth();

  const handleRegistration = async (data) => {
    const { password, email, username, confirmPassword } = data;

    if (password !== confirmPassword) {
      return toast.error("Password Not Match");
    }
    try {
      await createUser(email, password);
      updateUserProfile(username);
      toast.success("Registration success");

      navigate("/");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div className="flex flex-col gap-1.5 mb-4 ">
        <label className="text-[#152A16] font-medium">Name</label>
        <input
          type="text"
          {...register("username")}
          placeholder="@username"
          className="text-[15px] px-5 py-3.5 rounded-[10px] border focus:outline-none focus:border-primary-color focus:border-opacity-50"
          required
        />
      </div>

      <div className="flex flex-col gap-1.5 mb-4 ">
        <label className="text-[#152A16] font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          placeholder="Enter your email"
          className="text-[15px] px-5 py-3.5 rounded-[10px] border focus:outline-none focus:border-primary-color focus:border-opacity-50"
          required
        />
      </div>
      <div className="flex flex-col gap-1.5 mb-4">
        <label className="text-[#152A16] font-medium">Password</label>
        <input
          type="password"
          {...register("password")}
          placeholder="Enter your password"
          className="text-[15px] px-5 py-3.5 rounded-[10px] border focus:outline-none focus:border-primary-color focus:border-opacity-50"
          required
        />
      </div>
      <div className="flex flex-col gap-1.5 mb-2">
        <label className="text-[#152A16] font-medium">Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Re-type password"
          className="text-[15px] px-5 py-3.5 rounded-[10px] border focus:outline-none focus:border-primary-color focus:border-opacity-50"
          required
        />
      </div>
      <div>
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
            className="cursor-pointer text-[14px] text-primary-color"
          >
            Accept Terms of Service
          </span>
        </div>
      </div>

      {/* sign in button */}

      <div className="flex justify-center mt-16">
        <button className="px-20 py-[14px] rounded-xl bg-primary-color text-white">
          Sign up
        </button>
      </div>

      <p className="text-center mt-4 text-[15px]">
        Already Have an Account?{" "}
        <Link to={"/login"}>
          <u className="text-primary-color font-medium">Login</u>{" "}
        </Link>
      </p>
    </form>
  );
};

export default RegistrationForm;
