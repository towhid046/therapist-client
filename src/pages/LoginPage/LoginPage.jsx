import LoginBanner from "./LoginBanner/LoginBanner";
import SocialLogin from "./SocialLogin/SocialLogin";
import LoginForm from "./LoginForm/LoginForm";
import Logo from "./../../components/Shared/Logo/Logo";
import LoginHeader from "./LoginHeader/LoginHeader";
import useScrollToTop from "../../hooks/useScrollToTop";
const LoginPage = () => {
  useScrollToTop();
  return (
    <section className="container mx-auto px-4 flex justify-between gap-28 items-center bg-white py-24">
      <div className="flex-1 text-[#5C635A]">
        <Logo />

        <LoginHeader
          title={"Log In To Your Account"}
          description={"Welcome Back! Select a method to login:"}
          customClass={"mb-10"}
        />
        {/* social login */}
        <SocialLogin />

        {/* or continue with email */}
        <LoginForm />
      </div>

      {/* ----------------------------------------------------------- */}
      <LoginBanner>
        <span className="font-semibold text-primary-color">Sign in</span> to
        view all the message therapist
      </LoginBanner>
    </section>
  );
};

export default LoginPage;
