import loginImg from "../../../assets/images/login/login-img.png";

const LoginBanner = ({ children }) => {
  return (
    <div
      className="flex-1 min-h-[802px] rounded-[16px] bg-cover bg-center bg-no-repeat flex justify-center items-center relative"
      style={{ backgroundImage: `url('${loginImg}')` }}
    >
      <div className="bg-[#152A16] opacity-[0.7] max-w-[341px] text-center rounded-[10px] py-[30px] px-[35px]">
        <p className="text-white text-[22px] font-medium">
          {children}
          
        </p>
      </div>
      <ul className="flex gap-3 justify-center absolute bottom-6">
        {[0, 2, 4].map((num) => (
          <li key={num}>
            <button
              className={`rounded-full hover:bg-primary-color ${
                2 === num ? "bg-primary-color" : "bg-[#3B463373]"
              } duration-300 transition w-[9px] h-[9px] `}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoginBanner;
