import LoginBanner from "./../LoginPage/LoginBanner/LoginBanner";
import Logo from "./../../components/Shared/Logo/Logo";
import LoginHeader from "./../LoginPage/LoginHeader/LoginHeader";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import useScrollToTop from "../../hooks/useScrollToTop";

const RegistrationPage = () => {
  useScrollToTop();

  return (
    <section className="container mx-auto px-4 flex justify-between gap-28 items-center bg-white py-24">
      <div className="flex-1 text-[#5C635A]">
        <div className="mb-10">
          <Logo />
          <LoginHeader
            title={"Sign In To Your Account"}
            description={`elcome Back! By click the sign up button, you're agree toZenitood Terms and Service and acknlowledge the`}
          />
          <span className="text-primary-color underline cursor-pointer">
            Privacy and Policy
          </span>
        </div>

        {/* registration form */}
        <RegistrationForm />
      </div>
      <div className="flex-1">
        <LoginBanner>
          <span className="font-semibold text-primary-color">
            Create Account
          </span>{" "}
          <br />
          Fill in Your Information
        </LoginBanner>
      </div>
    </section>
  );
};

export default RegistrationPage;
