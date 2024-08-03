const locations = [
  ["Atlanta, GA", "Indianapolis, IN", "Philadelphia, PA"],
  ["Boston, MA", "Jacksonville, FL", "Queens, NY"],
  ["Chicago, IL", "Kansas City, MO", "Raleigh, NC"],
  ["Chicago, IL", "Los Angeles, CA", "San Antonio, TX"],
  ["El Paso, TX", "Miami, FL", "Tucson, AZ"],
  ["Fresno, CA", "Nashville, TN", "Upland, CA"],
  ["Houston, TX", "Oklahoma City, OK", "Washington, D.C."],
];

const PopularCities = () => {
  return (
    <ul className="bg-white py-[30px] rounded-[10px]">
      {locations.map((location, index) => (
        <li
          className={`${
            index === locations.length - 1 ? "border-0" : "border-b"
          } grid py-[16.6px] grid-cols-3 tex-left px-[30px]`}
          key={location}
        >
          {location.map((loc) => (
            <u className="text-primary-color text-left text-[14px]" key={loc}>
              {loc}
            </u>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default PopularCities;
