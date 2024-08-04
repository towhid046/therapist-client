import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import NavbarLeft from "./../../components/Shared/NavbarLeft/NavbarLeft";
import NavbarTop from "./../../components/Shared/NavbarTop/NavbarTop";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get(
          `https://assignment-11-server-gamma-tawny.vercel.app/services?search=${searchText}`
        );
        setServices(res.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [searchText]);

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearchText(text);
  };

  return (
    <section className="flex justify-between mx-auto min-w-full">
      <NavbarLeft />

      <div className="w-full">
        <NavbarTop />
        <div className="bg-secondary-color p-[30px]">
          <form
            onSubmit={handleSearch}
            className="bg-white border pl-5 mb-5 pr-1.5 py-1.5 w-full rounded-[10px] flex justify-between items-center gap-3 text-[15px]"
          >
            <input
              type="text"
              name="search"
              onChange={(e) => setSearchText(e.target.value)}
              required
              placeholder="Search by service name"
              className="bg-white text-gray-500 focus:outline-none w-full"
            />
            <input
              type="submit"
              className="bg-primary-color rounded-lg px-6 py text-white py-2 font-medium text-[14px] cursor-pointer"
              value="Search"
            />
          </form>

          {isLoading ? (
            <div className="flex justify-center min-h-screen py-12 text-xl font-semibold">
              Loading...
            </div>
          ) : (
            <ul className="grid grid-cols-3 gap-6">
              {services.map((service) => (
                <li key={service._id} className="p-5 rounded-[10px] bg-white">
                  <figure className="flex justify-center">
                    <img
                      className="w-60 h-60 object-cover rounded-[10px]"
                      src={service.image_url}
                      alt=""
                    />
                  </figure>
                  <div className="text-center mt-5 space-y-1">
                    <p className="text-lg font-semibold">
                      Service Name: {service.service_name}
                    </p>
                    <p className="font-medium text-gray-600">
                      Therapist Name: {service?.provider_info?.name}
                    </p>
                    <p className="text-[14px] text-gray-600">
                      Therapist Email: {service?.provider_info?.name}
                    </p>
                    <p className="text-[14px] text-gray-600">
                      Rating: {service?.provider_info?.rating}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
