const LoginHeader = ({ title, description, customClass }) => {
  return (
    <div className={`mt-6 ${customClass}`}>
      <h2 className="mb-6 text-[#152A16] text-[30px] font-semibold">{title}</h2>
      <p className="text-[#5C635A]">{description}</p>
    </div>
  );
};

export default LoginHeader;
