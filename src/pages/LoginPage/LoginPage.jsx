import LoginBanner from "./LoginBanner/LoginBanner";
import SocialLogin from "./SocialLogin/SocialLogin";
import LoginForm from "./LoginForm/LoginForm";
import Logo from "./../../components/Shared/Logo/Logo";
const LoginPage = () => {
  return (
    <section className="container mx-auto px-4 flex justify-between gap-28 items-center bg-white py-24">
      <div className="flex-1 text-[#5C635A]">
        <Logo />
        <div className="mt-6 mb-10">
          <h2 className="mb-6 text-[#152A16] text-[30px] font-semibold">
            Log In To Your Account
          </h2>
          <p className="">Welcome Back! Select a method to login:</p>
        </div>

        {/* social login */}
        <SocialLogin />

        {/* or continue with email */}
        <LoginForm />
      </div>

      {/* ----------------------------------------------------------- */}
      <LoginBanner />
    </section>
  );
};

export default LoginPage;
